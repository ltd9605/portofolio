import { useEffect } from "react";

export default function Animation() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const animClass = entry.target.dataset.anim;
                    if (entry.isIntersecting) {
                        entry.target.style.animationDelay = entry.target.dataset.delay || "0s";
                        entry.target.classList.add(animClass);
                    } else {
                        entry.target.classList.remove(animClass);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll("[data-anim]");
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);
}
