import { useState, useEffect } from "react";
import "../App.css";

const Navbar = () => {
    const [active, setActive] = useState("home");

    // Danh sách section và id tương ứng
    const sections = ["home", "about", "portofolio", "contact"];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            let current = "home"; // default
            for (const section of sections) {
                const elem = document.getElementById(section);
                if (elem) {
                    const offsetTop = elem.offsetTop;
                    const offsetHeight = elem.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        current = section;
                    }
                }
            }
            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // call once to set active on load

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav>
            <div className="nav-logo">S1vester</div>
            <div className="nav-list">
                <ul className="list">
                    {sections.map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                className={active === section ? "active" : ""}
                                onClick={() => setActive(section)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
