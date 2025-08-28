import { projectList } from "@/data/project";
import { Tabs, TabsContent, TabsList } from "@radix-ui/react-tabs";
import ProjectCard from "../ui/ProjectCard";
import TabsButton from "../ui/TabsButton";

const categories = [
    { type: 'work', value: 'work', label: '업무' },
    { type: 'personal', value: 'personal', label: '개인' },
];

export default function Projects() {
    return (
        <section className="section-base justify-start pt-[5rem]">
            <h1 className="section-title">프로젝트</h1>
            <Tabs defaultValue="work">
                <TabsList className="flex w-[150px] bg-gray-200 rounded-xl p-1">
                    {categories.map(categroy =>
                        <TabsButton value={categroy.value} label={categroy.label} key={categroy.value} />
                    )}
                </TabsList>
                {categories.map(({ type }, idx) => {
                    const filtered = projectList.filter(f => f.type === type);
                    return (
                        <TabsContent value={type} key={idx} className="mt-5">
                            <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                                {filtered.map(item =>
                                    <ProjectCard item={item} key={item.id} />
                                )}
                            </div>
                        </TabsContent>
                    )
                })}
            </Tabs>
        </section>
    )
}