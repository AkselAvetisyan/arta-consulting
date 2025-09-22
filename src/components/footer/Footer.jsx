import React from "react";
import "./styles/footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <section>
                <div className="content">
                    <div className="left">
                        © {new Date().getFullYear()} ARTA Consulting. All rights reserved.
                    </div>

                    <div className="center">
                        <a href="/privacy">Privacy</a>
                        <a href="/terms">Terms</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="right">
                        <div className="gradient-bar" />
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
