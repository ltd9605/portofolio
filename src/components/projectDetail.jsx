import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import projects from "./projects";
import Background from "./background";

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) return <p>❌ Không tìm thấy project</p>;

    return (
        <>
            <Background />
            <div className="p-6 border rounded bg-gray-50">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="mt-2">{project.description}</p>

                {/* Hiển thị ảnh */}
                <img
                    src={project.img}
                    alt={project.title}
                    className="mt-4 max-w-md rounded shadow"
                />

                {/* Tech stack */}
                <div className="mt-4">
                    <h3 className="font-semibold">Technologies:</h3>
                    <ul className="flex gap-2 flex-wrap mt-1">
                        {project.tech.map((t, index) => (
                            <li
                                key={index}
                                className="px-2 py-1 bg-gray-200 rounded text-sm"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Links */}
                <div className="mt-4 flex gap-3">
                    {project.links.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-gray-800 text-white rounded"
                        >
                            🔗 Github
                        </a>
                    )}
                    {project.links.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-green-600 text-white rounded"
                        >
                            🚀 Demo
                        </a>
                    )}
                </div>
                <HashLink
                    smooth
                    to="/#portofolio"
                    className="mt-4 inline-block px-3 py-1 bg-blue-500 text-white rounded"
                >
                    ⬅ Back
                </HashLink>
            </div>
        </>
    );
}
