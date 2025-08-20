import Background from "../components/background";
import '../App.css';
import projects from "../components/projects";
const AboutPage = () => (
    <div className="about" id="about">
        <div className="about-container">
            <div className="ab-header" data-anim="zoom-in">
                <h1>About Me</h1>
                <p>S1vester is my ingame name </p>
            </div>
            <div className="ab-body">
                <div className="ab-content" data-anim="slide-left" >
                    <h2>Hello , I"m</h2>
                    <h1 className='highlight-text'>Le Tien Duc</h1>
                    <p>I’m a Software Engineering student passionate about creating efficient and user-friendly applications, while constantly learning and improving my skills.
                    </p>
                    <button className="ab-btn" data-anim="slide-left" data-anim-delay="0.2s"><i class="fa-solid fa-file-circle-check"></i> Download CV</button>
                    <button className="ab-btn" data-anim="slide-left"  ><i class="fa-solid fa-terminal"></i> View my project</button>
                </div>
                <div className="ab-img" data-anim="slide-right" data-delay="0.2s">
                    <img src="../public/avatar-icon.gif" alt="" />
                </div>
            </div>
            <div className="ab-ft">
                <div className="ab-ft-block" data-anim="slide-left">
                    <div className="left-block">
                        <h1><i class="fa-solid fa-code"></i> </h1>
                        <h5>TOTAL PROJECTS</h5>
                        <p>All my projects</p>
                    </div>
                    <div className="right-block">
                        <h1> {Object.keys(projects).length} </h1>
                    </div>
                </div>
                <div className="ab-ft-block" data-anim="zoom-in" data-anim-delay="0.1s">
                    <div className="left-block">
                        <h1><i class="fa-solid fa-award"></i> </h1>
                        <h5>CERTIFICATES</h5>
                        <p>Profestional skills validated</p>
                    </div>
                    <div className="right-block">
                        <h1>0</h1>
                    </div>
                </div>
                <div className="ab-ft-block" data-anim="slide-right" data-anim-delay="0.2s">
                    <div className="left-block">
                        <h1><i class="fa-solid fa-calendar-days"></i> </h1>
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
export default AboutPage;