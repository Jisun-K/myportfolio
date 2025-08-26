"use client";

import { TProject } from "@/types/project";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

type Props = { item: TProject }

export default function ProjectCard({ item }: Props) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <>
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col cursor-pointer border border-gray-200  
                    min-h-[150px] max-h-[250px] 
                    min-w-[120px] max-w-full
                    hover:shadow-lg hover:bg-accent/90
                    transition-shadow duration-200"
                onClick={() => setIsOpenModal(true)}>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-1">{item.period}</p>
                
                <p className="text-sm line-clamp-3">{item.description}</p>
            </div >
            <ProjectModal project={item} open={isOpenModal} onClose={() => setIsOpenModal(false)} />
        </>
    );
}