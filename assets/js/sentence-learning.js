// Sentence-based learning logic

let currentMode = 'list'; // 'list' or 'sequential'
let currentSentenceIndex = 0;
let currentVerbIndex = 0; // For list mode verb navigation
let allSentences = []; // Flattened array of all sentences
let verbKeys = []; // Array of verb keys in order
let filteredSentences = [];
let filteredVerbKeys = [];
let currentArea = 'all';
let currentLevel = 1;
let sentenceInputCounter = 0;

// localStorage key for saving progress
const STORAGE_KEY = 'spanska-nu-progress';

// Progress tracking
let sentenceProgress = {}; // { "ser-yo": { correct: true, attempts: 2, lastAttempt: timestamp } }

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    flattenSentences();
    renderStudyOverview();
    renderLevelToggle();
    renderAreaFilters();
    loadProgress();
    updateFilteredContent();

    // Render the appropriate view based on saved mode
    if (currentMode === 'list') {
        renderListView(currentVerbIndex);
    } else {
        renderSequentialView(currentSentenceIndex);
    }

    updateProgress();
    updateStatsDisplay();

    // Add mobile tooltip tap handlers
    document.addEventListener('click', handleTooltipTap);
});

// Flatten sentence data into a single array for sequential mode
function flattenSentences() {
    allSentences = [];
    verbKeys = Object.keys(sentenceData);

    for (const [verbKey, verbData] of Object.entries(sentenceData)) {
        verbData.sentences.forEach((sentence, idx) => {
            allSentences.push({
                verb: verbKey,
                verbInfinitive: verbData.infinitive,
                verbTranslation: verbData.translation,
                ...sentence
            });
        });
    }

    updateFilteredContent();
}

function getSentenceLevel(sentence) {
    const verbLevel = verbLevelMap[sentence.verb] || 3;

    if (verbLevel === 1) {
        if (['yo', 'tú', 'él/ella'].includes(sentence.person)) {
            return 1;
        }
        if (sentence.person === 'nosotros') {
            return 2;
        }
        return 3;
    }

    if (verbLevel === 2) {
        if (['yo', 'tú', 'él/ella'].includes(sentence.person)) {
            return 2;
        }
        return 3;
    }

    return 3;
}

function updateFilteredContent() {
    const levelFilteredVerbKeys = verbKeys.filter(verbKey => (verbLevelMap[verbKey] || 3) <= currentLevel);

    filteredVerbKeys = currentArea === 'all'
        ? [...levelFilteredVerbKeys]
        : levelFilteredVerbKeys.filter(verbKey => verbAreaMap[verbKey] === currentArea);

    filteredSentences = allSentences.filter(sentence => {
        const matchesLevel = getSentenceLevel(sentence) <= currentLevel;
        const matchesArea = currentArea === 'all' || verbAreaMap[sentence.verb] === currentArea;
        return matchesLevel && matchesArea;
    });

    currentVerbIndex = Math.min(currentVerbIndex, Math.max(filteredVerbKeys.length - 1, 0));
    currentSentenceIndex = Math.min(currentSentenceIndex, Math.max(filteredSentences.length - 1, 0));

    document.getElementById('total-count').textContent = filteredSentences.length;
}

function renderStudyOverview() {
    const container = document.getElementById('study-overview');
    if (!container) {
        return;
    }

    const areaKeys = Object.keys(studyAreas).filter(key => key !== 'all');
    container.innerHTML = areaKeys.map(areaKey => {
        const area = studyAreas[areaKey];
        const verbs = area.focus.map(verbKey => sentenceData[verbKey].infinitive).join(', ');
        return `
            <div class="study-card">
                <h3>${area.title}</h3>
                <p>${area.description}</p>
                <div class="study-card-meta">Fokusverb: ${verbs}</div>
            </div>
        `;
    }).join('');
}

function getLevelStats() {
    return {
        verbCount: verbKeys.filter(verbKey => (verbLevelMap[verbKey] || 3) <= currentLevel).length,
        sentenceCount: allSentences.filter(sentence => getSentenceLevel(sentence) <= currentLevel).length
    };
}

function renderLevelToggle() {
    const container = document.getElementById('level-toggle');
    if (!container) {
        return;
    }

    container.innerHTML = Object.entries(sentenceLevelOptions).map(([levelKey, label]) => `
        <button class="level-btn ${Number(levelKey) === currentLevel ? 'active' : ''}" data-level="${levelKey}">
            ${label}
        </button>
    `).join('');

    container.querySelectorAll('.level-btn').forEach(button => {
        button.addEventListener('click', () => setLevel(Number(button.dataset.level)));
    });

    const stats = getLevelStats();
    const summary = document.getElementById('level-summary');
    if (summary) {
        summary.textContent = `${sentenceLevelOptions[currentLevel]} innehåller ${stats.verbCount} verb och ${stats.sentenceCount} meningar att nöta in.`;
    }
}

function renderAreaFilters() {
    const container = document.getElementById('area-filters');
    if (!container) {
        return;
    }

    container.innerHTML = Object.entries(studyAreas).map(([areaKey, area]) => `
        <button class="area-filter-btn ${areaKey === currentArea ? 'active' : ''}" data-area="${areaKey}">
            ${area.title}
        </button>
    `).join('');

    container.querySelectorAll('.area-filter-btn').forEach(button => {
        button.addEventListener('click', () => setAreaFilter(button.dataset.area));
    });
}

function setAreaFilter(areaKey) {
    currentArea = areaKey;
    currentVerbIndex = 0;
    currentSentenceIndex = 0;
    updateFilteredContent();
    renderAreaFilters();

    if (currentMode === 'list') {
        renderListView(currentVerbIndex);
    } else {
        renderSequentialView(currentSentenceIndex);
    }

    updateProgress();
    saveProgress();
}

function setLevel(level) {
    currentLevel = level;
    currentVerbIndex = 0;
    currentSentenceIndex = 0;
    updateFilteredContent();
    renderLevelToggle();

    if (currentMode === 'list') {
        renderListView(currentVerbIndex);
    } else {
        renderSequentialView(currentSentenceIndex);
    }

    updateProgress();
    saveProgress();
}

// Save progress to localStorage
function saveProgress() {
    const progressData = {
        sentenceProgress: sentenceProgress,
        currentVerbIndex: currentVerbIndex,
        currentSentenceIndex: currentSentenceIndex,
        currentMode: currentMode,
        currentArea: currentArea,
        currentLevel: currentLevel,
        lastVisit: Date.now()
    };

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
        console.log('✓ Progress saved');
    } catch (e) {
        console.error('Failed to save progress:', e);
    }
}

// Load progress from localStorage
function loadProgress() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const progressData = JSON.parse(saved);
            sentenceProgress = progressData.sentenceProgress || {};
            currentVerbIndex = progressData.currentVerbIndex || 0;
            currentSentenceIndex = progressData.currentSentenceIndex || 0;
            currentMode = progressData.currentMode || 'list';
            currentArea = progressData.currentArea || 'all';
            currentLevel = progressData.currentLevel || 1;

            console.log('✓ Progress loaded:', Object.keys(sentenceProgress).length, 'sentences tracked');

            // Update mode buttons to reflect saved mode
            document.getElementById('list-mode-btn').classList.toggle('active', currentMode === 'list');
            document.getElementById('sequential-mode-btn').classList.toggle('active', currentMode === 'sequential');
            renderLevelToggle();
            renderAreaFilters();
        }
    } catch (e) {
        console.error('Failed to load progress:', e);
    }
}

// Reset all progress
function resetProgress() {
    if (confirm('Är du säker på att du vill nollställa all framsteg? Detta kan inte ångras.')) {
        sentenceProgress = {};
        currentVerbIndex = 0;
        currentSentenceIndex = 0;
        currentArea = 'all';
        currentLevel = 1;

        try {
            localStorage.removeItem(STORAGE_KEY);
            console.log('✓ Progress reset');
        } catch (e) {
            console.error('Failed to reset progress:', e);
        }

        renderLevelToggle();
        renderAreaFilters();
        updateFilteredContent();

        // Re-render and update
        if (currentMode === 'list') {
            renderListView(currentVerbIndex);
        } else {
            renderSequentialView(currentSentenceIndex);
        }
        updateProgress();
        updateStatsDisplay();
    }
}

// Get sentence key for progress tracking
function getSentenceKey(verbKey, person) {
    return `${verbKey}-${person}`;
}

// Track sentence attempt
function trackSentenceAttempt(verbKey, person, isCorrect) {
    const key = getSentenceKey(verbKey, person);

    if (!sentenceProgress[key]) {
        sentenceProgress[key] = {
            correct: false,
            attempts: 0,
            lastAttempt: null
        };
    }

    sentenceProgress[key].attempts++;
    sentenceProgress[key].lastAttempt = Date.now();

    if (isCorrect) {
        sentenceProgress[key].correct = true;
    }

    saveProgress();
    updateStatsDisplay();
}

// Get statistics
function getStats() {
    const totalSentences = filteredSentences.length;
    const completedSentences = filteredSentences.filter(sentence => {
        const key = getSentenceKey(sentence.verb, sentence.person);
        return sentenceProgress[key]?.correct;
    }).length;
    const totalAttempts = filteredSentences.reduce((sum, sentence) => {
        const key = getSentenceKey(sentence.verb, sentence.person);
        return sum + (sentenceProgress[key]?.attempts || 0);
    }, 0);

    // Calculate per-verb stats
    const verbStats = {};
    for (const verbKey of filteredVerbKeys) {
        const verbSentences = filteredSentences.filter(s => s.verb === verbKey);
        const completed = verbSentences.filter(s => {
            const key = getSentenceKey(s.verb, s.person);
            return sentenceProgress[key]?.correct;
        }).length;

        verbStats[verbKey] = {
            total: verbSentences.length,
            completed: completed,
            percentage: Math.round((completed / verbSentences.length) * 100)
        };
    }

    return {
        totalSentences,
        completedSentences,
        totalAttempts,
        percentage: totalSentences > 0 ? Math.round((completedSentences / totalSentences) * 100) : 0,
        verbStats
    };
}

// Update stats display
function updateStatsDisplay() {
    const stats = getStats();
    const correctCount = document.getElementById('correct-count');

    if (correctCount) {
        correctCount.textContent = stats.completedSentences;
    }

    // Update progress bar
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = stats.percentage + '%';
        progressFill.textContent = stats.percentage + '%';
    }
}

// Switch between list and sequential modes
function switchMode(mode) {
    currentMode = mode;

    // Update button states
    document.getElementById('list-mode-btn').classList.toggle('active', mode === 'list');
    document.getElementById('sequential-mode-btn').classList.toggle('active', mode === 'sequential');

    // Show/hide navigation based on mode
    document.getElementById('list-nav').style.display = mode === 'list' ? 'flex' : 'none';
    document.getElementById('sequential-nav').style.display = mode === 'sequential' ? 'flex' : 'none';

    // Render appropriate view
    if (mode === 'list') {
        renderListView(currentVerbIndex);
    } else {
        renderSequentialView(currentSentenceIndex);
    }

    // Save mode preference
    saveProgress();
}

// Render list view (single verb with all its sentences)
function renderListView(verbIndex) {
    const container = document.getElementById('sentences-container');
    container.innerHTML = '';
    sentenceInputCounter = 0;

    if (filteredVerbKeys.length === 0) {
        container.innerHTML = '<div class="empty-state">Inga övningar hittades i det här delområdet ännu.</div>';
        updateListNavigation(0);
        return;
    }

    if (verbIndex < 0 || verbIndex >= filteredVerbKeys.length) {
        return;
    }

    const verbKey = filteredVerbKeys[verbIndex];
    const verbData = sentenceData[verbKey];
    const area = studyAreas[verbAreaMap[verbKey]];
    const visibleSentences = verbData.sentences.filter(sentence =>
        getSentenceLevel({ ...sentence, verb: verbKey }) <= currentLevel
    );

    // Create verb group
    const verbGroup = document.createElement('div');
    verbGroup.className = 'verb-group';

    // Verb header
    const header = document.createElement('div');
    header.className = 'verb-group-header';
    header.innerHTML = `
        <div>${verbData.infinitive} (${verbData.translation})</div>
        <div class="verb-group-subtitle">${area.title} • ${visibleSentences.length} meningar i detta steg</div>
    `;
    verbGroup.appendChild(header);

    // Render each sentence
    visibleSentences.forEach((sentence, idx) => {
        const card = createSentenceCard(sentence, verbKey, verbData);
        verbGroup.appendChild(card);
    });

    container.appendChild(verbGroup);

    // Update navigation
    updateListNavigation(verbIndex);
}

// Render sequential view (single sentence)
function renderSequentialView(index) {
    const container = document.getElementById('sentences-container');
    container.innerHTML = '';
    sentenceInputCounter = 0;

    if (filteredSentences.length === 0) {
        container.innerHTML = '<div class="empty-state">Inga övningar hittades i det här delområdet ännu.</div>';
        document.getElementById('sentence-counter').textContent = '0 / 0';
        return;
    }

    if (index < 0 || index >= filteredSentences.length) {
        return;
    }

    const sentence = filteredSentences[index];
    const card = createSentenceCard(sentence, sentence.verb, {
        infinitive: sentence.verbInfinitive,
        translation: sentence.verbTranslation
    }, true);

    card.classList.add('sequential-card');
    container.appendChild(card);

    // Update counter
    document.getElementById('sentence-counter').textContent = `${index + 1} / ${filteredSentences.length}`;

    // Update navigation buttons
    const prevBtn = document.querySelector('.sequential-nav button:first-child');
    const nextBtn = document.querySelector('.sequential-nav button:last-child');
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === filteredSentences.length - 1;
}

// Create a sentence card element
function createSentenceCard(sentence, verbKey, verbData, isSequential = false) {
    const card = document.createElement('div');
    card.className = 'sentence-card';

    const inputId = `sent-${sentenceInputCounter++}`;

    // Add verb infinitive as heading
    const verbHeading = document.createElement('div');
    verbHeading.className = 'sentence-verb-heading';
    verbHeading.textContent = `${verbData.infinitive} (${verbData.translation})`;
    card.appendChild(verbHeading);

    // Build sentence with blank
    const sentenceParts = sentence.spanish.split('___');

    // Tooltip wrapper
    const tooltipWrapper = document.createElement('div');
    tooltipWrapper.className = 'tooltip-wrapper';
    tooltipWrapper.dataset.sentenceId = inputId;

    // Sentence text
    const sentenceText = document.createElement('p');
    sentenceText.className = 'sentence-text';

    // Before blank
    if (sentenceParts[0]) {
        sentenceText.appendChild(document.createTextNode(sentenceParts[0]));
    }

    // Input field
    const input = document.createElement('input');
    input.type = 'text';
    input.id = inputId;
    input.className = 'sentence-input';
    input.placeholder = '___';
    input.dataset.correct = sentence.blank;
    input.dataset.verbKey = verbKey;
    input.dataset.person = sentence.person;
    input.onblur = function() { checkSentenceAnswer(inputId, sentence.blank, false, verbKey, sentence.person); };
    input.onkeypress = function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            checkSentenceAnswer(inputId, sentence.blank, true, verbKey, sentence.person);
            if (currentMode === 'sequential' && input.classList.contains('correct')) {
                // Auto-advance on correct answer in sequential mode
                setTimeout(() => nextSentence(), 500);
            }
        }
    };

    // Restore saved answer if it exists
    const sentenceKey = getSentenceKey(verbKey, sentence.person);
    if (sentenceProgress[sentenceKey]?.correct) {
        input.value = sentence.blank;
        input.classList.add('correct');
    }

    sentenceText.appendChild(input);

    // After blank
    if (sentenceParts[1]) {
        sentenceText.appendChild(document.createTextNode(sentenceParts[1]));
    }

    tooltipWrapper.appendChild(sentenceText);

    // Tooltip with Swedish translation
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip-text';
    tooltip.textContent = sentence.swedish;
    tooltipWrapper.appendChild(tooltip);

    card.appendChild(tooltipWrapper);

    // Actions row
    const actions = document.createElement('div');
    actions.className = 'sentence-actions';

    // Speaker button (speaks and fills in answer)
    const speakerBtn = document.createElement('button');
    speakerBtn.className = 'speaker-btn';
    speakerBtn.innerHTML = '🔊';
    speakerBtn.title = `Lyssna och fyll i: ${sentence.spanish.replace('___', sentence.blank)}`;
    speakerBtn.onclick = function() {
        const fullSentence = sentence.spanish.replace('___', sentence.blank);
        speakAndFill(inputId, sentence.blank, fullSentence);
    };
    actions.appendChild(speakerBtn);

    // Check button
    const checkBtn = document.createElement('button');
    checkBtn.className = 'check-btn';
    checkBtn.textContent = 'Kolla';
    checkBtn.onclick = function() { checkSentenceAnswer(inputId, sentence.blank, true, verbKey, sentence.person); };
    actions.appendChild(checkBtn);

    // Feedback div
    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    feedback.id = `${inputId}-feedback`;

    // Show checkmark if already completed
    if (sentenceProgress[sentenceKey]?.correct) {
        feedback.innerHTML = '<span class="correct-icon">✓</span>';
    }

    actions.appendChild(feedback);

    card.appendChild(actions);

    return card;
}

// Handle tooltip tap on mobile
function handleTooltipTap(e) {
    // Only on mobile
    if (window.innerWidth > 768) return;

    const tooltipWrapper = e.target.closest('.tooltip-wrapper');

    if (tooltipWrapper) {
        // Toggle active class
        const wasActive = tooltipWrapper.classList.contains('active');

        // Remove active from all tooltips
        document.querySelectorAll('.tooltip-wrapper.active').forEach(el => {
            el.classList.remove('active');
        });

        // Toggle this one
        if (!wasActive) {
            tooltipWrapper.classList.add('active');
        }

        e.stopPropagation();
    } else {
        // Click outside - close all tooltips
        document.querySelectorAll('.tooltip-wrapper.active').forEach(el => {
            el.classList.remove('active');
        });
    }
}

// Check sentence answer and track progress
function checkSentenceAnswer(inputId, correctAnswer, forceCheck, verbKey, person) {
    // Call the original checkAnswer function from verbs.js
    checkAnswer(inputId, correctAnswer, forceCheck);

    // Track the attempt
    const input = document.getElementById(inputId);
    if (input) {
        const userAnswer = input.value.trim();
        const isCorrect = normalize(userAnswer) === normalize(correctAnswer);
        trackSentenceAttempt(verbKey, person, isCorrect);
    }
}

// Navigation functions for list mode (verb-by-verb)
function nextVerb() {
    if (currentVerbIndex < filteredVerbKeys.length - 1) {
        currentVerbIndex++;
        renderListView(currentVerbIndex);
        saveProgress();
    }
}

function previousVerb() {
    if (currentVerbIndex > 0) {
        currentVerbIndex--;
        renderListView(currentVerbIndex);
        saveProgress();
    }
}

// Update list mode navigation buttons
function updateListNavigation(verbIndex) {
    const prevBtn = document.querySelector('#list-nav .nav-btn:first-child');
    const nextBtn = document.querySelector('#list-nav .nav-btn:last-child');
    const counter = document.getElementById('verb-counter');

    if (prevBtn && nextBtn && counter) {
        if (filteredVerbKeys.length === 0) {
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            prevBtn.textContent = 'Föregående';
            nextBtn.textContent = 'Nästa';
            counter.textContent = 'Inga verb';
            return;
        }

        prevBtn.disabled = verbIndex === 0;
        nextBtn.disabled = verbIndex === filteredVerbKeys.length - 1;

        // Update counter with current and next verb names
        const currentVerb = sentenceData[filteredVerbKeys[verbIndex]].infinitive;
        counter.textContent = `${currentVerb} (${verbIndex + 1} / ${filteredVerbKeys.length})`;

        // Update next button text with next verb name
        if (verbIndex < filteredVerbKeys.length - 1) {
            const nextVerb = sentenceData[filteredVerbKeys[verbIndex + 1]].infinitive;
            nextBtn.innerHTML = `Nästa → ${nextVerb}`;
        } else {
            nextBtn.textContent = 'Nästa';
        }

        // Update previous button text with previous verb name
        if (verbIndex > 0) {
            const prevVerb = sentenceData[filteredVerbKeys[verbIndex - 1]].infinitive;
            prevBtn.innerHTML = `${prevVerb} ← Föregående`;
        } else {
            prevBtn.textContent = 'Föregående';
        }
    }
}

// Navigation functions for sequential mode (sentence-by-sentence)
function nextSentence() {
    if (currentSentenceIndex < filteredSentences.length - 1) {
        currentSentenceIndex++;
        renderSequentialView(currentSentenceIndex);
        saveProgress();
    }
}

function previousSentence() {
    if (currentSentenceIndex > 0) {
        currentSentenceIndex--;
        renderSequentialView(currentSentenceIndex);
        saveProgress();
    }
}

// Override resetAll to reset progress and clear inputs
function resetAll() {
    resetProgress();
}

// Override checkAll to work with sentence inputs
function checkAll() {
    const inputs = document.querySelectorAll('.sentence-input');
    inputs.forEach(input => {
        const correctAnswer = input.dataset.correct;
        const verbKey = input.dataset.verbKey;
        const person = input.dataset.person;
        if (input.value.trim() !== '') {
            checkSentenceAnswer(input.id, correctAnswer, false, verbKey, person);
        }
    });
}

// Toggle statistics panel
function toggleStats() {
    const panel = document.getElementById('stats-panel');
    const isVisible = panel.style.display !== 'none';

    if (isVisible) {
        panel.style.display = 'none';
    } else {
        // Update stats content
        const stats = getStats();
        const content = document.getElementById('stats-content');

        let html = `
            <div style="margin-bottom: 20px;">
                <h4>Översikt</h4>
                <p><strong>Delområde:</strong> ${studyAreas[currentArea].title}</p>
                <p><strong>Totalt klarat:</strong> ${stats.completedSentences} / ${stats.totalSentences} meningar (${stats.percentage}%)</p>
                <p><strong>Totalt antal försök:</strong> ${stats.totalAttempts}</p>
            </div>
            <h4>Per verb</h4>
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: #f0f0f0;">
                        <th style="padding: 8px; text-align: left;">Verb</th>
                        <th style="padding: 8px; text-align: center;">Klarat</th>
                        <th style="padding: 8px; text-align: center;">%</th>
                    </tr>
                </thead>
                <tbody>
        `;

        for (const verbKey of filteredVerbKeys) {
            const verbData = sentenceData[verbKey];
            const verbStat = stats.verbStats[verbKey];
            const rowColor = verbStat.percentage === 100 ? '#e8f8f5' : 'white';

            html += `
                <tr style="background: ${rowColor};">
                    <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${verbData.infinitive}</td>
                    <td style="padding: 8px; text-align: center; border-bottom: 1px solid #e0e0e0;">${verbStat.completed} / ${verbStat.total}</td>
                    <td style="padding: 8px; text-align: center; border-bottom: 1px solid #e0e0e0;">${verbStat.percentage}%</td>
                </tr>
            `;
        }

        html += `
                </tbody>
            </table>
        `;

        content.innerHTML = html;
        panel.style.display = 'block';

        // Scroll to stats panel
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
