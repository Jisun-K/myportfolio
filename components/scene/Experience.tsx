import { experienceList } from "@/data/experience";
import ExperienceList from "../ui/ExperienceList";

export default function Experience() {
    return (
        <section className="section-base md:max-w-5xl">
            <h1 className="section-title">경력 사항</h1>
            <p className="text-accent text-2xl font-ligth break-all text-center md:w-auto">
                다양한 프로젝트를 통해 실무 경험과<br className="hidden md:block"/> 기술 역량을 꾸준히 쌓아가고 있습니다.</p>
            <div className="md:flex md:justify-center md:items-start mt-6">
                <ExperienceList data={experienceList}/>
            </div>
        </section>
    )
}