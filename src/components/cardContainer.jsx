import projects from "./projects";
import React from 'react';
import techImg from "./techPath-img";
import '../App.css';
const CardContainer = ({ activeTab }) => {
    return (
        <div className="card-container" >
            {activeTab === "projects" &&
                projects.map((project) => (
                    <div className="card-item" key={project.id} >
                        <img src={project.img} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="card-item-links">
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github <i class="fa-solid fa-link"></i>
                            </a>
                            <a
                            >
                                Details <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                ))}

            {activeTab === "certificates" && (
                <div className="card-item">
                    <h3>Certificates</h3>
                    <p>This is where your certificates will be displayed.</p>
                </div>
            )}

            {activeTab === "techskills" && (
                techImg.map((tech) => (
                    <div className="card-item tech-item" key={tech.id}>
                        <img src={tech.img} alt={tech.title} />
                    </div>
                ))
            )}
        </div>
    );
};

export default CardContainer;
