import Hero from "@/components/scene/Hero";
import Skills from "@/components/scene/Skills";
import SmoothScrolling from "@/components/SmoothScrolling";

export default function Home() {
    return (
        <SmoothScrolling>
            <main className="w-full flex flex-col items-center justify-center overflow-hidden scroll-smooth text-white bg-[var(--color-background)]">
                <Hero />
                <Skills />
            </main>
        </SmoothScrolling>
    );
}
