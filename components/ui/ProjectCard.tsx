"use client";

import { TProject } from "@/types/project";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { Progress } from "./progress";

type Props = { item: TProject }

const colors = ["rgba(134, 239, 172, 0.2)", "rgba(147, 197, 253, 0.2)", "rgba(252, 230, 139, 0.2)", "rgba(196, 181, 253, 0.2)"];

export default function ProjectCard({ item }: Props) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [hoverColor, setHoverColor] = useState("");

    const handleMouseEnter = () => {
        const random = colors[Math.floor(Math.random() * colors.length)];
        setHoverColor(random);
    };

    const handleMouseLeave = () => {
        setHoverColor("");
    };

    return (
        <>
            <div   style={{ backgroundColor: hoverColor || "#ffffff" }}
                    className={` rounded-xl shadow-md text-sm p-4 flex flex-col cursor-pointer border border-gray-200  
                    min-h-[150px] max-h-[250px] 
                    min-w-[120px] max-w-full
                    transition-shadow transition-color duration-200
                    hover:shadow-lg`}
                onClick={() => setIsOpenModal(true)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className=" text-gray-500 mb-1">{item.period}</p>
                {item.type === "work" &&
                    <div className="flex items-center gap-2">
                        <span className="whitespace-nowrap">기여도:</span>
                        <Progress value={item.contribution} className="flex-1" />
                    </div>
                }
                <hr className="my-1.5" />
                <p className="line-clamp-3">{item.description}</p>
                <div className="flex flex-wrap text-sm">
                    {item.techstack.map((stack) => <span key={stack} className="skill-tag">{stack}</span>)}
                </div>
            </div >
            <ProjectModal project={item} open={isOpenModal} onClose={() => setIsOpenModal(false)} />
        </>
    );
}