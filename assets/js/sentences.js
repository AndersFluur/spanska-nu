// Sentence data for learning Spanish verbs in context
// 20 most important tourist verbs with 6 sentences each (120 total)

const sentenceData = {
    "ser": {
        infinitive: "SER",
        translation: "vara",
        category: "irregular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ de Suecia",
                blank: "soy",
                swedish: "Jag är från Sverige",
                context: "introduction",
                vocabulary: ["de", "Suecia"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ turista?",
                blank: "eres",
                swedish: "Är du turist?",
                context: "introduction",
                vocabulary: ["turista"]
            },
            {
                person: "él/ella",
                spanish: "Ella ___ la guía del museo",
                blank: "es",
                swedish: "Hon är museets guide",
                context: "sightseeing",
                vocabulary: ["guía", "museo"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ de Estocolmo",
                blank: "somos",
                swedish: "Vi är från Stockholm",
                context: "introduction",
                vocabulary: ["Estocolmo"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ estudiantes?",
                blank: "sois",
                swedish: "Är ni studenter?",
                context: "introduction",
                vocabulary: ["estudiantes"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ amigos míos",
                blank: "son",
                swedish: "De är mina vänner",
                context: "introduction",
                vocabulary: ["amigos", "míos"]
            }
        ]
    },

    "estar": {
        infinitive: "ESTAR",
        translation: "vara, befinna sig",
        category: "irregular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ en el hotel",
                blank: "estoy",
                swedish: "Jag är på hotellet",
                context: "hotel",
                vocabulary: ["en", "el hotel"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ cansado?",
                blank: "estás",
                swedish: "Är du trött?",
                context: "general",
                vocabulary: ["cansado"]
            },
            {
                person: "él/ella",
                spanish: "El restaurante ___ cerrado",
                blank: "está",
                swedish: "Restaurangen är stängd",
                context: "restaurant",
                vocabulary: ["restaurante", "cerrado"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ en la plaza",
                blank: "estamos",
                swedish: "Vi är på torget",
                context: "directions",
                vocabulary: ["plaza"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ listos?",
                blank: "estáis",
                swedish: "Är ni redo?",
                context: "general",
                vocabulary: ["listos"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellas ___ en la playa",
                blank: "están",
                swedish: "De är på stranden",
                context: "sightseeing",
                vocabulary: ["playa"]
            }
        ]
    },

    "tener": {
        infinitive: "TENER",
        translation: "ha",
        category: "irregular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ hambre",
                blank: "tengo",
                swedish: "Jag är hungrig",
                context: "restaurant",
                vocabulary: ["hambre"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ una habitación libre?",
                blank: "tienes",
                swedish: "Har du ett ledigt rum?",
                context: "hotel",
                vocabulary: ["habitación", "libre"]
            },
            {
                person: "él/ella",
                spanish: "Ella ___ un mapa de la ciudad",
                blank: "tiene",
                swedish: "Hon har en karta över staden",
                context: "directions",
                vocabulary: ["mapa", "ciudad"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ una reserva",
                blank: "tenemos",
                swedish: "Vi har en bokning",
                context: "restaurant",
                vocabulary: ["reserva"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ tiempo?",
                blank: "tenéis",
                swedish: "Har ni tid?",
                context: "general",
                vocabulary: ["tiempo"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ las maletas",
                blank: "tienen",
                swedish: "De har väskorna",
                context: "hotel",
                vocabulary: ["maletas"]
            }
        ]
    }
};

// Export for use in sentence-learning.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = sentenceData;
}
