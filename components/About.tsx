"use client";

import { Award, ShieldCheck, Users2, Video } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
    return (
        <section id="nosotros" className="h-screen min-h-screen snap-start flex flex-col justify-center pt-20 pb-8 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                    <Reveal direction="left" delay={0}>
                        <div>
                            <h2 className="text-cyan-600 dark:text-cyan-400 font-semibold text-xs uppercase tracking-widest mb-1">Sobre Nosotros</h2>
                            <h3 className="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
                                Pasión por la precisión técnica y la cobertura en vivo
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                                En <strong className="text-zinc-900 dark:text-white">Machine Producciones Audiovisuales</strong> somos especialistas en la gestión técnica y operativa de transmisiones en directo, operación de cámaras broadcast, switchers de video y marcadores con estadísticas en tiempo real.
                            </p>
                            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                                Contamos con amplia experiencia en recintos deportivos y eventos masivos, trabajando bajo estándares donde el margen de error es cero.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="group flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-cyan-500/50 shadow-xs transition-all duration-300 hover:-translate-y-1">
                                    <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                                    <div>
                                        <h4 className="font-bold text-zinc-900 dark:text-white text-xs">Fiabilidad 100%</h4>
                                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Señales estables y respaldo en directo.</p>
                                    </div>
                                </div>

                                <div className="group flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-fuchsia-500/50 shadow-xs transition-all duration-300 hover:-translate-y-1">
                                    <Users2 className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                                    <div>
                                        <h4 className="font-bold text-zinc-900 dark:text-white text-xs">Equipo Especializado</h4>
                                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Operadores experimentados en campo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal direction="right" delay={150}>
                        <div className="relative animate-float">
                            <div className="group rounded-2xl p-6 bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/40 shadow-lg dark:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    <Video className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Operación Broadcast & Marcadores</h4>
                                <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed mb-6">
                                    Desde la captura de video en campo hasta la sincronización de temporizadores y overlays de transmisión en directo para estadios.
                                </p>
                                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Calidad Garantizada</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                                        <span className="text-[10px] font-mono text-zinc-500">LIVE / 60FPS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    );
}