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
    },

    "ir": {
        infinitive: "IR",
        translation: "gå, åka",
        category: "irregular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ al museo",
                blank: "voy",
                swedish: "Jag går till museet",
                context: "sightseeing",
                vocabulary: ["al", "museo"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ a la playa?",
                blank: "vas",
                swedish: "Går du till stranden?",
                context: "sightseeing",
                vocabulary: ["a", "la playa"]
            },
            {
                person: "él/ella",
                spanish: "Él ___ al restaurante",
                blank: "va",
                swedish: "Han går till restaurangen",
                context: "restaurant",
                vocabulary: ["restaurante"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ de compras",
                blank: "vamos",
                swedish: "Vi går och handlar",
                context: "shopping",
                vocabulary: ["de compras"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ al hotel?",
                blank: "vais",
                swedish: "Går ni till hotellet?",
                context: "hotel",
                vocabulary: ["hotel"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellas ___ al aeropuerto",
                blank: "van",
                swedish: "De går till flygplatsen",
                context: "transport",
                vocabulary: ["aeropuerto"]
            }
        ]
    },

    "querer": {
        infinitive: "QUERER",
        translation: "vilja",
        category: "irregular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ una cerveza",
                blank: "quiero",
                swedish: "Jag vill ha en öl",
                context: "restaurant",
                vocabulary: ["cerveza"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ el menú?",
                blank: "quieres",
                swedish: "Vill du ha menyn?",
                context: "restaurant",
                vocabulary: ["menú"]
            },
            {
                person: "él/ella",
                spanish: "Ella ___ visitar el castillo",
                blank: "quiere",
                swedish: "Hon vill besöka slottet",
                context: "sightseeing",
                vocabulary: ["visitar", "castillo"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ dos habitaciones",
                blank: "queremos",
                swedish: "Vi vill ha två rum",
                context: "hotel",
                vocabulary: ["dos", "habitaciones"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ cenar aquí?",
                blank: "queréis",
                swedish: "Vill ni äta middag här?",
                context: "restaurant",
                vocabulary: ["cenar", "aquí"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ ir al centro",
                blank: "quieren",
                swedish: "De vill gå till centrum",
                context: "directions",
                vocabulary: ["centro"]
            }
        ]
    },

    "poder": {
        infinitive: "PODER",
        translation: "kunna",
        category: "irregular",
        sentences: [
            {
                person: "yo",
                spanish: "¿___ pagar con tarjeta?",
                blank: "Puedo",
                swedish: "Kan jag betala med kort?",
                context: "shopping",
                vocabulary: ["pagar", "tarjeta"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ ayudarme?",
                blank: "puedes",
                swedish: "Kan du hjälpa mig?",
                context: "general",
                vocabulary: ["ayudarme"]
            },
            {
                person: "él/ella",
                spanish: "¿Ella ___ hablar inglés?",
                blank: "puede",
                swedish: "Kan hon prata engelska?",
                context: "general",
                vocabulary: ["hablar", "inglés"]
            },
            {
                person: "nosotros",
                spanish: "¿___ ver la habitación?",
                blank: "Podemos",
                swedish: "Kan vi se rummet?",
                context: "hotel",
                vocabulary: ["ver", "habitación"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ esperar?",
                blank: "podéis",
                swedish: "Kan ni vänta?",
                context: "general",
                vocabulary: ["esperar"]
            },
            {
                person: "ellos/ellas",
                spanish: "¿Ellos ___ entrar?",
                blank: "pueden",
                swedish: "Kan de komma in?",
                context: "general",
                vocabulary: ["entrar"]
            }
        ]
    },

    "hacer": {
        infinitive: "HACER",
        translation: "göra",
        category: "irregular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ una reserva",
                blank: "hago",
                swedish: "Jag gör en bokning",
                context: "restaurant",
                vocabulary: ["reserva"]
            },
            {
                person: "tú",
                spanish: "¿Qué ___ tú?",
                blank: "haces",
                swedish: "Vad gör du?",
                context: "general",
                vocabulary: ["qué"]
            },
            {
                person: "él/ella",
                spanish: "¿Qué tiempo ___?",
                blank: "hace",
                swedish: "Hur är vädret?",
                context: "general",
                vocabulary: ["tiempo"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ turismo",
                blank: "hacemos",
                swedish: "Vi turerar",
                context: "sightseeing",
                vocabulary: ["turismo"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ fotos?",
                blank: "hacéis",
                swedish: "Tar ni foton?",
                context: "sightseeing",
                vocabulary: ["fotos"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ la cena",
                blank: "hacen",
                swedish: "De lagar middagen",
                context: "restaurant",
                vocabulary: ["cena"]
            }
        ]
    },

    "hablar": {
        infinitive: "HABLAR",
        translation: "prata",
        category: "regular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ español",
                blank: "hablo",
                swedish: "Jag pratar spanska",
                context: "introduction",
                vocabulary: ["español"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ inglés?",
                blank: "hablas",
                swedish: "Pratar du engelska?",
                context: "general",
                vocabulary: ["inglés"]
            },
            {
                person: "él/ella",
                spanish: "Ella ___ muy rápido",
                blank: "habla",
                swedish: "Hon pratar väldigt snabbt",
                context: "general",
                vocabulary: ["muy", "rápido"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ con el guía",
                blank: "hablamos",
                swedish: "Vi pratar med guiden",
                context: "sightseeing",
                vocabulary: ["con", "guía"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ sueco?",
                blank: "habláis",
                swedish: "Pratar ni svenska?",
                context: "introduction",
                vocabulary: ["sueco"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ por teléfono",
                blank: "hablan",
                swedish: "De pratar i telefon",
                context: "general",
                vocabulary: ["por teléfono"]
            }
        ]
    },

    "comer": {
        infinitive: "COMER",
        translation: "äta",
        category: "regular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ paella",
                blank: "como",
                swedish: "Jag äter paella",
                context: "restaurant",
                vocabulary: ["paella"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ carne?",
                blank: "comes",
                swedish: "Äter du kött?",
                context: "restaurant",
                vocabulary: ["carne"]
            },
            {
                person: "él/ella",
                spanish: "Él ___ en el restaurante",
                blank: "come",
                swedish: "Han äter på restaurangen",
                context: "restaurant",
                vocabulary: ["en", "restaurante"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ tapas",
                blank: "comemos",
                swedish: "Vi äter tapas",
                context: "restaurant",
                vocabulary: ["tapas"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ pescado?",
                blank: "coméis",
                swedish: "Äter ni fisk?",
                context: "restaurant",
                vocabulary: ["pescado"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellas ___ mucho",
                blank: "comen",
                swedish: "De äter mycket",
                context: "restaurant",
                vocabulary: ["mucho"]
            }
        ]
    },

    "beber": {
        infinitive: "BEBER",
        translation: "dricka",
        category: "regular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ agua",
                blank: "bebo",
                swedish: "Jag dricker vatten",
                context: "restaurant",
                vocabulary: ["agua"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ vino?",
                blank: "bebes",
                swedish: "Dricker du vin?",
                context: "restaurant",
                vocabulary: ["vino"]
            },
            {
                person: "él/ella",
                spanish: "Ella ___ café",
                blank: "bebe",
                swedish: "Hon dricker kaffe",
                context: "restaurant",
                vocabulary: ["café"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ sangría",
                blank: "bebemos",
                swedish: "Vi dricker sangría",
                context: "restaurant",
                vocabulary: ["sangría"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ cerveza?",
                blank: "bebéis",
                swedish: "Dricker ni öl?",
                context: "restaurant",
                vocabulary: ["cerveza"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ zumo",
                blank: "beben",
                swedish: "De dricker juice",
                context: "restaurant",
                vocabulary: ["zumo"]
            }
        ]
    },

    "comprar": {
        infinitive: "COMPRAR",
        translation: "köpa",
        category: "regular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ recuerdos",
                blank: "compro",
                swedish: "Jag köper souvenirer",
                context: "shopping",
                vocabulary: ["recuerdos"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ esto?",
                blank: "compras",
                swedish: "Köper du det här?",
                context: "shopping",
                vocabulary: ["esto"]
            },
            {
                person: "él/ella",
                spanish: "Él ___ un billete",
                blank: "compra",
                swedish: "Han köper en biljett",
                context: "transport",
                vocabulary: ["billete"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ en el mercado",
                blank: "compramos",
                swedish: "Vi handlar på marknaden",
                context: "shopping",
                vocabulary: ["mercado"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ regalos?",
                blank: "compráis",
                swedish: "Köper ni presenter?",
                context: "shopping",
                vocabulary: ["regalos"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellas ___ postales",
                blank: "compran",
                swedish: "De köper vykort",
                context: "shopping",
                vocabulary: ["postales"]
            }
        ]
    },

    "necesitar": {
        infinitive: "NECESITAR",
        translation: "behöva",
        category: "regular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ un taxi",
                blank: "necesito",
                swedish: "Jag behöver en taxi",
                context: "transport",
                vocabulary: ["taxi"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ ayuda?",
                blank: "necesitas",
                swedish: "Behöver du hjälp?",
                context: "general",
                vocabulary: ["ayuda"]
            },
            {
                person: "él/ella",
                spanish: "Ella ___ un mapa",
                blank: "necesita",
                swedish: "Hon behöver en karta",
                context: "directions",
                vocabulary: ["mapa"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ una mesa",
                blank: "necesitamos",
                swedish: "Vi behöver ett bord",
                context: "restaurant",
                vocabulary: ["mesa"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ wifi?",
                blank: "necesitáis",
                swedish: "Behöver ni wifi?",
                context: "hotel",
                vocabulary: ["wifi"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ cambiar dinero",
                blank: "necesitan",
                swedish: "De behöver växla pengar",
                context: "general",
                vocabulary: ["cambiar", "dinero"]
            }
        ]
    },

    "ver": {
        infinitive: "VER",
        translation: "se",
        category: "irregular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ la catedral",
                blank: "veo",
                swedish: "Jag ser katedralen",
                context: "sightseeing",
                vocabulary: ["catedral"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ el bus?",
                blank: "ves",
                swedish: "Ser du bussen?",
                context: "transport",
                vocabulary: ["bus"]
            },
            {
                person: "él/ella",
                spanish: "Ella ___ las montañas",
                blank: "ve",
                swedish: "Hon ser bergen",
                context: "sightseeing",
                vocabulary: ["montañas"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ el mar",
                blank: "vemos",
                swedish: "Vi ser havet",
                context: "sightseeing",
                vocabulary: ["mar"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ el precio?",
                blank: "veis",
                swedish: "Ser ni priset?",
                context: "shopping",
                vocabulary: ["precio"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ un espectáculo",
                blank: "ven",
                swedish: "De ser en föreställning",
                context: "sightseeing",
                vocabulary: ["espectáculo"]
            }
        ]
    },

    "encontrar": {
        infinitive: "ENCONTRAR",
        translation: "hitta",
        category: "irregular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo no ___ el hotel",
                blank: "encuentro",
                swedish: "Jag hittar inte hotellet",
                context: "directions",
                vocabulary: ["no", "hotel"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ la estación?",
                blank: "encuentras",
                swedish: "Hittar du stationen?",
                context: "directions",
                vocabulary: ["estación"]
            },
            {
                person: "él/ella",
                spanish: "Él ___ un restaurante bueno",
                blank: "encuentra",
                swedish: "Han hittar en bra restaurang",
                context: "restaurant",
                vocabulary: ["bueno"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ la plaza",
                blank: "encontramos",
                swedish: "Vi hittar torget",
                context: "directions",
                vocabulary: ["plaza"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ el museo?",
                blank: "encontráis",
                swedish: "Hittar ni museet?",
                context: "sightseeing",
                vocabulary: ["museo"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellas ___ una farmacia",
                blank: "encuentran",
                swedish: "De hittar ett apotek",
                context: "general",
                vocabulary: ["farmacia"]
            }
        ]
    },

    "venir": {
        infinitive: "VENIR",
        translation: "komma",
        category: "irregular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ de Suecia",
                blank: "vengo",
                swedish: "Jag kommer från Sverige",
                context: "introduction",
                vocabulary: ["de", "Suecia"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ mañana?",
                blank: "vienes",
                swedish: "Kommer du imorgon?",
                context: "general",
                vocabulary: ["mañana"]
            },
            {
                person: "él/ella",
                spanish: "Ella ___ con nosotros",
                blank: "viene",
                swedish: "Hon kommer med oss",
                context: "general",
                vocabulary: ["con", "nosotros"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ del aeropuerto",
                blank: "venimos",
                swedish: "Vi kommer från flygplatsen",
                context: "transport",
                vocabulary: ["del", "aeropuerto"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ a la fiesta?",
                blank: "venís",
                swedish: "Kommer ni till festen?",
                context: "general",
                vocabulary: ["fiesta"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ en tren",
                blank: "vienen",
                swedish: "De kommer med tåg",
                context: "transport",
                vocabulary: ["tren"]
            }
        ]
    },

    "salir": {
        infinitive: "SALIR",
        translation: "gå ut, lämna",
        category: "irregular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ del hotel",
                blank: "salgo",
                swedish: "Jag lämnar hotellet",
                context: "hotel",
                vocabulary: ["del", "hotel"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ esta noche?",
                blank: "sales",
                swedish: "Går du ut ikväll?",
                context: "general",
                vocabulary: ["esta noche"]
            },
            {
                person: "él/ella",
                spanish: "El tren ___ a las ocho",
                blank: "sale",
                swedish: "Tåget går klockan åtta",
                context: "transport",
                vocabulary: ["tren", "a las ocho"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ de viaje",
                blank: "salimos",
                swedish: "Vi åker på resa",
                context: "general",
                vocabulary: ["de viaje"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ temprano?",
                blank: "salís",
                swedish: "Går ni tidigt?",
                context: "general",
                vocabulary: ["temprano"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellas ___ de compras",
                blank: "salen",
                swedish: "De går och handlar",
                context: "shopping",
                vocabulary: ["de compras"]
            }
        ]
    },

    "vivir": {
        infinitive: "VIVIR",
        translation: "bo",
        category: "regular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ en Suecia",
                blank: "vivo",
                swedish: "Jag bor i Sverige",
                context: "introduction",
                vocabulary: ["en", "Suecia"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ aquí?",
                blank: "vives",
                swedish: "Bor du här?",
                context: "introduction",
                vocabulary: ["aquí"]
            },
            {
                person: "él/ella",
                spanish: "Ella ___ en Madrid",
                blank: "vive",
                swedish: "Hon bor i Madrid",
                context: "introduction",
                vocabulary: ["Madrid"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ en Estocolmo",
                blank: "vivimos",
                swedish: "Vi bor i Stockholm",
                context: "introduction",
                vocabulary: ["Estocolmo"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ cerca?",
                blank: "vivís",
                swedish: "Bor ni nära?",
                context: "introduction",
                vocabulary: ["cerca"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ en el centro",
                blank: "viven",
                swedish: "De bor i centrum",
                context: "introduction",
                vocabulary: ["centro"]
            }
        ]
    },

    "buscar": {
        infinitive: "BUSCAR",
        translation: "leta, söka",
        category: "regular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ un banco",
                blank: "busco",
                swedish: "Jag letar efter en bank",
                context: "directions",
                vocabulary: ["banco"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ trabajo?",
                blank: "buscas",
                swedish: "Letar du efter arbete?",
                context: "general",
                vocabulary: ["trabajo"]
            },
            {
                person: "él/ella",
                spanish: "Él ___ la parada de bus",
                blank: "busca",
                swedish: "Han letar efter busshållplatsen",
                context: "transport",
                vocabulary: ["parada", "bus"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ un hotel",
                blank: "buscamos",
                swedish: "Vi letar efter ett hotell",
                context: "hotel",
                vocabulary: ["hotel"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ la salida?",
                blank: "buscáis",
                swedish: "Letar ni efter utgången?",
                context: "directions",
                vocabulary: ["salida"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellas ___ un restaurante",
                blank: "buscan",
                swedish: "De letar efter en restaurang",
                context: "restaurant",
                vocabulary: ["restaurante"]
            }
        ]
    },

    "saber": {
        infinitive: "SABER",
        translation: "veta, kunna",
        category: "irregular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo no ___ dónde está",
                blank: "sé",
                swedish: "Jag vet inte var det är",
                context: "directions",
                vocabulary: ["no", "dónde", "está"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ hablar español?",
                blank: "sabes",
                swedish: "Kan du prata spanska?",
                context: "general",
                vocabulary: ["hablar", "español"]
            },
            {
                person: "él/ella",
                spanish: "Ella ___ cocinar muy bien",
                blank: "sabe",
                swedish: "Hon kan laga mat väldigt bra",
                context: "general",
                vocabulary: ["cocinar", "muy bien"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ la dirección",
                blank: "sabemos",
                swedish: "Vi vet adressen",
                context: "directions",
                vocabulary: ["dirección"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ el precio?",
                blank: "sabéis",
                swedish: "Vet ni priset?",
                context: "shopping",
                vocabulary: ["precio"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ nadar",
                blank: "saben",
                swedish: "De kan simma",
                context: "general",
                vocabulary: ["nadar"]
            }
        ]
    },

    "decir": {
        infinitive: "DECIR",
        translation: "säga",
        category: "irregular",
        sentences: [
            {
                person: "yo",
                spanish: "Yo ___ que sí",
                blank: "digo",
                swedish: "Jag säger ja",
                context: "general",
                vocabulary: ["que", "sí"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ la verdad?",
                blank: "dices",
                swedish: "Säger du sanningen?",
                context: "general",
                vocabulary: ["verdad"]
            },
            {
                person: "él/ella",
                spanish: "Ella ___ que es caro",
                blank: "dice",
                swedish: "Hon säger att det är dyrt",
                context: "shopping",
                vocabulary: ["que", "caro"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ adiós",
                blank: "decimos",
                swedish: "Vi säger hejdå",
                context: "introduction",
                vocabulary: ["adiós"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ algo?",
                blank: "decís",
                swedish: "Säger ni något?",
                context: "general",
                vocabulary: ["algo"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ gracias",
                blank: "dicen",
                swedish: "De säger tack",
                context: "general",
                vocabulary: ["gracias"]
            }
        ]
    }
};

// Export for use in sentence-learning.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = sentenceData;
}
