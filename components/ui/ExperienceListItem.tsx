"use client"

import { TExperience } from "@/types/experience";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";

type Props = TExperience & { icon: string };

export default function ExperienceListItem({ date, name, description, contents, type, icon }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className="my-6 md:my-4 text-assist font-extralight md:flex md:items-start ">
            <p className="text-m md:max-w-[95px]">{date}</p>
            <div className="md:w-[350px]">
                <p className="text-xl text-text font-normal">
                    <Image className="mr-2 inline-block" width={18} height={18} src={icon} alt={type} />
                    {name}
                </p>
                {description.map((desc, idx) => {
                    return <p key={idx} className="">{desc}</p>
                })}
                <button onClick={handleToggle} className="text-accent cursor-pointer my-2 font-normal">
                    {isOpen ? '접기' : '보기'}
                </button>
                <AnimatePresence mode="wait">
                    {isOpen && (
                        <motion.ul
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-accent/20 rounded-2xl p-2 mt-2 font-normal">
                            {contents.map((con, idx) => {
                                return <li key={idx} className="leading-7 text-text">• {con}</li>
                            })}
                        </motion.ul>
                    )}
                </AnimatePresence>  
            </div>
        </div>
    );
}
