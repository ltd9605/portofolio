import '../App.css'
import Background from './../components/background';
const WelcomePage = () => (
    <div className='container'>
        <ul className="icons " data-anim="zoom-in" >
            <li className='icon' ><i class="fa-solid fa-code"></i></li>
            <li className='icon' ><i class="fa-regular fa-user"></i></li>
            <li className='icon' ><i class="fa-brands fa-github"></i></li>
        </ul>
        <div className="content" data-anim="zoom-in">
            <h1  >
                Welcome to my
                <br />
                <strong className="highlight-text" >Portofolio Website</strong>
            </h1>

            <div className="link" data-anim="zoom-in"><span className="typing-text" > www.ltd.com </span></div>
        </div>
    </div>

);
export default WelcomePage;