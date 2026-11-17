"use client";

import { useState, useEffect } from "react";
import { Menu, X, Radio, Sun, Moon } from "lucide-react";

const navItems = [
    { id: "inicio", label: "Inicio", progress: "20%" },
    { id: "servicios", label: "Servicios", progress: "40%" },
    { id: "portafolio", label: "Portafolio", progress: "60%" },
    { id: "nosotros", label: "Nosotros", progress: "80%" },
    { id: "contacto", label: "Contacto", progress: "100%" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [imgError, setImgError] = useState(false);
    const [activeSection, setActiveSection] = useState("inicio");
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        } else {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const nextDark = !isDark;
        setIsDark(nextDark);
        if (nextDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0,
            }
        );

        navItems.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const currentProgress =
        navItems.find((item) => item.id === activeSection)?.progress || "20%";

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/80 shadow-sm dark:shadow-2xl transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">

                {/* LOGO */}
                <a
                    href="#inicio"
                    onClick={() => setActiveSection("inicio")}
                    className="flex items-center py-1.5 group"
                >
                    {!imgError ? (
                        <div className="bg-zinc-950 px-2.5 py-1.5 rounded-xl border border-zinc-800/60 transition-all duration-300 group-hover:border-cyan-500/40 group-hover:shadow-md group-hover:shadow-cyan-500/10">
                            <img
                                src="/logo.jpg"
                                alt="Machine Producciones Audiovisuales"
                                onError={() => setImgError(true)}
                                className="h-9 sm:h-11 w-auto max-h-11 object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    ) : (
                        <div className="flex flex-col items-start">
                            <span className="font-black text-xl sm:text-2xl tracking-tighter text-zinc-900 dark:text-white leading-none">
                                MACHINE
                            </span>
                            <div className="w-full h-1 my-0.5 rounded-full bg-gradient-to-r from-gray-300 via-yellow-400 via-cyan-400 via-green-500 via-fuchsia-500 via-red-600 to-blue-700" />
                            <span className="text-[7px] sm:text-[8px] font-semibold tracking-widest text-zinc-600 dark:text-zinc-300 uppercase leading-none">
                                PRODUCCIONES AUDIOVISUALES
                            </span>
                        </div>
                    )}
                </a>

                {/* NAVEGACIÓN DESKTOP CON INDICADOR ANIMADO */}
                <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setActiveSection(item.id)}
                                className={`relative py-1.5 text-sm lg:text-base font-semibold transition-all duration-300 ${isActive
                                        ? "text-red-600 dark:text-red-500 scale-105"
                                        : "text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-500"
                                    }`}
                            >
                                {item.label}
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-red-600 dark:bg-red-500 rounded-full transition-all duration-300 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"
                                        }`}
                                />
                            </a>
                        );
                    })}
                </nav>

                {/* BOTÓN MODO CLARO/OSCURO + BOTÓN CTA CON SHIMMER */}
                <div className="hidden md:flex items-center justify-end gap-3 min-w-[260px]">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                        title={isDark ? "Modo Claro" : "Modo Oscuro"}
                        className="group p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                        {isDark ? (
                            <Sun className="w-5 h-5 text-amber-400 transition-transform duration-500 group-hover:rotate-90" />
                        ) : (
                            <Moon className="w-5 h-5 text-zinc-700 transition-transform duration-500 group-hover:-rotate-12" />
                        )}
                    </button>

                    {activeSection !== "contacto" && (
                        <a
                            href="#contacto"
                            onClick={() => setActiveSection("contacto")}
                            className="btn-shimmer flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95"
                        >
                            <Radio className="w-4 h-4 animate-pulse" />
                            Solicitar Cotización
                        </a>
                    )}
                </div>

                {/* CONTROLES MÓVIL */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                        className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 active:scale-95 transition-transform"
                    >
                        {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-zinc-700" />}
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white focus:outline-none"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* BARRA DE PROGRESO BROADCAST SMPTE */}
            <div className="w-full h-[2px] bg-transparent overflow-hidden">
                <div
                    style={{ width: currentProgress }}
                    className="h-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-red-600 transition-all duration-500 ease-out"
                />
            </div>

            {isOpen && (
                <div className="md:hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-4 pt-4 pb-6 space-y-4">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => {
                                    setActiveSection(item.id);
                                    setIsOpen(false);
                                }}
                                className={`block font-medium text-base transition-colors ${isActive
                                        ? "text-red-600 dark:text-red-500 font-bold translate-x-1"
                                        : "text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-500"
                                    }`}
                            >
                                {item.label}
                            </a>
                        );
                    })}

                    {activeSection !== "contacto" && (
                        <a
                            href="#contacto"
                            onClick={() => {
                                setActiveSection("contacto");
                                setIsOpen(false);
                            }}
                            className="btn-shimmer flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold text-sm"
                        >
                            <Radio className="w-4 h-4" />
                            Solicitar Cotización
                        </a>
                    )}
                </div>
            )}
        </header>
    );
}