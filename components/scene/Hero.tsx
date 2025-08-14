export default function Hero() {
    return (
        <section className="flex flex-col justify-center items-center px-6 md:px-0 max-w-3xl mx-auto h-screen text-[var(--color-text)]">
            <h1 className="w-full md:w-auto text-3xl md:text-5xl font-bold leading-snug md:leading-tight ">
                안녕하세요, <br />
                프론트엔드 개발자 <br className="md:hidden" />
                <em className="text-[var(--color-accent)] not-italic font-extrabold">김지선</em> 입니다.
            </h1>
            <p className="mt-4 text-base md:text-lg leading-tight md:max-w-[80%]">
                Angular 경험을 바탕으로 웹 프로젝트를 개발하였고, 최근엔 Next.js 기능을 학습하며 효율적이고 인터랙티브한 사용자 경험을 만드는 데 집중하고 있습니다.
            </p>
        </section>
    );
}