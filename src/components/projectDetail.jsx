import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { getProjects } from "./getapi";
import { useState, useEffect } from "react";
export default function ProjectDetail() {
    const [projects, setProjects] = useState([]);
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const p_data = await getProjects();
            setProjects(p_data);
            const t_data = await getTechs();
            setTechs(t_data);
        }
        fetchData();
    }, []);
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) return <p>❌ Không tìm thấy project</p>;

    return (
        <>
            <div className="detail-container">
                <HashLink
                    smooth
                    to="/#portofolio"
                    className="back-btn"
                >
                    ⬅ Back
                </HashLink>
                <span className="hover:text-blue-400 cursor-pointer">Projects</span> &gt;
                <span className="text-white ml-1"> {project.title}</span>
                <div className="detail-content">
                    <div className="project-infor">
                        <h1 >{project.title}</h1>
                        <p >{project.description}</p>
                        <a> <i class="fa-solid fa-display"></i>  Live Demo</a>
                        <a href={project.links.github} target="_blank"> <i class="fa-brands fa-github"></i>  Github</a>
                        <h4><i class="fa-solid fa-code"></i> Technologies Used</h4>
                        <ul>
                            {project.tech.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                    </div>
                    <div className="detail-project-img">
                        <img src={project.img}
                            alt={project.title} />
                        <div className="key-features">
                            <h3> <i class="fa-regular fa-star">  </i>  Key features </h3>
                            <ul>
                                {project.keyFeatures.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
