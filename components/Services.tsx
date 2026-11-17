"use client";

import { Camera, Layers, MonitorPlay, Settings2, Sliders, Zap } from "lucide-react";
import Reveal from "./Reveal";

const servicios = [
    { icon: Camera, title: "Operación de Cámaras", description: "Cobertura profesional en vivo con tiros dinámicos y seguimiento de jugadas." },
    { icon: Layers, title: "Manejo de Switchers", description: "Conmutación e inserción de gráficos fluida en tiempo real para emisión broadcast." },
    { icon: MonitorPlay, title: "Marcadores en Vivo", description: "Despliegue de marcadores, cronómetros y estadísticas en tiempo real." },
    { icon: Sliders, title: "Estadísticas de Juego", description: "Captura y procesamiento de datos estadísticos durante el encuentro." },
    { icon: Settings2, title: "Producción Técnica", description: "Montaje, cableado y monitoreo de señal de audio/video en el recinto." },
    { icon: Zap, title: "Streaming Multiplataforma", description: "Transmisión simultánea en Full HD/4K hacia redes sociales o servidores." },
];

export default function Services() {
    return (
        <section id="servicios" className="h-screen min-h-screen snap-start flex flex-col justify-center pt-20 pb-8 bg-zinc-50 dark:bg-zinc-950 relative border-t border-zinc-200 dark:border-zinc-900 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                <Reveal direction="up" delay={0}>
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <h2 className="text-cyan-600 dark:text-cyan-400 font-semibold text-xs uppercase tracking-widest mb-1">Nuestros Servicios</h2>
                        <p className="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">Soluciones completas para eventos y transmisiones</p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {servicios.map((servicio, index) => {
                        const Icon = servicio.icon;
                        return (
                            <Reveal key={index} direction="up" delay={80 + index * 70}>
                                <div className="relative h-full p-5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300 group shadow-xs hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1.5 overflow-hidden">
                                    {/* LÍNEA SUPERIOR DE SEÑAL AL HOVER */}
                                    <span className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-red-500 transition-all duration-500 group-hover:w-full" />

                                    <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-3 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{servicio.title}</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">{servicio.description}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}