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
                    隱私權政策
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} MDHS K1D1. All Rights
                        Reserved.
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
                    href="http://fb.com/sudiptob2"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    href="https://www.youtube.com/"
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
