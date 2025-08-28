import Hero from "@/components/scene/Hero";
import Skills from "@/components/scene/Skills";
import Experience from "@/components/scene/Experience";
import Projects from "@/components/scene/Projects";

// import SmoothScrolling from "@/components/SmoothScrolling";

export default function Home() {
    return (
        // <SmoothScrolling>
            <main className="w-full flex flex-col items-center justify-center pb-3 scroll-smooth text-white bg-background">
                <Hero />
                <Skills />
                <Experience />
                <Projects />
            </main>
        // </SmoothScrolling>
    );
}
