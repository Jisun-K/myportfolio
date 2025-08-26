import { TProject } from "@/types/project";


export default function ProjectModal({
    project,
    open,
    onClose,
}: {
    project: TProject;
    open: boolean;
    onClose: () => void;
}) {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            onClick={onClose}>
            <div
                className="bg-white rounded-xl p-6 w-[90%] max-w-lg shadow-lg relative"
                onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}   
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer">
                    ✕
                </button>

                <h2 className="text-xl font-bold mb-3">{project.title}</h2>
                {project.period && <p className="text-sm text-gray-500 mb-3">{project.period}</p>}
                <p>{project.roles && project.roles.map(role => <span key={role}>{role} </span>)}</p>
                <p>{project.techstack && project.techstack.map(skill => <span key={skill}>{skill} </span>)}</p>

                {project.contents && project.contents.map(con => <p key={con}>{con} </p>)}
                {/* {project.links. ? (
                    <p className="text-sm mb-3">
                        이 프로젝트의 상세 내용은 노션에서 확인 가능합니다.
                    </p>
                ) : (
                    project.description && <p className="text-sm mb-3">{project.description}</p>
                )} */}
{/* 
                <div className="flex gap-3 mt-3">
                    {project.notion && (
                        <a
                            href={project.notion}
                            target="_blank"
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            노션 열기
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                        >
                            깃허브 열기
                        </a>
                    )}
                </div> */}
            </div>
        </div>
    );
}
