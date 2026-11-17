"use client";

import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSending(true);
        setErrorMsg(null);

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id_aqui";
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id_aqui";
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key_aqui";

        if (serviceId === "service_id_aqui" || templateId === "template_id_aqui" || publicKey === "public_key_aqui") {
            setErrorMsg("EmailJS aún no está configurado. Por favor ingresa tu Service ID, Template ID y Public Key en el archivo .env.local.");
            setIsSending(false);
            return;
        }

        try {
            await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
            setSubmitted(true);
            formRef.current.reset();
            setTimeout(() => setSubmitted(false), 6000);
        } catch (err: unknown) {
            console.error("Error al enviar con EmailJS:", err);
            setErrorMsg("Hubo un problema al enviar la cotización. Verifica tus claves de EmailJS o contáctanos por WhatsApp.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contacto" className="h-screen min-h-screen snap-start flex flex-col justify-between pt-20 pb-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">

                <Reveal direction="up" delay={0}>
                    <div className="text-center max-w-3xl mx-auto mb-6">
                        <h2 className="text-rose-600 dark:text-rose-500 font-semibold text-xs uppercase tracking-widest mb-1">Cotizaciones & Producción</h2>
                        <p className="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">Ponte en contacto con nosotros</p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

                    {/* COLUMNA DE DATOS DE CONTACTO CON DESLIZAMIENTO */}
                    <Reveal direction="left" delay={100}>
                        <div className="space-y-3">
                            {/* WHATSAPP / TELÉFONO */}
                            <div className="group p-4 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex items-start gap-3 hover:border-emerald-500/50 transition-all duration-300 hover:translate-x-1.5 shadow-xs">
                                <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white text-xs">Teléfono / WhatsApp</h4>
                                    <a
                                        href="https://wa.me/524492772841?text=Hola%20Machine%20Producciones%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20evento."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-600 dark:text-zinc-400 text-xs hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block"
                                        title="Chatear en WhatsApp"
                                    >
                                        +52 (449) 277 2841 <span className="text-[10px] text-emerald-600 dark:text-emerald-500 font-medium ml-1">↗ WhatsApp</span>
                                    </a>
                                </div>
                            </div>

                            {/* GMAIL */}
                            <div className="group p-4 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex items-start gap-3 hover:border-rose-500/50 transition-all duration-300 hover:translate-x-1.5 shadow-xs">
                                <Mail className="w-5 h-5 text-rose-600 dark:text-rose-500 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white text-xs">Correo Electrónico</h4>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=machine.creadores@gmail.com&su=Cotizaci%C3%B3n%20-%20Machine%20Producciones%20Audiovisuales"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-600 dark:text-zinc-400 text-xs hover:text-rose-600 dark:hover:text-rose-500 transition-colors inline-block"
                                        title="Enviar correo por Gmail"
                                    >
                                        machine.creadores@gmail.com <span className="text-[10px] text-rose-600 dark:text-rose-400 font-medium ml-1">↗ Gmail</span>
                                    </a>
                                </div>
                            </div>

                            {/* UBICACIÓN */}
                            <div className="group p-4 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex items-start gap-3 hover:border-rose-500/50 transition-all duration-300 hover:translate-x-1.5 shadow-xs">
                                <MapPin className="w-5 h-5 text-rose-600 dark:text-rose-500 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white text-xs">Ubicación</h4>
                                    <a
                                        href="https://maps.app.goo.gl/VjjibTJ89RWhPhBM8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-600 dark:text-zinc-400 text-xs hover:text-rose-600 dark:hover:text-rose-500 transition-colors inline-block"
                                        title="Ver ubicación en Google Maps"
                                    >
                                        Aguascalientes, México <span className="text-[10px] text-rose-600 dark:text-rose-400 font-medium ml-1">↗ Maps</span>
                                    </a>
                                </div>
                            </div>

                            {/* INSTAGRAM */}
                            <div className="group p-4 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex items-start gap-3 hover:border-fuchsia-500/50 transition-all duration-300 hover:translate-x-1.5 shadow-xs">
                                <svg className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-500 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white text-xs">Instagram</h4>
                                    <a
                                        href="https://www.instagram.com/machine.aa_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-600 dark:text-zinc-400 text-xs hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors inline-block"
                                        title="Ver Instagram"
                                    >
                                        @machine.aa_ <span className="text-[10px] text-fuchsia-600 dark:text-fuchsia-400 font-medium ml-1">↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* FORMULARIO DE COTIZACIÓN VÍA EMAILJS */}
                    <Reveal direction="right" delay={200} className="lg:col-span-2">
                        <div className="bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm">
                            {submitted ? (
                                <div className="py-8 text-center space-y-2">
                                    <CheckCircle2 className="w-12 h-12 text-rose-600 dark:text-rose-500 mx-auto animate-bounce" />
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">¡Solicitud enviada con éxito!</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-xs">Recibirás respuesta en tu correo a la brevedad.</p>
                                </div>
                            ) : (
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                    {errorMsg && (
                                        <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/80 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600 dark:text-red-400" />
                                            <span>{errorMsg}</span>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[10px] uppercase font-bold text-zinc-600 dark:text-zinc-400 mb-1">Nombre Completo</label>
                                            <input
                                                type="text"
                                                name="user_name"
                                                required
                                                placeholder="Tu nombre o empresa"
                                                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-lg px-3 py-2 text-zinc-900 dark:text-white text-xs focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] uppercase font-bold text-zinc-600 dark:text-zinc-400 mb-1">Correo Electrónico</label>
                                            <input
                                                type="email"
                                                name="user_email"
                                                required
                                                placeholder="tu@correo.com"
                                                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-lg px-3 py-2 text-zinc-900 dark:text-white text-xs focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[10px] uppercase font-bold text-zinc-600 dark:text-zinc-400 mb-1">Tipo de Servicio</label>
                                            <select
                                                name="service_type"
                                                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-lg px-3 py-2 text-zinc-900 dark:text-white text-xs focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all"
                                            >
                                                <option value="Torneo Deportivo / Liga">Torneo Deportivo / Liga</option>
                                                <option value="Transmisión en Vivo (Streaming)">Transmisión en Vivo (Streaming)</option>
                                                <option value="Operación de Marcadores y Pantallas">Operación de Marcadores / Pantallas</option>
                                                <option value="Producción Técnica Completa">Producción Técnica Completa</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] uppercase font-bold text-zinc-600 dark:text-zinc-400 mb-1">Fecha del Evento</label>
                                            <input
                                                type="date"
                                                name="event_date"
                                                required
                                                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-lg px-3 py-2 text-zinc-900 dark:text-white text-xs focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all [color-scheme:light] dark:[color-scheme:dark]"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] uppercase font-bold text-zinc-600 dark:text-zinc-400 mb-1">Detalles del Evento o Solicitud</label>
                                        <textarea
                                            rows={3}
                                            name="message"
                                            required
                                            placeholder="Cuéntanos sobre el recinto, cantidad de cámaras requeridas o requerimientos especiales..."
                                            className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-lg px-3 py-2 text-zinc-900 dark:text-white text-xs focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSending}
                                        className="btn-shimmer group w-full flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white font-bold py-2.5 rounded-lg text-xs transition-all duration-300 shadow-lg shadow-rose-600/30 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
                                    >
                                        {isSending ? (
                                            <>
                                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                                Enviando Cotización...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                Enviar Cotización
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </Reveal>

                </div>
            </div>

            {/* FOOTER INTEGRADO AL FINAL DE LA PANTALLA */}
            <footer className="pt-4 border-t border-zinc-200 dark:border-zinc-900 text-center text-[11px] text-zinc-500">
                © 2026 Machine Producciones Audiovisuales.
            </footer>
        </section>
    );
}