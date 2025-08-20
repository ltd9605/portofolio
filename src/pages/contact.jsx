import '../App.css';
import Background from '../components/background';
import Navbar from '../components/navbar';
import comments from '../components/coments';
const Contact = () => {
    return (

        <div className='contact' id='contact' >
            <div className="contact-container">
                <h1 data-anim="zoom-in">Contact</h1>
                <p data-anim="zoom-in" >Got a question? Send me a message, and I’ll respond promptly.</p>
                <div className="contact-form">
                    <div className="mess-form" data-anim="slide-left" >
                        <h2 >Get in touch <i class="fa-solid fa-circle-nodes"></i></h2>
                        <p>Have a question? Let’s talk about it together!</p>
                        <form data-anim="slide-left" data-anim-delay="0.1s">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required /><br />
                            <textarea placeholder="Your Message" required></textarea><br />
                            <button className='contact-btn' type="submit"><i class="fa-solid fa-square-arrow-up-right"></i> Send Message</button>
                        </form>
                        <h2>Connect with me</h2>
                        <div className="parent" data-anim="slide-right" data-anim-delay="0.1s">
                            <a className="div1"><i class="fa-brands fa-facebook"></i> Facebook <br /><span>Lê Tiến Đức</span></a>
                            <a className="div2"><i class="fa-brands fa-square-github"></i> Github <br /> <span>ltd9605</span></a>
                            <a className="div3"><i class="fa-brands fa-instagram"></i> Instagram <br /> <span>@tien_duc0906</span></a>
                            <a className="div4"><i class="fa-regular fa-envelope"></i> Gmail <br /> <span>ltd9605@gmail.com</span></a>
                            <a className="div5"><i class="fa-brands fa-tiktok"></i> Tiktok <br /> <span>tienduc_9605</span></a>
                        </div>
                    </div>
                    <div className="cmt-container" data-anim="slide-right" >
                        <div className="cmt-form">
                            <h1><i class="fa-solid fa-message"></i> Comments</h1>
                            <form data-anim="zoom-in" data-anim-delay="0.1s">
                                <label htmlFor="">Name *</label>
                                <input type="text" placeholder="Enter your name" required />
                                <label htmlFor="">Message *</label>
                                <textarea placeholder="Write your message here..." required></textarea><br />
                                <button className='contact-btn' type="submit"> <i class="fa-solid fa-square-arrow-up-right"></i>  Post your comment</button>
                            </form>
                        </div>
                        <div className="coments">
                            {comments.map((comment, index) => (
                                <div className="cmt" key={index} data-anim="zoom-in" >
                                    <h3><i class="fa-solid fa-message"></i> {comment.name}</h3> <br />
                                    <p>{comment.message}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;