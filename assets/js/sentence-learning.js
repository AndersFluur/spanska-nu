// Sentence-based learning logic

let currentMode = 'list'; // 'list' or 'sequential'
let currentSentenceIndex = 0;
let currentVerbIndex = 0; // For list mode verb navigation
let allSentences = []; // Flattened array of all sentences
let verbKeys = []; // Array of verb keys in order
let sentenceInputCounter = 0;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    flattenSentences();
    renderListView();
    updateProgress();

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

    // Update total count
    totalInputs = allSentences.length;
    document.getElementById('total-count').textContent = totalInputs;
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
}

// Render list view (single verb with all its sentences)
function renderListView(verbIndex) {
    const container = document.getElementById('sentences-container');
    container.innerHTML = '';
    sentenceInputCounter = 0;

    if (verbIndex < 0 || verbIndex >= verbKeys.length) {
        return;
    }

    const verbKey = verbKeys[verbIndex];
    const verbData = sentenceData[verbKey];

    // Create verb group
    const verbGroup = document.createElement('div');
    verbGroup.className = 'verb-group';

    // Verb header
    const header = document.createElement('div');
    header.className = 'verb-group-header';
    header.textContent = `${verbData.infinitive} (${verbData.translation})`;
    verbGroup.appendChild(header);

    // Render each sentence
    verbData.sentences.forEach((sentence, idx) => {
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

    if (index < 0 || index >= allSentences.length) {
        return;
    }

    const sentenceData = allSentences[index];
    const card = createSentenceCard(sentenceData, sentenceData.verb, {
        infinitive: sentenceData.verbInfinitive,
        translation: sentenceData.verbTranslation
    }, true);

    card.classList.add('sequential-card');
    container.appendChild(card);

    // Update counter
    document.getElementById('sentence-counter').textContent = `${index + 1} / ${allSentences.length}`;

    // Update navigation buttons
    const prevBtn = document.querySelector('.sequential-nav button:first-child');
    const nextBtn = document.querySelector('.sequential-nav button:last-child');
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === allSentences.length - 1;
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
    input.onblur = function() { checkAnswer(inputId, sentence.blank, false); };
    input.onkeypress = function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            checkAnswer(inputId, sentence.blank, true);
            if (currentMode === 'sequential' && input.classList.contains('correct')) {
                // Auto-advance on correct answer in sequential mode
                setTimeout(() => nextSentence(), 500);
            }
        }
    };
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
    checkBtn.onclick = function() { checkAnswer(inputId, sentence.blank, true); };
    actions.appendChild(checkBtn);

    // Feedback div
    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    feedback.id = `${inputId}-feedback`;
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

// Navigation functions for list mode (verb-by-verb)
function nextVerb() {
    if (currentVerbIndex < verbKeys.length - 1) {
        currentVerbIndex++;
        renderListView(currentVerbIndex);
    }
}

function previousVerb() {
    if (currentVerbIndex > 0) {
        currentVerbIndex--;
        renderListView(currentVerbIndex);
    }
}

// Update list mode navigation buttons
function updateListNavigation(verbIndex) {
    const prevBtn = document.querySelector('#list-nav .nav-btn:first-child');
    const nextBtn = document.querySelector('#list-nav .nav-btn:last-child');
    const counter = document.getElementById('verb-counter');

    if (prevBtn && nextBtn && counter) {
        prevBtn.disabled = verbIndex === 0;
        nextBtn.disabled = verbIndex === verbKeys.length - 1;

        // Update counter with current and next verb names
        const currentVerb = sentenceData[verbKeys[verbIndex]].infinitive;
        counter.textContent = `${currentVerb} (${verbIndex + 1} / ${verbKeys.length})`;

        // Update next button text with next verb name
        if (verbIndex < verbKeys.length - 1) {
            const nextVerb = sentenceData[verbKeys[verbIndex + 1]].infinitive;
            nextBtn.innerHTML = `Nästa → ${nextVerb}`;
        } else {
            nextBtn.textContent = 'Nästa';
        }

        // Update previous button text with previous verb name
        if (verbIndex > 0) {
            const prevVerb = sentenceData[verbKeys[verbIndex - 1]].infinitive;
            prevBtn.innerHTML = `${prevVerb} ← Föregående`;
        } else {
            prevBtn.textContent = 'Föregående';
        }
    }
}

// Navigation functions for sequential mode (sentence-by-sentence)
function nextSentence() {
    if (currentSentenceIndex < allSentences.length - 1) {
        currentSentenceIndex++;
        renderSequentialView(currentSentenceIndex);
    }
}

function previousSentence() {
    if (currentSentenceIndex > 0) {
        currentSentenceIndex--;
        renderSequentialView(currentSentenceIndex);
    }
}

// Override resetAll to work with sentence inputs
function resetAll() {
    const inputs = document.querySelectorAll('.sentence-input');
    inputs.forEach(input => {
        input.value = '';
        input.classList.remove('correct', 'incorrect');
    });

    const feedbacks = document.querySelectorAll('.feedback');
    feedbacks.forEach(feedback => {
        feedback.innerHTML = '';
    });

    updateProgress();
}

// Override checkAll to work with sentence inputs
function checkAll() {
    const inputs = document.querySelectorAll('.sentence-input');
    inputs.forEach(input => {
        const correctAnswer = input.dataset.correct;
        if (input.value.trim() !== '') {
            checkAnswer(input.id, correctAnswer, false);
        }
    });
}
