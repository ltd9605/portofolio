import '../App.css'
import Background from '../components/background';
import Navbar from './../components/navbar';
const HomePage = () => (
    <div className="home" id="home">
        <div className="home-container">
            <div className="home-content" >
                <span data-anim="zoom-in" data-anim-delay="0.2s" > <i className="fa-solid fa-graduation-cap"></i> IT student </span>
                <h1 data-anim="slide-left" data-anim-delay="0.1s"> Frontend<br /><p className='highlight-text'>Developer</p></h1>
                <h4 className='h-typing-text'>A portofolio website coding by react + vite app</h4>
                <p data-anim="slide-left" data-anim-delay="0.4s" >Personal portfolio a place where I showcase my projects, skills, and personal growth journey in the field of Software Engineering.   </p>
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