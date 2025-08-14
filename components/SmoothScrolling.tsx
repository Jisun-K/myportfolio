'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

interface Props {
    children: React.ReactNode;
}

export default function SmoothScrolling({ children }: Props) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const initLenis = () => {
            if (lenisRef.current) return;

            lenisRef.current = new Lenis({
                duration: 1.2,
                easing: (t) => t,
                wheelMultiplier: 1,
                infinite: false,
            });

            const raf = (time: number) => {
                lenisRef.current?.raf(time);
                requestAnimationFrame(raf);
            };
            requestAnimationFrame(raf);

            document.body.style.overflow = 'auto';
        };
        document.body.style.overflow = 'hidden';

        if (document.readyState === 'complete') {
            initLenis();
        } else {
            window.addEventListener('load', initLenis);
            return () => window.removeEventListener('load', initLenis);
        }
    }, []);

    return <>{children}</>;
}
