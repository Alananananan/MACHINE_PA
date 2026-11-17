"use client";

import { Video } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* LOGO FOOTER */}
                    <div className="group flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <Video className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-zinc-900 dark:text-white tracking-wider text-base">
                            MACHINE PRODUCCIONES
                        </span>
                    </div>

                    {/* NAVEGACIÓN RÁPIDA */}
                    <div className="flex flex-wrap justify-center gap-6 text-xs text-zinc-600 dark:text-zinc-400">
                        <a href="#inicio" className="hover:text-rose-600 dark:hover:text-white transition-colors">Inicio</a>
                        <a href="#servicios" className="hover:text-rose-600 dark:hover:text-white transition-colors">Servicios</a>
                        <a href="#portafolio" className="hover:text-rose-600 dark:hover:text-white transition-colors">Portafolio</a>
                        <a href="#nosotros" className="hover:text-rose-600 dark:hover:text-white transition-colors">Nosotros</a>
                        <a href="#contacto" className="hover:text-rose-600 dark:hover:text-white transition-colors">Contacto</a>
                    </div>

                    {/* DERECHOS DE AUTOR */}
                    <p className="text-xs text-zinc-500 text-center md:text-right">
                        © 2026 Machine Producciones Audiovisuales. Todos los derechos reservados.
                    </p>

                </div>
            </div>
        </footer>
    );
}