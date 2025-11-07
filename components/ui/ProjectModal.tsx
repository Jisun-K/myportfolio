"use client"

import { linkType, TProject } from "@/types/project";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Progress } from "./progress";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const linkIcons: Record<linkType, string> = {
    notion: "/images/icon/ic_notion.svg",
    github: "/images/icon/ic_github.svg",
    appstore: "",
    other: "",
};

const linkLabels: Record<linkType, string> = {
    notion: "Notion",
    github: "GitHub",
    appstore: "App Store",
    other: "Link",
};

export default function ProjectModal({
    project,
    open,
    onClose,
}: {
    project: TProject;
    open: boolean;
    onClose: () => void;
}) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);


    if (!open) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            onClick={onClose}>
            <div
                className="flex flex-col bg-white rounded-xl p-6 w-[90%] max-h-[90vh] max-w-lg shadow-lg relative"
                onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 cursor-pointer">
                    <Image src={"images/icon/ic_close.svg"} alt="close" width={18} height={18} />
                </button>

                <article className="shrink-0">
                    <h2 className="text-xl font-bold mb-3">{project.title}</h2>
                    {project.period && <p className="text-sm text-gray-500 mb-3">{project.period}</p>}
                    <p> {project.roles && project.roles.map((role, idx) => (
                        <span key={role}>
                            {role}
                            {idx < project.roles.length - 1 && ", "}
                        </span>
                    ))}</p>

                    {project.type === "work" &&
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex items-center gap-2 w-64">
                                    <span className="whitespace-nowrap">기여도:</span>
                                    <Progress value={project.contribution} className="flex-1" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{project.contribution}%</p>
                            </TooltipContent>
                        </Tooltip>
                    }
                    <p className=" my-2">{project.techstack && project.techstack.map(skill => <span key={skill} className="skill-tag">{skill} </span>)}</p>
                    <hr className="my-2" />
                </article>

                <article className="flex-1 min-h-0 font-light overflow-y-scroll md:overflow-y-auto">
                    <div className="">
                        {project.links && <>
                            <p className="text-assist">프로젝트의 자세한 내용은 아래 아이콘을 누르시면 확인 가능합니다.</p>
                            {project.links.map((link) => (
                                <div key={link.type} className="text-center">
                                    <Link
                                        key={link.type}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded inline-flex justify-center p-1 mt-2  hover:bg-gray-200 "
                                    >
                                        <Image
                                            src={linkIcons[link.type]}
                                            alt={link.type}
                                            width={24}
                                            height={24}
                                        />
                                        <span className="pl-1 text-assist">{linkLabels[link.type]}</span>
                                    </Link>
                                </div>
                            ))}
                        </>
                        }
                    </div>
                    <div className="py-2">
                        <h3 className="font-semibold text-lg">담당</h3>
                        {project.contents && project.contents.map(con => <p key={con}>• {con} </p>)}
                    </div>

                    {project.outcome && <div className="py-2">
                        <h3 className="font-semibold text-lg">결과</h3>
                        <p>{project.outcome} </p>
                    </div>}
                </article>
            </div>
        </div >
    );
}
