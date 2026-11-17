"use client";

import { Play, Radio, Trophy, Tv, ArrowRight, Activity } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
    return (
        <section id="inicio" className="h-screen min-h-screen snap-start flex flex-col justify-center pt-24 pb-8 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
            {/* LUCES AMBIENTALES CON FLOTACIÓN SUAVE */}
            <div className="animate-float absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="animate-float absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center max-w-4xl mx-auto">

                    <Reveal direction="down" delay={0}>
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs">
                            {/* ECUALIZADOR DE SEÑAL EN VIVO */}
                            <span className="flex items-end gap-0.5 h-3">
                                <span className="w-0.5 h-full bg-cyan-500 rounded-full signal-bar-1" />
                                <span className="w-0.5 h-full bg-fuchsia-500 rounded-full signal-bar-2" />
                                <span className="w-0.5 h-full bg-red-500 rounded-full signal-bar-3" />
                            </span>
                            Producción Audiovisual & Transmisiones En Vivo
                        </div>
                    </Reveal>

                    <Reveal direction="up" delay={100}>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight mb-4">
                            Llevamos la emoción de tus{" "}
                            <span className="animate-gradient-x bg-gradient-to-r from-cyan-600 via-fuchsia-600 to-amber-500 dark:from-cyan-400 dark:via-fuchsia-400 dark:to-yellow-400 bg-clip-text text-transparent">
                                eventos al siguiente nivel
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal direction="up" delay={200}>
                        <p className="text-sm sm:text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
                            Especialistas en operación de cámaras, switchers, marcadores en tiempo real y estadísticas de juego para estadios y eventos masivos.
                        </p>
                    </Reveal>

                    <Reveal direction="up" delay={300}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                            <a
                                href="#contacto"
                                className="btn-shimmer group w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-red-600/30 transition-all duration-300 text-sm hover:scale-105 active:scale-95"
                            >
                                Cotizar Mi Evento
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                            <a
                                href="#portafolio"
                                className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 text-sm shadow-xs hover:-translate-y-0.5 active:scale-95"
                            >
                                <Play className="w-4 h-4 fill-current text-cyan-600 dark:text-cyan-400 transition-transform duration-300 group-hover:scale-125" />
                                Ver Portafolio
                            </a>
                        </div>
                    </Reveal>

                    <Reveal direction="up" delay={400}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
                            <div className="group p-3 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/60 hover:border-cyan-500/50 shadow-xs transition-all duration-300 hover:-translate-y-1">
                                <Radio className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mx-auto mb-1 transition-transform duration-300 group-hover:scale-110" />
                                <p className="text-xl font-extrabold text-zinc-900 dark:text-white">100%</p>
                                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">En Vivo & Directo</p>
                            </div>
                            <div className="group p-3 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/60 hover:border-fuchsia-500/50 shadow-xs transition-all duration-300 hover:-translate-y-1">
                                <Trophy className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400 mx-auto mb-1 transition-transform duration-300 group-hover:scale-110" />
                                <p className="text-xl font-extrabold text-zinc-900 dark:text-white">Deportes</p>
                                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Especialistas en Liga</p>
                            </div>
                            <div className="group p-3 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/60 hover:border-amber-500/50 shadow-xs transition-all duration-300 hover:-translate-y-1">
                                <Tv className="w-5 h-5 text-amber-500 dark:text-yellow-400 mx-auto mb-1 transition-transform duration-300 group-hover:scale-110" />
                                <p className="text-xl font-extrabold text-zinc-900 dark:text-white">HD / 4K</p>
                                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Calidad Broadcast</p>
                            </div>
                            <div className="group p-3 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/60 hover:border-emerald-500/50 shadow-xs transition-all duration-300 hover:-translate-y-1">
                                <Activity className="w-5 h-5 text-emerald-600 dark:text-green-400 mx-auto mb-1 transition-transform duration-300 group-hover:scale-110" />
                                <p className="text-xl font-extrabold text-zinc-900 dark:text-white">Real-Time</p>
                                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Marcadores y Stats</p>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    );
}