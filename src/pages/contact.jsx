import '../App.css';
import { getComments } from '../components/getapi';
import { useState, useEffect } from 'react';

const Contact = () => {
    // state cho comments
    const [commentList, setCommentList] = useState([]);
    const [cmtName, setCmtName] = useState("");
    const [cmtMessage, setCmtMessage] = useState("");

    // state cho message form
    const [msgName, setMsgName] = useState("");
    const [msgEmail, setMsgEmail] = useState("");
    const [msgContent, setMsgContent] = useState("");
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const data = await getComments();
                setCommentList(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchComments();
    }, []);


    // ✅ Hàm xử lý gửi "Message" (dùng mailto)
    const handleMessage = (e) => {
        e.preventDefault();
        if (!msgName.trim() || !msgEmail.trim() || !msgContent.trim()) return;

        const subject = encodeURIComponent(`Liên hệ từ ${msgName}`);
        const body = encodeURIComponent(
            `Tên: ${msgName}\nEmail: ${msgEmail}\n\nNội dung:\n${msgContent}`
        );

        window.location.href = `mailto:ltd9605@gmail.com?subject=${subject}&body=${body}`;

        // reset input
        setMsgName("");
        setMsgEmail("");
        setMsgContent("");
    };
    return (
        <div className="contact" id="contact">
            <div className="contact-container">
                <h1 data-anim="zoom-in">Contact</h1>
                <p data-anim="zoom-in">
                    Got a question? Send me a message, and I’ll respond promptly.
                </p>
                <div className="contact-form">
                    {/* --- FORM SEND MESSAGE --- */}
                    <div className="mess-form" data-anim="slide-left">
                        <h2>
                            Get in touch <i className="fa-solid fa-circle-nodes"></i>
                        </h2>
                        <p>Have a question? Let’s talk about it together!</p>
                        <form
                            onSubmit={handleMessage}
                            data-anim="slide-left"
                            data-anim-delay="0.1s"
                        >
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                value={msgName}
                                onChange={(e) => setMsgName(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                                value={msgEmail}
                                onChange={(e) => setMsgEmail(e.target.value)}
                            />
                            <br />
                            <textarea
                                placeholder="Your Message"
                                required
                                value={msgContent}
                                onChange={(e) => setMsgContent(e.target.value)}
                            ></textarea>
                            <br />
                            <button className="contact-btn" type="submit">
                                <i className="fa-solid fa-square-arrow-up-right"></i> Send
                                Message
                            </button>
                        </form>

                        <h2>Connect with me</h2>
                        <div
                            className="parent"
                            data-anim="slide-right"
                            data-anim-delay="0.1s"
                        >
                            <a className="div1">
                                <i className="fa-brands fa-facebook"></i> Facebook <br />
                                <span>Lê Tiến Đức</span>
                            </a>
                            <a className="div2">
                                <i className="fa-brands fa-square-github"></i> Github <br />{" "}
                                <span>ltd9605</span>
                            </a>
                            <a className="div3">
                                <i className="fa-brands fa-instagram"></i> Instagram <br />{" "}
                                <span>@tien_duc0906</span>
                            </a>
                            <a className="div4">
                                <i className="fa-regular fa-envelope"></i> Gmail <br />{" "}
                                <span>ltd9605@gmail.com</span>
                            </a>
                            <a className="div5">
                                <i className="fa-brands fa-tiktok"></i> Tiktok <br />{" "}
                                <span>tienduc_9605</span>
                            </a>
                        </div>
                    </div>

                    {/* --- FORM COMMENTS --- */}
                    <div className="cmt-container" data-anim="slide-right">
                        <div className="cmt-form">
                            <h1>
                                <i className="fa-solid fa-message"></i> Comments
                            </h1>
                            <form data-anim="zoom-in" data-anim-delay="0.1s">
                                <label>Name *</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    value={cmtName}
                                    onChange={(e) => setCmtName(e.target.value)}
                                />
                                <label>Message *</label>
                                <textarea
                                    placeholder="Write your message here..."
                                    required
                                    value={cmtMessage}
                                    onChange={(e) => setCmtMessage(e.target.value)}
                                ></textarea>
                                <br />
                                <button className="contact-btn" type="submit">
                                    <i className="fa-solid fa-square-arrow-up-right"></i> Post your
                                    comment
                                </button>
                            </form>
                        </div>

                        {/* Danh sách comment */}
                        <div className="coments">
                            <div className="coments">
                                {commentList.map((comment, index) => (
                                    <div className="cmt" key={index} data-anim="zoom-in">
                                        <h3>
                                            <i className="fa-solid fa-message"></i> {comment.name}
                                        </h3>
                                        <p>{comment.message}</p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
