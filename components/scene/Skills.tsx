"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { useState } from "react"

import AngularIcon from "/images/ic_angular.svg"

const skills = [
    {
        name: "Angular2",
        src: "/images/ic_angular.svg",
        level: 0.8,
        type: "work"
    },
    {
        name: "Next.js",
        src: "/images/ic_next.svg",
        level: 0.8,
        type: "personal"
    },
    {
        name: "Typescript",
        src: "/images/ic_typescript.svg",
        level: 0.8,
        type: "work"
    },
    {
        name: "Javascript",
        src: "/images/ic_javascript.svg",
        level: 0.8,
        type: "personal"

    },
    {
        name: "TailwindCSS",
        src: "/images/ic_tailwind.svg",
        level: 0.8,
        type: "personal"

    },
    {
        name: "Firebase",
        src: "/images/ic_firebase.svg",
        level: 0.8,
        type: "work"

    },
    {
        name: "Java",
        src: "/images/ic_java.svg",
        level: 0.8,
        type: "personal"

    },
    {
        name: "React",
        src: "/images/ic_react.svg",
        level: 0.8,
        type: "personal"
    },
    {
        name: "Github",
        src: "/images/ic_github.svg",
        level: 0.8,
        type: "work"
    }
]

export default function Skills() {
    const [hoveredSkillType, setHoveredSkillType] = useState<string | null>(null)

    return (
        <section className="section-base">
            {hoveredSkillType ?
                <h3 className="mb-4 h-6 text-center font-xl text-background bg-accent">
                    <span className="p-2">{hoveredSkillType.toUpperCase()}</span>
                </h3>
                : <h1 className="text-accent text-xl font-bold mb-4 h-6">기술 스택</h1>
            }
            {/* <h1 className="text-accent text-xl font-bold mb-4">기술 스택</h1>
            <h3 className="mb-4 h-6 text-center font-medium text-background bg-accent">
                {hoveredSkillType && <span className="p-2">{hoveredSkillType.toUpperCase()}</span>}
            </h3> */}
            <div className="grid grid-cols-3 gap-4 mt-[8px] ">
                {skills.map((skill) => {
                    const isSameType = hoveredSkillType === skill.type;
                    const isOtherType = hoveredSkillType && hoveredSkillType !== skill.type;

                    return (
                        <div key={skill.name} className={`w-24 rounded-xl border border-gray-200 bg-white shadow-sm p-4 transition-transform duration-200 
                ${isSameType ? "shadow-md scale-[1.1]" : ""}
                ${isOtherType ? "blur-[1px] opacity-90" : ""}`}
                            onMouseEnter={() => setHoveredSkillType(skill.type)}
                            onMouseLeave={() => setHoveredSkillType(null)}>
                            {/* <div
                                className="absolute bottom-0 left-0 w-full bg-blue-400 opacity-30 rounded-b-xl transition-all duration-500"
                                style={{ height: `${skill.level * 100}%` }}
                            /> */}
                            <Avatar>
                                <AvatarImage src={skill.src} alt={skill.name} />
                                <AvatarFallback>{skill.name}</AvatarFallback>
                            </Avatar>
                        </div>
                    )
                })}
            </div>
        </section >
    )
}