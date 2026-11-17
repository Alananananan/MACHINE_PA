export interface ProjectItem {
    id: string;
    team: string;
    sport: string;
    venue: string;
    league: string;
    category: string;
    description: string;
    highlight: string;
    tag: string;
    watermark: string;
    previewImage: string;
    image: string;
    accentColor: {
        text: string;
        border: string;
        bg: string;
        glow: string;
        badge: string;
    };
    specs: string[];
    deliverables: string[];
}

export const projectsData: ProjectItem[] = [
    {
        id: "necaxa",
        team: "Club Necaxa",
        sport: "Fútbol Profesional",
        venue: "Estadio Victoria • Aguascalientes",
        league: "Liga MX",
        category: "Primera División",
        highlight: "Pantallas Gigantes LED & Marcador Oficial",
        description: "Operación integral de circuito cerrado y pantallas gigantes en Estadio Victoria, con marcadores en tiempo real, estadísticas del partido y repeticiones instantáneas broadcast.",
        tag: "Liga MX • Estadio Victoria",
        watermark: "NECAXA",
        previewImage: "/NECAXA_circuito.webp",
        image: "/NECAXA_Pantalla.jpg",
        accentColor: {
            text: "text-red-500",
            border: "hover:border-red-500/60",
            bg: "bg-red-500/10",
            glow: "from-red-600/20 via-red-500/5 to-transparent",
            badge: "bg-red-950/80 border-red-800/80 text-red-300",
        },
        specs: [
            "Pantallas LED 4K",
            "Marcador Oficial Liga MX",
            "Repetición Instantánea",
            "Circuito Cerrado HD"
        ],
        deliverables: [
            "Conmutación en vivo para pantallas gigantes del estadio",
            "Inserción de estadísticas oficiales de juego en tiempo real",
            "Despliegue de alineaciones, cambios y tarjetas",
            "Monitoreo de señales broadcast para repeticiones instantáneas"
        ]
    },
    {
        id: "rieleros",
        team: "Rieleros de Aguascalientes",
        sport: "Béisbol Profesional",
        venue: "Parque Alberto Romo Chávez",
        league: "Liga Mexicana de Béisbol (LMB)",
        category: "Béisbol LMB",
        highlight: "Transmisión Multicámara & Radar de Pitcheo",
        description: "Producción audiovisual multicámara en diamante, integración de radar de velocidad de pitcheo y animación sincronizada de pizarra digital para cada serie en casa.",
        tag: "LMB • Romo Chávez",
        watermark: "RIELEROS",
        previewImage: "/RIELEROS_circuito.webp",
        image: "/RIELEROS_Pantalla.jpg",
        accentColor: {
            text: "text-cyan-400",
            border: "hover:border-cyan-500/60",
            bg: "bg-cyan-500/10",
            glow: "from-cyan-600/20 via-cyan-500/5 to-transparent",
            badge: "bg-cyan-950/80 border-cyan-800/80 text-cyan-300",
        },
        specs: [
            "4 Cámaras Broadcast",
            "Radar de Pitcheo Sincronizado",
            "Pizarra Bola / Strike / Out",
            "Gráficos en Vivo LMB"
        ],
        deliverables: [
            "Cobertura multicámara en cuadro y jardines",
            "Conexión con pistola de radar de velocidad en tiempo real",
            "Marcador digital con conteo de outs, bolas y strikes",
            "Emisión simultánea a pantallas de estadio y feeds de transmisión"
        ]
    },
    {
        id: "leon",
        team: "Club León",
        sport: "Fútbol Profesional",
        venue: "Estadio León (Nou Camp)",
        league: "Liga MX / Concacaf",
        category: "Fútbol de Primera",
        highlight: "Producción Técnica & Switchers Broadcast",
        description: "Gestión técnica de switchers de video, distribución de señales de alta fidelidad y monitoreo multicámara para transmisiones y eventos en el Estadio León.",
        tag: "Liga MX • Estadio León",
        watermark: "LEÓN",
        previewImage: "/LEON_circuito.jpg",
        image: "/LEON_Pantalla.jpg",
        accentColor: {
            text: "text-emerald-400",
            border: "hover:border-emerald-500/60",
            bg: "bg-emerald-500/10",
            glow: "from-emerald-600/20 via-emerald-500/5 to-transparent",
            badge: "bg-emerald-950/80 border-emerald-800/80 text-emerald-300",
        },
        specs: [
            "Manejo de Switchers",
            "Distribución de Señal Full HD",
            "Monitoreo Técnico",
            "Integración de Audio/Video"
        ],
        deliverables: [
            "Operación técnica en cabina broadcast durante el partido",
            "Control y conmutación de cámaras principales y de apoyo",
            "Distribución de señal limpia y señal con gráficos",
            "Soporte técnico continuo para el recinto y enlaces móviles"
        ]
    }
];
