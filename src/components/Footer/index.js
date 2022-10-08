import React from "react";
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    <br />
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 2 }}>
                        Copyright © {new Date().getFullYear()} MDHS K1D1. All Rights Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/MRHACO/MDHS-K1D1-WEB"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.instagram.com/mdhs_k1d1/"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    href="https://discord.gg/q6XwvtXcxV"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faDiscord} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
