import { getCertificate, getProjects, getTechs } from "./getapi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const CardContainer = ({ activeTab }) => {
    const [projects, setProjects] = useState([]);
    const [techs, setTechs] = useState([]);
    const [certificates, setCertificates] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const p_data = await getProjects();
            setProjects(p_data);
            const t_data = await getTechs();
            setTechs(t_data);
            const c_data = await getCertificate();
            setCertificates(c_data);
        }
        fetchData();
    }, []);
    console.log(certificates);
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
                certificates.map((certificate) => (
                    <div className="card-item-cer" key={certificate.id}>
                        <img src={`/${certificate.img}`} alt={certificate.title} />
                        <h3>{certificate.title}</h3>
                        <p>Points achieved : {certificate.core}</p>
                        <p>{certificate.date}</p>
                        <div className="card-item-links-cer card-item-links">
                            <a
                                href={certificate.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Authentication <i className="fa-solid fa-link"></i>
                            </a>
                        </div>
                    </div>
                ))
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
