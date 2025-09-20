import '../App.css'
import Background from '../components/background';
import Navbar from './../components/navbar';
const HomePage = () => (
    <div className="home" id="home">
        <div className="home-container">
            <div className="home-content" >
                <span data-anim="zoom-in" data-anim-delay="0.2s" > <i className="fa-solid fa-graduation-cap"></i> IT student </span>
                <h1 data-anim="slide-left" data-anim-delay="0.1s"> <i class="fa-solid fa-wand-magic-sparkles"></i>Software<br /><p className='highlight-text'>Engineer</p></h1>
                <h4 className='h-typing-text'>A site that reflects my passion for programming and the stories that define me ✨</h4>
                <p data-anim="slide-left" data-anim-delay="0.4s">
                    Welcome to my personal portfolio — a creative space where I share my projects, skills,
                    and growth journey in Software Engineering 🚀.
                    Beyond the code, it’s also a story of curiosity, persistence, and passion for building things
                    that make life easier ✨.
                    Take a look around and discover what I’ve been working on!
                </p>

                <ul className="skills" data-anim="slide-left" data-anim-delay="0.5s">
                    <li className="skill">React</li>
                    <li className="skill">Node.js</li>
                    <li className="skill">Javascript</li>
                    <li className="skill">Html/CSS</li>
                </ul>
                <a href='#portofolio' data-anim="slide-right" data-anim-delay="0.1s" className='h-btn'>Project <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                <a href='#contact' data-anim="slide-right" data-anim-delay="0.1s" className='h-btn'>Contact <i className="fa-solid fa-envelope"></i></a>
                <ul className="h-links" data-anim="slide-right" data-anim-delay="0.1s">
                    <li className='h-link'><a href="https://github.com/ltd9605" target="_blank" ><i className="fa-brands fa-github" ></i></a></li>
                    <li className='h-link'><a href="https://www.facebook.com/le.tien.duc.9605" target="_blank" ><i className="fa-brands fa-facebook"></i></a></li>
                    <li className='h-link'><a href="mailto:ltd9605@gmail.com" target="_blank"><i className="fa-solid fa-at"></i></a></li>
                </ul>
            </div>
            <div className="home-icon" data-anim="slide-right">
                <img src="../public/icon.gif" alt="" />
            </div>
        </div>
    </div>
);
export default HomePage;