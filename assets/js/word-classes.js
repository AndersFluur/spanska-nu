const wordClassData = {
    "Substantiv och artiklar": {
        description: "Kärnord för personer, platser och saker du ofta behöver nämna.",
        instructionSvToEs: "Skriv hela uttrycket på spanska, gärna med artikel.",
        instructionEsToSv: "Skriv den svenska betydelsen av hela uttrycket.",
        items: [
            { swedish: "hotellet", spanish: "el hotel", wordClass: "substantiv + artikel", level: 1 },
            { swedish: "vattnet", spanish: "el agua", wordClass: "substantiv + artikel", level: 1 },
            { swedish: "rummet", spanish: "la habitacion", wordClass: "substantiv + artikel", level: 1 },
            { swedish: "staden", spanish: "la ciudad", wordClass: "substantiv + artikel", level: 1 },
            { swedish: "notan", spanish: "la cuenta", wordClass: "substantiv + artikel", level: 1 },
            { swedish: "menyn", spanish: "el menu", wordClass: "substantiv + artikel", level: 1 },
            { swedish: "stationen", spanish: "la estacion", wordClass: "substantiv + artikel", level: 2 },
            { swedish: "hjälpen", spanish: "la ayuda", wordClass: "substantiv + artikel", level: 2 },
            { swedish: "gatan", spanish: "la calle", wordClass: "substantiv + artikel", level: 2 },
            { swedish: "huset", spanish: "la casa", wordClass: "substantiv + artikel", level: 2 },
            { swedish: "vännen", spanish: "el amigo", wordClass: "substantiv + artikel", level: 3 },
            { swedish: "familjen", spanish: "la familia", wordClass: "substantiv + artikel", level: 3 },
            { swedish: "pengarna", spanish: "el dinero", wordClass: "substantiv + artikel", level: 3 },
            { swedish: "bussen", spanish: "el autobus", wordClass: "substantiv + artikel", level: 3 }
        ]
    },
    "Artiklar och små determinanter": {
        description: "Små ord som gör det lättare att bygga enkla och naturliga fraser.",
        instructionSvToEs: "Skriv ordet på spanska.",
        instructionEsToSv: "Skriv ordet på svenska.",
        items: [
            { swedish: "den / det (mask.)", spanish: "el", wordClass: "artikel", level: 1 },
            { swedish: "den / det (fem.)", spanish: "la", wordClass: "artikel", level: 1 },
            { swedish: "en / ett (mask.)", spanish: "un", wordClass: "artikel", level: 1 },
            { swedish: "en / ett (fem.)", spanish: "una", wordClass: "artikel", level: 1 },
            { swedish: "den här (mask.)", spanish: "este", wordClass: "demonstrativ", level: 2 },
            { swedish: "den här (fem.)", spanish: "esta", wordClass: "demonstrativ", level: 2 },
            { swedish: "min", spanish: "mi", wordClass: "possessiv", level: 2 },
            { swedish: "din", spanish: "tu", wordClass: "possessiv", level: 2 },
            { swedish: "mina", spanish: "mis", wordClass: "possessiv", level: 3 },
            { swedish: "dina", spanish: "tus", wordClass: "possessiv", level: 3 }
        ]
    },
    "Adjektiv": {
        description: "Ord som hjälper dig beskriva personer, saker och situationer.",
        instructionSvToEs: "Skriv adjektivet på spanska.",
        instructionEsToSv: "Skriv den svenska betydelsen.",
        items: [
            { swedish: "stor", spanish: "grande", wordClass: "adjektiv", level: 1 },
            { swedish: "liten", spanish: "pequeno", wordClass: "adjektiv", level: 1 },
            { swedish: "dyr", spanish: "caro", wordClass: "adjektiv", level: 1 },
            { swedish: "billig", spanish: "barato", wordClass: "adjektiv", level: 1 },
            { swedish: "öppen", spanish: "abierto", wordClass: "adjektiv", level: 2 },
            { swedish: "stängd", spanish: "cerrado", wordClass: "adjektiv", level: 2 },
            { swedish: "redo", spanish: "listo", wordClass: "adjektiv", level: 2 },
            { swedish: "trött", spanish: "cansado", wordClass: "adjektiv", level: 2 },
            { swedish: "viktig", spanish: "importante", wordClass: "adjektiv", level: 3 },
            { swedish: "snabb", spanish: "rapido", wordClass: "adjektiv", level: 3 },
            { swedish: "långsam", spanish: "lento", wordClass: "adjektiv", level: 3 },
            { swedish: "bra", spanish: "bueno", wordClass: "adjektiv", level: 3 }
        ]
    },
    "Pronomen": {
        description: "Ord för att prata om dig själv, andra människor och saker.",
        instructionSvToEs: "Skriv pronomenet på spanska.",
        instructionEsToSv: "Skriv pronomenet på svenska.",
        items: [
            { swedish: "jag", spanish: "yo", wordClass: "pronomen", level: 1 },
            { swedish: "du", spanish: "tu", wordClass: "pronomen", level: 1 },
            { swedish: "vi", spanish: "nosotros", wordClass: "pronomen", level: 1 },
            { swedish: "han", spanish: "el", wordClass: "pronomen", level: 1 },
            { swedish: "hon", spanish: "ella", wordClass: "pronomen", level: 1 },
            { swedish: "de", spanish: "ellos", wordClass: "pronomen", level: 2 },
            { swedish: "ni", spanish: "vosotros", wordClass: "pronomen", level: 2 },
            { swedish: "det här", spanish: "esto", wordClass: "pronomen", level: 2 },
            { swedish: "det", spanish: "eso", wordClass: "pronomen", level: 3 },
            { swedish: "något", spanish: "algo", wordClass: "pronomen", level: 3 }
        ]
    },
    "Frågeord och konjunktioner": {
        description: "Vanliga småord som hjälper dig fråga, binda ihop och svara.",
        instructionSvToEs: "Skriv ordet eller uttrycket på spanska.",
        instructionEsToSv: "Skriv ordet eller uttrycket på svenska.",
        items: [
            { swedish: "vad", spanish: "que", wordClass: "frageord", level: 1 },
            { swedish: "var", spanish: "donde", wordClass: "frageord", level: 1 },
            { swedish: "hur", spanish: "como", wordClass: "frageord", level: 1 },
            { swedish: "och", spanish: "y", wordClass: "konjunktion", level: 1 },
            { swedish: "men", spanish: "pero", wordClass: "konjunktion", level: 1 },
            { swedish: "när", spanish: "cuando", wordClass: "frageord", level: 2 },
            { swedish: "varför", spanish: "por que", wordClass: "frageord", level: 2 },
            { swedish: "eller", spanish: "o", wordClass: "konjunktion", level: 2 },
            { swedish: "för att / eftersom", spanish: "porque", wordClass: "konjunktion", level: 3 },
            { swedish: "om", spanish: "si", wordClass: "konjunktion", level: 3 }
        ]
    },
    "Adverb, prepositioner och svar": {
        description: "Kärnord för plats, tid, negation och enkla svar i vardagen.",
        instructionSvToEs: "Skriv uttrycket på spanska.",
        instructionEsToSv: "Skriv uttrycket på svenska.",
        items: [
            { swedish: "i / på", spanish: "en", wordClass: "preposition", level: 1 },
            { swedish: "med", spanish: "con", wordClass: "preposition", level: 1 },
            { swedish: "här", spanish: "aqui", wordClass: "adverb", level: 1 },
            { swedish: "nu", spanish: "ahora", wordClass: "adverb", level: 1 },
            { swedish: "inte", spanish: "no", wordClass: "negation", level: 1 },
            { swedish: "utan", spanish: "sin", wordClass: "preposition", level: 2 },
            { swedish: "för / till", spanish: "para", wordClass: "preposition", level: 2 },
            { swedish: "mycket / väldigt", spanish: "muy", wordClass: "adverb", level: 2 },
            { swedish: "också", spanish: "tambien", wordClass: "adverb", level: 2 },
            { swedish: "där", spanish: "alli", wordClass: "adverb", level: 3 },
            { swedish: "alltid", spanish: "siempre", wordClass: "adverb", level: 3 },
            { swedish: "aldrig", spanish: "nunca", wordClass: "adverb", level: 3 },
            { swedish: "ja", spanish: "si", wordClass: "svarsord", level: 3 },
            { swedish: "okej", spanish: "vale", wordClass: "svarsord", level: 3 }
        ]
    },
    "Vardagsuttryck": {
        description: "Fasta uttryck som är extra viktiga för basal kommunikation.",
        instructionSvToEs: "Skriv uttrycket på spanska.",
        instructionEsToSv: "Skriv uttrycket på svenska.",
        items: [
            { swedish: "hej", spanish: "hola", wordClass: "uttryck", level: 1 },
            { swedish: "tack", spanish: "gracias", wordClass: "uttryck", level: 1 },
            { swedish: "snälla", spanish: "por favor", wordClass: "uttryck", level: 1 },
            { swedish: "jag förstår inte", spanish: "no entiendo", wordClass: "uttryck", level: 1 },
            { swedish: "kan du hjälpa mig", spanish: "puedes ayudarme", wordClass: "uttryck", level: 2 },
            { swedish: "hur mycket kostar det", spanish: "cuanto cuesta", wordClass: "uttryck", level: 2 },
            { swedish: "var är toaletten", spanish: "donde esta el bano", wordClass: "uttryck", level: 2 },
            { swedish: "jag skulle vilja", spanish: "me gustaria", wordClass: "uttryck", level: 3 },
            { swedish: "jag vet inte", spanish: "no se", wordClass: "uttryck", level: 3 },
            { swedish: "självklart", spanish: "claro", wordClass: "uttryck", level: 3 }
        ]
    }
};

const directionOptions = {
    "sv-to-es": "Svenska → Spanska",
    "es-to-sv": "Spanska → Svenska",
    mixed: "Blandat"
};

const levelOptions = {
    1: "Steg 1: Kärnord",
    2: "Steg 2: Vardagsord",
    3: "Steg 3: Utbyggnad"
};

let currentDirection = "sv-to-es";
let currentLevel = 1;

function escapeForAttribute(value) {
    return value.replace(/'/g, "\\'");
}

function getPrompt(item, direction) {
    return direction === "es-to-sv" ? item.spanish : item.swedish;
}

function getAnswer(item, direction) {
    return direction === "es-to-sv" ? item.swedish : item.spanish;
}

function getPromptLabel(direction) {
    return direction === "es-to-sv" ? "Spanska" : "Svenska";
}

function getPlaceholder(direction) {
    return direction === "es-to-sv" ? "Skriv på svenska..." : "Skriv på spanska...";
}

function getInstruction(data) {
    if (currentDirection === "es-to-sv") {
        return data.instructionEsToSv;
    }

    if (currentDirection === "mixed") {
        return "Blandat läge: vissa rader går från svenska till spanska och andra från spanska till svenska.";
    }

    return data.instructionSvToEs;
}

function getItemDirection(index) {
    if (currentDirection !== "mixed") {
        return currentDirection;
    }

    return index % 2 === 0 ? "sv-to-es" : "es-to-sv";
}

function getVisibleItems(data) {
    return data.items.filter(item => item.level <= currentLevel);
}

function getLevelStats() {
    let itemCount = 0;
    let categoryCount = 0;

    Object.values(wordClassData).forEach(data => {
        const visibleItems = getVisibleItems(data);
        if (visibleItems.length > 0) {
            categoryCount++;
            itemCount += visibleItems.length;
        }
    });

    return { itemCount, categoryCount };
}

function renderDirectionToggle() {
    const container = document.getElementById("direction-toggle");
    if (!container) {
        return;
    }

    container.innerHTML = Object.entries(directionOptions).map(([key, label]) => `
        <button class="direction-btn ${key === currentDirection ? "active" : ""}" data-direction="${key}">
            ${label}
        </button>
    `).join("");

    container.querySelectorAll(".direction-btn").forEach(button => {
        button.addEventListener("click", () => setDirection(button.dataset.direction));
    });
}

function renderLevelToggle() {
    const container = document.getElementById("level-toggle");
    if (!container) {
        return;
    }

    container.innerHTML = Object.entries(levelOptions).map(([key, label]) => `
        <button class="level-btn ${Number(key) === currentLevel ? "active" : ""}" data-level="${key}">
            ${label}
        </button>
    `).join("");

    container.querySelectorAll(".level-btn").forEach(button => {
        button.addEventListener("click", () => setLevel(Number(button.dataset.level)));
    });

    const stats = getLevelStats();
    const summary = document.getElementById("level-summary");
    if (summary) {
        summary.textContent = `${levelOptions[currentLevel]} innehåller just nu ${stats.itemCount} ord och uttryck fördelade på ${stats.categoryCount} delområden.`;
    }
}

function setDirection(direction) {
    currentDirection = direction;
    renderDirectionToggle();
    renderWordClassExercises();
}

function setLevel(level) {
    currentLevel = level;
    renderLevelToggle();
    renderWordClassExercises();
}

function renderWordClassExercises() {
    totalInputs = 0;
    const container = document.getElementById("word-classes-container");
    container.innerHTML = "";

    let inputCounter = 0;
    let itemCounter = 0;

    for (const [category, data] of Object.entries(wordClassData)) {
        const visibleItems = getVisibleItems(data);
        if (visibleItems.length === 0) {
            continue;
        }

        const section = document.createElement("div");
        section.className = "verb-section";

        const categoryHeader = document.createElement("div");
        categoryHeader.className = "verb-category";
        categoryHeader.textContent = category;
        section.appendChild(categoryHeader);

        const intro = document.createElement("div");
        intro.className = "word-class-intro";
        intro.innerHTML = `
            <p>${data.description}</p>
            <p><strong>Instruktion:</strong> ${getInstruction(data)}</p>
            <p><strong>Ord i nuvarande steg:</strong> ${visibleItems.length}</p>
        `;
        section.appendChild(intro);

        const table = document.createElement("table");
        table.className = "verb-table";

        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        headerRow.innerHTML = `
            <th>Ordklass</th>
            <th>${currentDirection === "mixed" ? "Fråga" : getPromptLabel(currentDirection)}</th>
            <th>Ditt svar</th>
            <th>Resultat</th>
        `;
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement("tbody");

        visibleItems.forEach(item => {
            const row = document.createElement("tr");
            const inputId = `wc-input-${inputCounter++}`;
            const direction = getItemDirection(itemCounter++);
            const prompt = getPrompt(item, direction);
            const answerText = getAnswer(item, direction);
            const answer = escapeForAttribute(answerText);
            totalInputs++;

            row.innerHTML = `
                <td style="width: 22%;">${item.wordClass}</td>
                <td style="width: 20%;">
                    ${prompt}
                    ${currentDirection === "mixed" ? `<div style="margin-top: 6px; color: #888; font-size: 12px;">${directionOptions[direction]}</div>` : ""}
                </td>
                <td style="width: 38%;">
                    <div class="input-container">
                        <input
                            type="text"
                            id="${inputId}"
                            placeholder="${getPlaceholder(direction)}"
                            data-correct="${answerText}"
                            onblur="checkAnswer('${inputId}', '${answer}', false)"
                            onkeypress="if(event.key === 'Enter') { event.preventDefault(); checkAnswer('${inputId}', '${answer}', true); }">
                        <button class="check-btn" onclick="checkAnswer('${inputId}', '${answer}', true)">Kolla</button>
                    </div>
                </td>
                <td style="width: 20%;">
                    <div class="feedback" id="${inputId}-feedback"></div>
                </td>
            `;

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        section.appendChild(table);
        container.appendChild(section);
    }

    updateProgress();
}

document.addEventListener("DOMContentLoaded", function() {
    renderDirectionToggle();
    renderLevelToggle();
    renderWordClassExercises();
});
