import { getProjects, getTechs } from "./getapi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const CardContainer = ({ activeTab }) => {
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
    return (
        <div className="card-container" data-anim="zoom-in"  >
            {activeTab === "projects" && (
                projects.map((project) => (
                    <div className="card-item" key={project.id}>
                        <img src={`/${project.img}`} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="card-item-links">
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github <i className="fa-solid fa-link"></i>
                            </a>
                            <Link to={`/portfolio/${project.slug}`}>
                                Details <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                ))
            )}

            {activeTab === "certificates" && (
                <div className="card-item">
                    <h3>Certificates</h3>
                    <p>This is where your certificates will be displayed.</p>
                </div>
            )}

            {activeTab === "techskills" && (
                techs.map((tech) => (
                    <div className="tech-item" key={tech.id}>
                        <img src={tech.img} alt={tech.title} />
                    </div>
                ))
            )}
        </div>
    );
};

export default CardContainer;
