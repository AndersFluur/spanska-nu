let totalInputs = 0;
let isMovingFocus = false;

function normalize(str) {
    return str.toLowerCase().trim()
        .replace(/å/g, 'a').replace(/ä/g, 'a').replace(/ö/g, 'o')
        .replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i')
        .replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/ñ/g, 'n');
}

function speakText(text) {
    return new Promise((resolve, reject) => {
        // Try browser's built-in speech synthesis first (most reliable)
        if ('speechSynthesis' in window) {
            try {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'es-ES';
                utterance.rate = 0.85;
                utterance.pitch = 1.0;
                utterance.volume = 1.0;

                utterance.onend = () => {
                    console.log('Speech finished successfully');
                    resolve();
                };

                utterance.onerror = (event) => {
                    console.error('Speech error:', event);
                    // Try Google TTS as fallback
                    tryGoogleTTS(text, resolve, reject);
                };

                // Small delay to ensure it works
                setTimeout(() => {
                    window.speechSynthesis.speak(utterance);
                }, 50);
            } catch (error) {
                console.error('speechSynthesis error:', error);
                tryGoogleTTS(text, resolve, reject);
            }
        } else {
            // No speech synthesis support, try Google TTS
            tryGoogleTTS(text, resolve, reject);
        }
    });
}

function tryGoogleTTS(text, resolve, reject) {
    console.log('Trying Google TTS fallback');
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=es&client=tw-ob&q=${encodeURIComponent(text)}`;
    const audio = new Audio(audioUrl);

    audio.onended = () => {
        console.log('Google TTS finished');
        resolve();
    };

    audio.onerror = (error) => {
        console.error('Google TTS failed:', error);
        alert('Ljuduppspelning fungerar inte. Kontrollera att ljud är aktiverat i webbläsaren.');
        resolve();
    };

    audio.play().catch((error) => {
        console.error('Audio play failed:', error);
        alert('Kan inte spela ljud. Klicka någonstans på sidan först (webbläsarens autoplay-policy).');
        resolve();
    });
}

function speakAndFill(inputId, correctAnswer, fullPhrase) {
    const input = document.getElementById(inputId);
    const feedback = document.getElementById(inputId + '-feedback');
    const userAnswer = input.value.trim();

    speakText(fullPhrase);

    const isCorrect = normalize(userAnswer) === normalize(correctAnswer);
    if (!isCorrect || userAnswer === '') {
        input.value = correctAnswer;
        input.classList.remove('incorrect');
        input.classList.add('correct');
        feedback.innerHTML = '<span class="correct-icon">✓</span>';

        updateProgress();
    }

    const nextInput = getNextInput(inputId);
    if (nextInput) {
        isMovingFocus = true;
        requestAnimationFrame(() => {
            nextInput.focus();
            setTimeout(() => { isMovingFocus = false; }, 150);
        });
    }
}

function speakAndFillInfinitive(inputId, correctAnswer, verbInfinitive) {
    const input = document.getElementById(inputId);
    const feedback = document.getElementById(inputId + '-feedback');
    const userAnswer = input.value.trim();

    speakText(verbInfinitive);

    const isCorrect = normalize(userAnswer) === normalize(correctAnswer);
    if (!isCorrect || userAnswer === '') {
        input.value = correctAnswer;
        input.classList.remove('incorrect');
        input.classList.add('correct');
        feedback.innerHTML = '<span class="correct-icon">✓</span>';

        updateProgress();
    }

    const nextInput = getNextInput(inputId);
    if (nextInput) {
        isMovingFocus = true;
        requestAnimationFrame(() => {
            nextInput.focus();
            setTimeout(() => { isMovingFocus = false; }, 150);
        });
    }
}

async function speakAllConjugations(conjugations, startInputId) {
    const allInputs = Array.from(document.querySelectorAll('input[type="text"]'));
    const startIndex = allInputs.findIndex(input => input.id === startInputId);

    for (let i = 0; i < conjugations.length; i++) {
        const conjugation = conjugations[i];
        const inputIndex = startIndex + 1 + i;

        if (inputIndex < allInputs.length) {
            const input = allInputs[inputIndex];
            const feedback = document.getElementById(input.id + '-feedback');

            const userAnswer = input.value.trim();
            const isCorrect = normalize(userAnswer) === normalize(conjugation.spanish);

            if (!isCorrect || userAnswer === '') {
                input.value = conjugation.spanish;
                input.classList.remove('incorrect');
                input.classList.add('correct');
                feedback.innerHTML = '<span class="correct-icon">✓</span>';
            }
        }

        await speakText(conjugation.spanish);
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    updateProgress();
}

function getNextInput(currentInputId) {
    const allInputs = Array.from(document.querySelectorAll('input[type="text"]'));
    const currentIndex = allInputs.findIndex(input => input.id === currentInputId);
    if (currentIndex >= 0 && currentIndex < allInputs.length - 1) {
        return allInputs[currentIndex + 1];
    }
    return null;
}

function checkAnswer(inputId, correctAnswer, forceCheck = false) {
    if (isMovingFocus && !forceCheck) {
        return;
    }

    const input = document.getElementById(inputId);
    const feedback = document.getElementById(inputId + '-feedback');
    const userAnswer = input.value.trim();

    if (userAnswer === '') {
        feedback.innerHTML = '';
        input.classList.remove('correct', 'incorrect');
        updateProgress();
        return;
    }

    const isCorrect = normalize(userAnswer) === normalize(correctAnswer);

    if (isCorrect) {
        input.classList.remove('incorrect');
        input.classList.add('correct');
        feedback.innerHTML = '<span class="correct-icon">✓</span>';

        const nextInput = getNextInput(inputId);
        if (nextInput && forceCheck) {
            isMovingFocus = true;
            requestAnimationFrame(() => {
                nextInput.focus();
                setTimeout(() => { isMovingFocus = false; }, 100);
            });
        }
    } else {
        input.classList.remove('correct');
        input.classList.add('incorrect');
        feedback.innerHTML = `
            <span class="incorrect-text">Fel:</span>
            <span class="correct-answer">${correctAnswer}</span>
        `;

        if (forceCheck) {
            isMovingFocus = true;
            requestAnimationFrame(() => {
                input.focus();
                input.select();
                setTimeout(() => { isMovingFocus = false; }, 100);
            });
        }
    }

    updateProgress();
}

function resetAll() {
    const inputs = document.querySelectorAll('input[type="text"]');
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

function checkAll() {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        const correctAnswer = input.dataset.correct;
        if (input.value.trim() !== '') {
            checkAnswer(input.id, correctAnswer);
        }
    });
}

function fillAll() {
    const inputs = document.querySelectorAll('input[type="text"]');

    inputs.forEach(input => {
        const correctAnswer = input.dataset.correct;
        input.value = correctAnswer;
        input.classList.remove('incorrect');
        input.classList.add('correct');

        const feedback = document.getElementById(input.id + '-feedback');
        feedback.innerHTML = '<span class="correct-icon">✓</span>';
    });

    updateProgress();
}

function updateProgress() {
    const inputs = document.querySelectorAll('input[type="text"]');
    let correctCount = 0;
    let totalFilled = 0;

    inputs.forEach(input => {
        if (input.value.trim() !== '') {
            totalFilled++;
            if (input.classList.contains('correct')) {
                correctCount++;
            }
        }
    });

    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('total-count').textContent = totalInputs;

    const percentage = totalInputs > 0 ? Math.round((correctCount / totalInputs) * 100) : 0;
    const progressFill = document.getElementById('progress-fill');
    progressFill.style.width = percentage + '%';
    progressFill.textContent = percentage + '%';
}

function generateHTML(verbData) {
    const container = document.getElementById('verbs-container');
    let inputCounter = 0;

    for (const [category, verbs] of Object.entries(verbData)) {
        const section = document.createElement('div');
        section.className = 'verb-section';

        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'verb-category';
        categoryHeader.textContent = category;
        section.appendChild(categoryHeader);

        for (const [verbName, conjugations] of Object.entries(verbs)) {
            const match = verbName.match(/^([A-ZÅÄÖÍÉÁÚÓÑüÜ]+)\s*(?:\(([^)]+)\))?$/);
            const verbInfinitive = match ? match[1] : verbName;
            const correctTranslation = match && match[2] ? match[2] : '';

            const verbHeader = document.createElement('div');
            verbHeader.className = 'verb-header';

            const infInputId = 'inf-input-' + inputCounter++;
            totalInputs++;

            const conjugationsJson = JSON.stringify(conjugations).replace(/'/g, "\\'").replace(/"/g, "&quot;");

            verbHeader.innerHTML = `
                <span style="font-weight: bold; color: #2E75B6; font-size: 1.2em;">
                    ${verbInfinitive}
                    <button class="speaker-btn" onclick="speakAndFillInfinitive('${infInputId}', '${correctTranslation}', '${verbInfinitive.toLowerCase()}')" title="Lyssna och fyll i översättning">🔊</button>
                    <button class="speaker-btn" onclick='speakAllConjugations(${conjugationsJson}, "${infInputId}")' title="Lyssna och fyll i alla former" style="font-size: 18px;">🔊🔊</button>
                </span>
                <span style="color: #888; margin: 0 10px;">→</span>
                <div style="display: flex; gap: 8px; align-items: center; flex: 1;">
                    <input
                        type="text"
                        id="${infInputId}"
                        placeholder="Översättning..."
                        data-correct="${correctTranslation}"
                        onblur="checkAnswer('${infInputId}', '${correctTranslation.replace(/'/g, "\\'")}', false)"
                        onkeypress="if(event.key === 'Enter') { event.preventDefault(); checkAnswer('${infInputId}', '${correctTranslation.replace(/'/g, "\\'")}', true); }"
                        style="flex: 1;"
                    >
                    <button class="check-btn" onclick="checkAnswer('${infInputId}', '${correctTranslation.replace(/'/g, "\\'")}', true)">Kolla</button>
                    <div class="feedback" id="${infInputId}-feedback" style="display: inline-flex;"></div>
                </div>
            `;
            section.appendChild(verbHeader);

            const table = document.createElement('table');
            table.className = 'verb-table';

            const hasSwedish = conjugations[0].swedish !== undefined;

            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            headerRow.innerHTML = `
                <th>Person</th>
                ${hasSwedish ? '<th>Svenska</th>' : ''}
                <th>Ditt svar</th>
                <th>Resultat</th>
            `;
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement('tbody');
            conjugations.forEach(conj => {
                const row = document.createElement('tr');
                const inputId = 'input-' + inputCounter++;
                totalInputs++;

                row.innerHTML = `
                    <td style="width: 20%;">
                        ${conj.person}
                        <button class="speaker-btn" onclick="speakAndFill('${inputId}', '${conj.spanish.replace(/'/g, "\\'")}', '${conj.spanish}')" title="Lyssna och fyll i: ${conj.spanish}">🔊</button>
                    </td>
                    ${hasSwedish ? `<td style="width: 15%;">${conj.swedish}</td>` : ''}
                    <td style="width: ${hasSwedish ? '40%' : '55%'};">
                        <div class="input-container">
                            <input
                                type="text"
                                id="${inputId}"
                                placeholder="Skriv här..."
                                data-correct="${conj.spanish}"
                                onblur="checkAnswer('${inputId}', '${conj.spanish.replace(/'/g, "\\'")}', false)"
                                onkeypress="if(event.key === 'Enter') { event.preventDefault(); checkAnswer('${inputId}', '${conj.spanish.replace(/'/g, "\\'")}', true); }">
                            <button class="check-btn" onclick="checkAnswer('${inputId}', '${conj.spanish.replace(/'/g, "\\'")}', true)">Kolla</button>
                        </div>
                    </td>
                    <td style="width: 25%;">
                        <div class="feedback" id="${inputId}-feedback"></div>
                    </td>
                `;
                tbody.appendChild(row);
            });
            table.appendChild(tbody);
            section.appendChild(table);
        }

        container.appendChild(section);
    }

    updateProgress();
}
