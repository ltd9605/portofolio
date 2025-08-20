import React from 'react';
import { useState } from 'react';
import Background from '../components/background';
import Navbar from '../components/navbar';
import CardContainer from '../components/cardContainer';
import '../App.css';
const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("projects");
    return (
        <div className="portofolio" id="portofolio">
            <Background />
            <Navbar />
            <div className="portfolio-container">
                <h1>My Portfolio</h1>
                <p>You can find all of my completed projects here</p>
                <div className="tab-card">
                    <div
                        className={`tab ${activeTab === "projects" ? "active" : ""}`}
                        onClick={() => setActiveTab("projects")}
                    >
                        <i className="fa-solid fa-code"></i> <br />Projects
                    </div>
                    <div
                        className={`tab ${activeTab === "certificates" ? "active" : ""}`}
                        onClick={() => setActiveTab("certificates")}
                    >
                        <i className="fa-solid fa-award"></i> <br />Certificates
                    </div>
                    <div
                        className={`tab ${activeTab === "techskills" ? "active" : ""}`}
                        onClick={() => setActiveTab("techskills")}
                    >
                        <i className="fa-solid fa-microchip"></i> <br />Techskills
                    </div>
                </div>
                <CardContainer activeTab={activeTab} />
            </div>
        </div>
    );
};

export default Portfolio;