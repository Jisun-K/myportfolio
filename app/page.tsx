import Experience from "@/components/scene/Experience";
import Hero from "@/components/scene/Hero";
import Skills from "@/components/scene/Skills";
import SmoothScrolling from "@/components/SmoothScrolling";

export default function Home() {
    return (
        <SmoothScrolling>
            <main className="w-full flex flex-col items-center justify-center scroll-smooth text-white bg-background">
                <Hero />
                <Skills />
                <Experience />
            </main>
        </SmoothScrolling>
    );
}
