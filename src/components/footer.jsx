import React from "react";

const Footer = () => (
    <footer style={{
        background: "#2222221d",
        color: "#fff",
        padding: "24px 0",
        textAlign: "center",
    }}>
        <div>
            <p>&copy; {new Date().getFullYear()} Le Tien Duc. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;