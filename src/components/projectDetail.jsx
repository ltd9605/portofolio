import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { getProjects, getTechs } from "./getapi";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


export default function ProjectDetail() {
    const [projects, setProjects] = useState([]);
    const [readme, setReadme] = useState("");

    const { slug } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const p_data = await getProjects();
                setProjects(p_data);
                const currentProject = p_data.find((p) => p.slug === slug);
                if (currentProject && currentProject.links.github) {
                    try {
                        const parts = currentProject.links.github.split("/");
                        const owner = parts[3];
                        const repo = parts[4];
                        const res = await fetch(
                            `https://api.github.com/repos/${owner}/${repo}/readme`
                        );
                        if (res.ok) {
                            const data = await res.json();
                            const decoded = atob(data.content.replace(/\n/g, ""));
                            setReadme(decoded);
                        } else {
                            console.warn("Cannot fetch README, status:", res.status);
                        }
                    } catch (err) {
                        console.error("Error fetching README:", err);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [slug]);

    if (!projects || projects.length === 0) {
        return <p>⏳ Đang tải dữ liệu...</p>;
    }

    const project = projects.find((p) => p.slug === slug);
    if (!project) {
        return <p>❌ Không tìm thấy project</p>;
    }
    return (
        <div className="detail-container">
            <HashLink smooth to="/#portofolio" className="back-btn">
                ⬅ Back
            </HashLink>
            <span className="hover:text-blue-400 cursor-pointer">Projects</span> &gt;
            <span className="text-white ml-1"> {project.title}</span>

            <div className="detail-content">
                {/* Project Info */}
                <div className="project-infor" data-anim="fade-in">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-display"></i> Live Demo
                        </a>
                    )}
                    {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i> Github
                        </a>
                    )}

                    <h4>
                        <i className="fa-solid fa-code"></i> Technologies Used
                    </h4>
                    <ul>
                        {project.tech && project.tech.length > 0 ? (
                            project.tech.map((item, index) => <li key={index}>{item}</li>)
                        ) : (
                            <li>Chưa có dữ liệu công nghệ</li>
                        )}
                    </ul>
                </div>

                {/* Project Image & Key Features */}
                <div className="detail-project-img" data-anim="fade-in">
                    <img src={`/${project.img}`} alt={project.title} />
                    <div className="key-features">
                        <h3>
                            <i className="fa-regular fa-star"></i> Key features
                        </h3>
                        <ul>
                            {project.keyFeatures && project.keyFeatures.length > 0 ? (
                                project.keyFeatures.map((item, index) => <li key={index}>{item}</li>)
                            ) : (
                                <li>Chưa có key features</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            {/* README */}
            <div className="project-readme" data-anim="fade-in">
                <h4>
                    <i className="fa-solid fa-book"></i> README
                </h4>
                {readme ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {readme}
                    </ReactMarkdown>
                ) : (
                    <p>No README available</p>
                )}
            </div>

        </div>
    );
}
