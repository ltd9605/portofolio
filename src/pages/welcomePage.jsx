import '../App.css'
import Background from './../components/background';
const WelcomePage = () => (
    <div className='container'>
        <Background />
        <ul className="icons">
            <li className='icon'><i class="fa-solid fa-code"></i></li>
            <li className='icon'><i class="fa-regular fa-user"></i></li>
            <li className='icon'><i class="fa-brands fa-github"></i></li>
        </ul>
        <div className="content">
            <h1>
                {"Welcome to my ".split('').map((char, i) => (
                    <span
                        key={i}
                        className="slideIn-text"
                        style={{ animationDelay: `${i * 0.05}s` }}
                    >
                        {char === ' ' ? '\u00A0' : char} { }
                    </span>
                ))}
                <br />
                <strong id='text-no-1' className="highlight-text">Portofolio Website</strong>
            </h1>

            <div className="link"><span className="typing-text"> www.ltd.com </span></div>
        </div>
    </div>

);
export default WelcomePage;