import { useState } from "react";
import "../App.css";

const Navbar = () => {
    const [active, setActive] = useState("home");

    return (
        <nav>
            <div className="nav-logo">S1vester</div>
            <div className="nav-list">
                <ul className="list">
                    <li>
                        <a
                            href="#home"
                            className={active === "home" ? "active" : ""}
                            onClick={() => setActive("home")}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={active === "about" ? "active" : ""}
                            onClick={() => setActive("about")}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#portofolio"
                            className={active === "portofolio" ? "active" : ""}
                            onClick={() => setActive("portofolio")}
                        >
                            Portofolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={active === "contact" ? "active" : ""}
                            onClick={() => setActive("contact")}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
