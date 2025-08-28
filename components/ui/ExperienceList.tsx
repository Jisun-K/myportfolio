import { TExperience } from "@/types/experience";
import Image from "next/image";
import ExperienceListItem from "./ExperienceListItem";

type Props = { data: TExperience[] }

const categories = [
    { type: 'work', icon: '/images/icon/ic_company.svg', alt: 'company' },
    { type: 'study', icon: '/images/icon/ic_study.svg', alt: 'study' },
];

export default function ExperienceList({ data }: Props) {
    return (
        <>
            {categories.map(({ type, icon }) => {
                const filtered = data.filter(item => item.type === type);
                if (filtered.length === 0) return null;

                return (
                    <article key={type} className="mx-2">
                        {/* <div className="flex justify-center items-center"><Image className="" width={24} height={24} src={icon} alt={alt} /></div> */}
                        {filtered.map(item =>
                            <div key={item.name}>
                                <ExperienceListItem icon={icon} {...item} />
                            </div>  
                        )}
                    </article>
                )
            })}
        </>
    );
}