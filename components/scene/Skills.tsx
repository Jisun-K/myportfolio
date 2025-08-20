"use client"

import { skills } from "@/data/skills"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { useState } from "react"

export default function Skills() {
    const [hoveredSkillType, setHoveredSkillType] = useState<string | null>(null);
    
    return (
        <section className="section-base">
            {hoveredSkillType ?
                <h1 className="mb-4 h-6 text-center font-xl text-background bg-text">
                    <span className="p-2">{hoveredSkillType.toUpperCase()}</span>
                </h1>
                : <h1 className="text-xl font-bold mb-4 h-6">기술 스택</h1>
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
                                {/* 물 차오르는 애니메이션 예정 */}
                            {/* <div
                                className="absolute bottom-0 left-0 w-full bg-blue-400 opacity-30 rounded-b-xl transition-all duration-500"
                                style={{ height: `${skill.level * 100}%` }}
                            /> */}
                            <Avatar>
                                {/* 이미지 로딩 개선 예정 */}
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