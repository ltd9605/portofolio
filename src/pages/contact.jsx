import '../App.css';
import Background from '../components/background';
import Navbar from '../components/navbar';
const Contact = () => {
    return (

        <div className='contact' id='contact' >
            <Background />
            <Navbar />
            <div className="contact-container">
                <h1>Contact</h1>
                <p>Got a question? Send me a message, and I’ll respond promptly.</p>
                <div className="contact-form">
                    <div className="mess-form">
                        <h2>Get in touch</h2>
                        <p>Have a question? Let’s talk about it together!</p>
                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required /><br />
                            <textarea placeholder="Your Message" required></textarea><br />
                            <button type="submit">Send Message</button>
                        </form>
                        <h2>Connect with me</h2>
                        <div className="parent">
                            <button className="div1">Facebook</button>
                            <button className="div2">Message</button>
                            <button className="div3">Zalo</button>
                            <button className="div4">Gmail</button>
                            <button className="div5">Phone</button>
                        </div>
                    </div>
                    <div className="cmt-form"></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;