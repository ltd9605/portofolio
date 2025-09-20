import { useState, useEffect } from 'react';
import '../App.css';
import { getProjects } from "../components/getapi";
const AboutPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getProjects();
            setProjects(data);
        }
        fetchData();
    }, []);

    return (
        <div className="about" id="about">
            <div className="about-container">
                <div className="ab-header" data-anim="zoom-in">
                    <h1>About Me</h1>
                    <p>S1vester is my ingame name</p>
                </div>

                <div className="ab-body">
                    <div className="ab-content" data-anim="slide-left">
                        <h2>Hello, I'm</h2>
                        <h1 className="highlight-text">Le Tien Duc</h1>
                        <p>
                            I’m a Software Engineering student passionate about creating
                            efficient and user-friendly applications, while constantly learning
                            and improving my skills.
                        </p>
                        <a
                            href="/assets/Le-Tien-Duc-ITsupportCV.pdf" // đường dẫn trong public folder
                            download="Le-Tien-Duc-CV.pdf"             // tên file khi download
                            className="ab-btn"
                            data-anim="slide-left"
                            data-anim-delay="0.2s"
                        >
                            <i className="fa-solid fa-file-circle-check"></i> Download CV
                        </a>

                    </div>

                    <div className="ab-img" data-anim="slide-right" data-delay="0.2s">
                        <img src="/avatar-icon.gif" alt="Avatar" />
                    </div>
                </div>

                <div className="ab-ft">
                    <div className="ab-ft-block" data-anim="slide-left">
                        <div className="left-block">
                            <h1><i className="fa-solid fa-code"></i></h1>
                            <h5>TOTAL PROJECTS</h5>
                            <p>All my projects</p>
                        </div>
                        <div className="right-block">
                            <h1>{projects.length}</h1>
                        </div>
                    </div>

                    <div className="ab-ft-block" data-anim="zoom-in" data-anim-delay="0.1s">
                        <div className="left-block">
                            <h1><i className="fa-solid fa-award"></i></h1>
                            <h5>CERTIFICATES</h5>
                            <p>Professional skills validated</p>
                        </div>
                        <div className="right-block">
                            <h1>0</h1>
                        </div>
                    </div>

                    <div className="ab-ft-block" data-anim="slide-right" data-anim-delay="0.2s">
                        <div className="left-block">
                            <h1><i className="fa-solid fa-calendar-days"></i></h1>
                            <h5>EXPERIENCE</h5>
                            <p>Continuous learning journey</p>
                        </div>
                        <div className="right-block">
                            <h1>3</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
