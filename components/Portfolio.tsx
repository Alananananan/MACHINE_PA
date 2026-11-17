"use client";

import { projectsData } from "@/data/portfolioData";
import ModelGrid from "./catalog/ModelGrid";
import Reveal from "./Reveal";

export default function Portfolio() {
    return (
        <section id="portafolio" className="min-h-screen snap-start flex flex-col justify-center py-20 lg:py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 relative overflow-hidden transition-colors duration-300">
            <div className="animate-float absolute top-1/4 -left-48 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="animate-float absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <Reveal direction="left" delay={0}>
                    <div className="max-w-3xl mb-10 sm:mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-red-600 dark:text-red-500 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500 animate-ping" />
                            Portafolio & Cobertura Deportiva
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight mb-3">
                            Proyectos en Estadios
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Despliegue técnico broadcast, circuito cerrado y marcadores en tiempo real para las ligas deportivas más importantes del país.
                        </p>
                    </div>
                </Reveal>

                <Reveal direction="up" delay={150}>
                    <ModelGrid items={projectsData} />
                </Reveal>
            </div>
        </section>
    );
}