"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right" | "zoom" | "fade";
    delay?: number;
    duration?: number;
    className?: string;
}

export default function Reveal({
    children,
    direction = "up",
    delay = 0,
    duration = 650,
    className = "",
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Se reinicia suavemente al salir de la pantalla para que vuelva a animarse al regresar
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.12,
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const getHiddenTransform = () => {
        switch (direction) {
            case "up":
                return "translate-y-7 opacity-0";
            case "down":
                return "-translate-y-7 opacity-0";
            case "left":
                return "-translate-x-8 opacity-0";
            case "right":
                return "translate-x-8 opacity-0";
            case "zoom":
                return "scale-95 opacity-0";
            case "fade":
            default:
                return "opacity-0";
        }
    };

    return (
        <div
            ref={ref}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className={`transition-all will-change-transform ${isVisible
                    ? "translate-x-0 translate-y-0 scale-100 opacity-100"
                    : getHiddenTransform()
                } ${className}`}
        >
            {children}
        </div>
    );
}