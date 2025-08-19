import '../App.css'
import Background from '../components/background';
import Navbar from './../components/navbar';
const HomePage = () => (
    <div className="home" id="home">
        <Background />
        <Navbar />
        <div className="home-container">
            <div className="home-content">
                <span >&#xf19d; IT student</span>
                <h1> Frontend<br /><h2 className='h-highlight-text'>Developer</h2></h1>
                <h4 className='h-typing-text'>A portofolio website coding by react + vite app</h4>
                <p>Personal portfolio a place where I showcase my projects, skills, and personal growth journey in the field of Software Engineering.   </p>
                <ul className="skills">
                    <li className="skill">React</li>
                    <li className="skill">Javascript</li>
                    <li className="skill">Node.Js</li>
                    <li className="skill">Express</li>
                </ul>
                <a href='#' className='h-btn'>Project <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <a href='#' className='h-btn'>Contact <i class="fa-solid fa-envelope"></i></a>
                <ul className="h-links">
                    <li className='h-link'><a href="https://github.com/ltd9605" target="_blank" ><i class="fa-brands fa-github" ></i></a></li>
                    <li className='h-link'><a href="https://www.facebook.com/le.tien.duc.9605" target="_blank" ><i class="fa-brands fa-facebook"></i></a></li>
                    <li className='h-link'><a href="mailto:ltd9605@gmail.com" target="_blank"><i className="fa-solid fa-at"></i></a></li>
                </ul>
            </div>
            <div className="home-icon">
                <img src="../public/icon.gif" alt="" />
            </div>
        </div>
    </div>
);
export default HomePage;