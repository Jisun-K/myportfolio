import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

const skills = [
    {
        name: "Angular2",
        src: ""
    },
    {
        name: "Next.js",
        src: ""
    },
    {
        name: "Typescript",
        src: ""
    },
    {
        name: "Javascript",
        src: ""
    },
    {
        name: "Firebase",
        src: ""
    },
    {
        name: "Github",
        src: ""
    },
    {
        name: "Java",
        src: ""
    }
]

export default function Skills() {
    return (
        <section className="flex flex-col justify-center items-center px-6 md:px-0 max-w-3xl mx-auto h-screen text-[var(--color-text)]">
            {skills.map((skill) => {
                return (
                    <Avatar id={skill.name}>
                        <AvatarImage src={skill.src} />
                        <AvatarFallback>{skill.name}</AvatarFallback>
                    </Avatar>
                );
            }
            )}
        </section>
    )
}