import '../App.css';
import Background from './../components/background';
const WelcomePage = () => {
    <Background />
    return (
        <div className="welcome-content">
            <ul className="icons" data-anim="zoom-in">
                <li className="icon"><i className="fa-solid fa-code"></i></li>
                <li className="icon"><i className="fa-regular fa-user"></i></li>
                <li className="icon"><i className="fa-brands fa-github"></i></li>
            </ul>

            <div className="content" data-anim="zoom-in">
                <h1>
                    Welcome to my
                    <br />
                    <strong className="highlight-text">Portfolio Website</strong>
                </h1>

                <div className="link" data-anim="zoom-in">
                    <span className="typing-text">https://s1lvester.netlify.app</span>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
