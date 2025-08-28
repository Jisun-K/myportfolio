// // components/SmoothScrolling.tsx
// "use client";
// import { useEffect, useRef } from "react";
// import Lenis from "@studio-freight/lenis";

// export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
//     const lenisRef = useRef<Lenis | null>(null);

//     useEffect(() => {
//         const lenis = new Lenis({
//             duration: 1.2,
//             easing: (t: any) => t,
//             smoothWheel: true,
//             smoothTouch: true,
//             wheelMultiplier: 1,
//             touchMultiplier: 1,
//             infinite: false,
//         } as any);
//         lenisRef.current = lenis;

//         const raf = (time: number) => {
//             lenis.raf(time);
//             requestAnimationFrame(raf);
//         };
//         requestAnimationFrame(raf);

//         return () => lenis.destroy();
//     }, []);

//     return <>{children}</>;
// }
