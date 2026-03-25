// Sentence data for learning basic Spanish communication in context
// 20 core verbs grouped into beginner-friendly communication areas

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
                spanish: "¿Tú ___ sueco?",
                blank: "eres",
                swedish: "Är du svensk?",
                context: "general",
                vocabulary: ["sueco"]
            },
            {
                person: "él/ella",
                spanish: "Ella ___ mi amiga",
                blank: "es",
                swedish: "Hon är min vän",
                context: "general",
                vocabulary: ["mi", "amiga"]
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
                spanish: "Yo ___ en casa",
                blank: "estoy",
                swedish: "Jag är hemma",
                context: "general",
                vocabulary: ["en", "casa"]
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
                spanish: "La puerta ___ cerrada",
                blank: "está",
                swedish: "Dörren är stängd",
                context: "general",
                vocabulary: ["puerta", "cerrada"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ aqui",
                blank: "estamos",
                swedish: "Vi är här",
                context: "general",
                vocabulary: ["aqui"]
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
                spanish: "Yo ___ tiempo",
                blank: "tengo",
                swedish: "Jag har tid",
                context: "general",
                vocabulary: ["tiempo"]
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
                spanish: "Ella ___ agua",
                blank: "tiene",
                swedish: "Hon har vatten",
                context: "general",
                vocabulary: ["agua"]
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
                spanish: "Yo ___ agua",
                blank: "quiero",
                swedish: "Jag vill ha vatten",
                context: "general",
                vocabulary: ["agua"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ venir?",
                blank: "quieres",
                swedish: "Vill du komma?",
                context: "general",
                vocabulary: ["venir"]
            },
            {
                person: "él/ella",
                spanish: "Ella ___ descansar",
                blank: "quiere",
                swedish: "Hon vill vila",
                context: "general",
                vocabulary: ["descansar"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ hablar",
                blank: "queremos",
                swedish: "Vi vill prata",
                context: "general",
                vocabulary: ["hablar"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ salir ahora?",
                blank: "queréis",
                swedish: "Vill ni gå ut nu?",
                context: "general",
                vocabulary: ["salir", "ahora"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ descansar",
                blank: "quieren",
                swedish: "De vill vila",
                context: "general",
                vocabulary: ["descansar"]
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
                spanish: "¿___ entrar?",
                blank: "Puedo",
                swedish: "Kan jag komma in?",
                context: "general",
                vocabulary: ["entrar"]
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
                spanish: "¿___ hablar ahora?",
                blank: "Podemos",
                swedish: "Kan vi prata nu?",
                context: "general",
                vocabulary: ["hablar", "ahora"]
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
                spanish: "Yo ___ la comida",
                blank: "hago",
                swedish: "Jag lagar maten",
                context: "general",
                vocabulary: ["comida"]
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
                spanish: "Nosotros ___ ejercicio",
                blank: "hacemos",
                swedish: "Vi tränar",
                context: "general",
                vocabulary: ["ejercicio"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ la cena?",
                blank: "hacéis",
                swedish: "Lagar ni middagen?",
                context: "general",
                vocabulary: ["cena"]
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
                spanish: "Yo ___ un poco de español",
                blank: "hablo",
                swedish: "Jag pratar lite spanska",
                context: "introduction",
                vocabulary: ["un poco", "de", "español"]
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
                spanish: "Nosotros ___ con amigos",
                blank: "hablamos",
                swedish: "Vi pratar med vänner",
                context: "general",
                vocabulary: ["con", "amigos"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ mucho?",
                blank: "habláis",
                swedish: "Pratar ni mycket?",
                context: "general",
                vocabulary: ["mucho"]
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
                spanish: "Yo ___ pan",
                blank: "como",
                swedish: "Jag äter bröd",
                context: "general",
                vocabulary: ["pan"]
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
                spanish: "Él ___ en casa",
                blank: "come",
                swedish: "Han äter hemma",
                context: "general",
                vocabulary: ["en", "casa"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ juntos",
                blank: "comemos",
                swedish: "Vi äter tillsammans",
                context: "general",
                vocabulary: ["juntos"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ ahora?",
                blank: "coméis",
                swedish: "Äter ni nu?",
                context: "general",
                vocabulary: ["ahora"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellas ___ mucho",
                blank: "comen",
                swedish: "De äter mycket",
                context: "general",
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
                context: "general",
                vocabulary: ["agua"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ café?",
                blank: "bebes",
                swedish: "Dricker du kaffe?",
                context: "general",
                vocabulary: ["café"]
            },
            {
                person: "él/ella",
                spanish: "Ella ___ café",
                blank: "bebe",
                swedish: "Hon dricker kaffe",
                context: "general",
                vocabulary: ["café"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ té",
                blank: "bebemos",
                swedish: "Vi dricker te",
                context: "general",
                vocabulary: ["té"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ agua?",
                blank: "bebéis",
                swedish: "Dricker ni vatten?",
                context: "general",
                vocabulary: ["agua"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ zumo",
                blank: "beben",
                swedish: "De dricker juice",
                context: "general",
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
                spanish: "Yo ___ pan",
                blank: "compro",
                swedish: "Jag köper bröd",
                context: "general",
                vocabulary: ["pan"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ esto?",
                blank: "compras",
                swedish: "Köper du det här?",
                context: "general",
                vocabulary: ["esto"]
            },
            {
                person: "él/ella",
                spanish: "Él ___ fruta",
                blank: "compra",
                swedish: "Han köper frukt",
                context: "general",
                vocabulary: ["fruta"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ comida",
                blank: "compramos",
                swedish: "Vi köper mat",
                context: "general",
                vocabulary: ["comida"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ pan?",
                blank: "compráis",
                swedish: "Köper ni bröd?",
                context: "general",
                vocabulary: ["pan"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellas ___ ropa",
                blank: "compran",
                swedish: "De köper kläder",
                context: "general",
                vocabulary: ["ropa"]
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
                spanish: "Yo ___ ayuda",
                blank: "necesito",
                swedish: "Jag behöver hjälp",
                context: "general",
                vocabulary: ["ayuda"]
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
                spanish: "Ella ___ tiempo",
                blank: "necesita",
                swedish: "Hon behöver tid",
                context: "general",
                vocabulary: ["tiempo"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ silencio",
                blank: "necesitamos",
                swedish: "Vi behöver lugn",
                context: "general",
                vocabulary: ["silencio"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ tiempo?",
                blank: "necesitáis",
                swedish: "Behöver ni tid?",
                context: "general",
                vocabulary: ["tiempo"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ ayuda",
                blank: "necesitan",
                swedish: "De behöver hjälp",
                context: "general",
                vocabulary: ["ayuda"]
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
                spanish: "Yo ___ la casa",
                blank: "veo",
                swedish: "Jag ser huset",
                context: "general",
                vocabulary: ["casa"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ la puerta?",
                blank: "ves",
                swedish: "Ser du dörren?",
                context: "general",
                vocabulary: ["puerta"]
            },
            {
                person: "él/ella",
                spanish: "Ella ___ la calle",
                blank: "ve",
                swedish: "Hon ser gatan",
                context: "general",
                vocabulary: ["calle"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ la televisión",
                blank: "vemos",
                swedish: "Vi tittar på tv",
                context: "general",
                vocabulary: ["televisión"]
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
                spanish: "Ellos ___ la television",
                blank: "ven",
                swedish: "De tittar på tv",
                context: "general",
                vocabulary: ["television"]
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
                spanish: "Yo no ___ la calle",
                blank: "encuentro",
                swedish: "Jag hittar inte gatan",
                context: "directions",
                vocabulary: ["no", "calle"]
            },
            {
                person: "tú",
                spanish: "¿Tú ___ la llave?",
                blank: "encuentras",
                swedish: "Hittar du nyckeln?",
                context: "general",
                vocabulary: ["llave"]
            },
            {
                person: "él/ella",
                spanish: "Él ___ una solución",
                blank: "encuentra",
                swedish: "Han hittar en lösning",
                context: "general",
                vocabulary: ["solución"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ la casa",
                blank: "encontramos",
                swedish: "Vi hittar huset",
                context: "general",
                vocabulary: ["casa"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ el camino?",
                blank: "encontráis",
                swedish: "Hittar ni vägen?",
                context: "general",
                vocabulary: ["camino"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellas ___ una respuesta",
                blank: "encuentran",
                swedish: "De hittar ett svar",
                context: "general",
                vocabulary: ["respuesta"]
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
                spanish: "Nosotros ___ de casa",
                blank: "venimos",
                swedish: "Vi kommer hemifrån",
                context: "general",
                vocabulary: ["de", "casa"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ hoy?",
                blank: "venís",
                swedish: "Kommer ni idag?",
                context: "general",
                vocabulary: ["hoy"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ juntos",
                blank: "vienen",
                swedish: "De kommer tillsammans",
                context: "general",
                vocabulary: ["juntos"]
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
                spanish: "Yo ___ de casa",
                blank: "salgo",
                swedish: "Jag går hemifrån",
                context: "general",
                vocabulary: ["de", "casa"]
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
                spanish: "Ella ___ temprano",
                blank: "sale",
                swedish: "Hon går ut tidigt",
                context: "general",
                vocabulary: ["temprano"]
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
                spanish: "Yo ___ en Estocolmo",
                blank: "vivo",
                swedish: "Jag bor i Stockholm",
                context: "introduction",
                vocabulary: ["en", "Estocolmo"]
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
                spanish: "Ella ___ cerca",
                blank: "vive",
                swedish: "Hon bor nära",
                context: "general",
                vocabulary: ["cerca"]
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
                context: "general",
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
                spanish: "Yo ___ trabajo",
                blank: "busco",
                swedish: "Jag letar efter arbete",
                context: "general",
                vocabulary: ["trabajo"]
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
                spanish: "Él ___ sus llaves",
                blank: "busca",
                swedish: "Han letar efter sina nycklar",
                context: "general",
                vocabulary: ["llaves"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ una respuesta",
                blank: "buscamos",
                swedish: "Vi letar efter ett svar",
                context: "general",
                vocabulary: ["respuesta"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ a Ana?",
                blank: "buscáis",
                swedish: "Letar ni efter Ana?",
                context: "general",
                vocabulary: ["Ana"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellas ___ trabajo",
                blank: "buscan",
                swedish: "De letar efter arbete",
                context: "general",
                vocabulary: ["trabajo"]
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
                spanish: "Yo no ___ la respuesta",
                blank: "sé",
                swedish: "Jag vet inte svaret",
                context: "general",
                vocabulary: ["no", "respuesta"]
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
                spanish: "Ella ___ la respuesta",
                blank: "sabe",
                swedish: "Hon vet svaret",
                context: "general",
                vocabulary: ["respuesta"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ qué hacer",
                blank: "sabemos",
                swedish: "Vi vet vad vi ska göra",
                context: "general",
                vocabulary: ["qué", "hacer"]
            },
            {
                person: "vosotros",
                spanish: "¿Vosotros ___ la verdad?",
                blank: "sabéis",
                swedish: "Vet ni sanningen?",
                context: "general",
                vocabulary: ["verdad"]
            },
            {
                person: "ellos/ellas",
                spanish: "Ellos ___ qué pasa",
                blank: "saben",
                swedish: "De vet vad som händer",
                context: "general",
                vocabulary: ["qué", "pasa"]
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
                spanish: "Yo ___ mi nombre",
                blank: "digo",
                swedish: "Jag säger mitt namn",
                context: "general",
                vocabulary: ["mi", "nombre"]
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
                spanish: "Ella ___ que no",
                blank: "dice",
                swedish: "Hon säger nej",
                context: "general",
                vocabulary: ["que", "no"]
            },
            {
                person: "nosotros",
                spanish: "Nosotros ___ adiós",
                blank: "decimos",
                swedish: "Vi säger hejdå",
                context: "general",
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

const studyAreas = {
    all: {
        title: "Alla delområden",
        description: "Träna hela startpaketet för att kunna förstå och bygga enkla meningar i vardagen.",
        focus: ["hälsa", "fråga", "behov", "vardag", "service"]
    },
    introductions: {
        title: "Hälsa och presentera dig",
        description: "Säga vem du är, var du kommer ifrån och prata enkelt om språk och boende.",
        focus: ["ser", "estar", "hablar", "vivir"]
    },
    needs: {
        title: "Uttrycka behov och önskemål",
        description: "Berätta vad du vill, behöver, har eller kan i vanliga samtal.",
        focus: ["tener", "querer", "poder", "necesitar"]
    },
    directions: {
        title: "Fråga, hitta och ta dig fram",
        description: "Prata om att gå, komma, lämna, leta och hitta rätt.",
        focus: ["ir", "venir", "salir", "buscar", "encontrar"]
    },
    service: {
        title: "Mat, köp och service",
        description: "Beställa, köpa och hantera enkla ärenden i butik eller på restaurang.",
        focus: ["comer", "beber", "comprar", "hacer"]
    },
    conversation: {
        title: "Förstå och svara",
        description: "Se, veta och säga tillräckligt för att hålla igång ett enkelt samtal.",
        focus: ["ver", "saber", "decir"]
    }
};

const sentenceLevelOptions = {
    1: "Steg 1: Basmönster",
    2: "Steg 2: Vardagsmönster",
    3: "Steg 3: Utbyggnad"
};

const verbLevelMap = {
    ser: 1,
    estar: 1,
    tener: 1,
    hablar: 1,
    vivir: 1,
    querer: 2,
    poder: 2,
    necesitar: 2,
    ir: 2,
    buscar: 2,
    comer: 2,
    beber: 2,
    venir: 3,
    salir: 3,
    encontrar: 3,
    comprar: 3,
    hacer: 3,
    ver: 3,
    saber: 3,
    decir: 3
};

const verbAreaMap = {
    ser: "introductions",
    estar: "introductions",
    hablar: "introductions",
    vivir: "introductions",
    tener: "needs",
    querer: "needs",
    poder: "needs",
    necesitar: "needs",
    ir: "directions",
    venir: "directions",
    salir: "directions",
    buscar: "directions",
    encontrar: "directions",
    comer: "service",
    beber: "service",
    comprar: "service",
    hacer: "service",
    ver: "conversation",
    saber: "conversation",
    decir: "conversation"
};

// Export for use in sentence-learning.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = sentenceData;
}
