"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ProjectItem } from "@/data/portfolioData";
import { ArrowUpRight, Trophy, Tv, Radio, CheckCircle2, X } from "lucide-react";

export default function ModelGrid({ items }: { items: ProjectItem[] }) {
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
    const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

    const handleImgError = (id: string) => {
        setImgErrors(prev => ({ ...prev, [id]: true }));
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedProject(null);
            }
        };

        if (selectedProject) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedProject]);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {items.map((item) => {
                    const hasError = imgErrors[item.id];

                    return (
                        <div
                            key={item.id}
                            className={`group relative bg-white hover:bg-zinc-50 dark:bg-zinc-900/70 dark:hover:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800/90 ${item.accentColor.border} rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-lg dark:shadow-2xl flex flex-col justify-between`}
                        >
                            <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${item.accentColor.glow} rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div>
                                {/* CONTENEDOR DE IMAGEN (Mantiene estética oscura broadcast para resaltar fotos de estadio) */}
                                <div className="relative h-56 sm:h-64 w-full bg-zinc-950 overflow-hidden flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800/80">
                                    <span className="absolute inset-0 flex items-center justify-center font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter text-zinc-900/70 select-none pointer-events-none group-hover:text-zinc-800/80 transition-colors uppercase">
                                        {item.watermark}
                                    </span>

                                    <div className="absolute top-4 left-4 z-10">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border tracking-wide uppercase backdrop-blur-md ${item.accentColor.badge}`}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                                            {item.tag}
                                        </span>
                                    </div>

                                    {!hasError ? (
                                        <img
                                            src={item.previewImage}
                                            alt={item.team}
                                            onError={() => handleImgError(item.id)}
                                            className="w-full h-full object-cover object-center relative z-0 transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                                            <div className={`w-16 h-16 rounded-2xl ${item.accentColor.bg} border border-zinc-800 flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform`}>
                                                {item.id === "necaxa" ? (
                                                    <Trophy className={`w-8 h-8 ${item.accentColor.text}`} />
                                                ) : item.id === "rieleros" ? (
                                                    <Radio className={`w-8 h-8 ${item.accentColor.text}`} />
                                                ) : (
                                                    <Tv className={`w-8 h-8 ${item.accentColor.text}`} />
                                                )}
                                            </div>
                                            <span className="text-xs font-semibold text-zinc-300">
                                                {item.team}
                                            </span>
                                            <span className="text-[10px] text-zinc-500 font-mono mt-0.5">
                                                {item.venue}
                                            </span>
                                        </div>
                                    )}

                                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950/90 to-transparent pointer-events-none z-10" />
                                </div>

                                {/* INFORMACIÓN DEL PROYECTO */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className={`text-[11px] font-bold tracking-wider uppercase ${item.accentColor.text}`}>
                                            {item.sport}
                                        </span>
                                        <span className="text-[11px] text-zinc-500 font-medium">
                                            {item.league}
                                        </span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight mb-2 transition-colors">
                                        {item.team}
                                    </h3>

                                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {item.specs.map((spec, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-zinc-100 dark:bg-zinc-950/80 text-zinc-700 dark:text-zinc-300 text-[11px] px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800/80 font-medium"
                                            >
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* BOTÓN CTA */}
                            <div className="p-6 pt-0">
                                <button
                                    type="button"
                                    onClick={() => setSelectedProject(item)}
                                    className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-zinc-900 dark:bg-zinc-950 border border-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-500 group-hover:shadow-lg group-hover:shadow-red-600/30 cursor-pointer"
                                >
                                    <span>Ver Ficha Técnica</span>
                                    <span className="w-7 h-7 rounded-full bg-zinc-800 dark:bg-zinc-900 group-hover:bg-red-700 flex items-center justify-center transition-colors">
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* MODAL DETALLADO */}
            {typeof document !== "undefined" &&
                selectedProject &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md cursor-pointer"
                        onMouseDown={(e) => {
                            if (e.target === e.currentTarget) {
                                setSelectedProject(null);
                            }
                        }}
                    >
                        <div
                            className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto cursor-default"
                            onMouseDown={(e) => e.stopPropagation()}
                        >
                            <button
                                type="button"
                                onClick={() => setSelectedProject(null)}
                                aria-label="Cerrar ficha técnica"
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-zinc-900/80 text-zinc-200 hover:text-white hover:bg-red-600 transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="relative h-56 sm:h-64 w-full bg-zinc-950 overflow-hidden">
                                <img
                                    src={selectedProject.image}
                                    alt={`${selectedProject.team} - Pantalla`}
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent pointer-events-none" />
                            </div>

                            <div className="p-6 sm:p-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`text-xs font-bold uppercase tracking-widest ${selectedProject.accentColor.text}`}>
                                        {selectedProject.sport}
                                    </span>
                                    <span className="text-zinc-400 dark:text-zinc-600">•</span>
                                    <span className="text-xs text-zinc-500 dark:text-zinc-400">{selectedProject.league}</span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-2">
                                    {selectedProject.team}
                                </h2>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 font-mono">
                                    Recinto: {selectedProject.venue}
                                </p>

                                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                                    {selectedProject.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                                        Cobertura & Alcance Técnico:
                                    </h4>
                                    <div className="space-y-2">
                                        {selectedProject.deliverables.map((deliv, i) => (
                                            <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                                                <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${selectedProject.accentColor.text}`} />
                                                <span>{deliv}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                                        Equipamiento Desplegado:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.specs.map((spec, i) => (
                                            <span key={i} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-zinc-700 dark:text-zinc-300">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                                    <a
                                        href="#contacto"
                                        onClick={() => setSelectedProject(null)}
                                        className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-colors shadow-lg shadow-red-600/30"
                                    >
                                        Cotizar Servicio Similar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}