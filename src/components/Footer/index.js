import React from "react";
import { useEffect } from 'react'
import './index.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDiscord, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    useEffect(() => {

    }, []);
    return (
        // <footer className="footer">
        //     <div className="footer-container">
        //         <div className="item1">
        //             <br />
        //         </div>

        //         <div className="item2">
        //             <span style={{ paddingRight: 2 }}>
        //                 Copyright © {new Date().getFullYear()} MDHS K1D1. All Rights Reserved.
        //             </span>
        //         </div>
        //         <a
        //             href="https://github.com/MRHACO/MDHS-K1D1-WEB"
        //             target="_blank"
        //             className="item3"
        //             rel="noreferrer"
        //         >
        //             <FontAwesomeIcon icon={faGithub} />
        //         </a>
        //         <a
        //             href="https://www.instagram.com/mdhs_k1d1/"
        //             target="_blank"
        //             className="item4"
        //             rel="noreferrer"
        //         >
        //             <FontAwesomeIcon icon={faInstagram} />
        //         </a>
        //         <a
        //             href="https://discord.gg/q6XwvtXcxV"
        //             target="_blank"
        //             className="item5"
        //             rel="noreferrer"
        //         >
        //             <FontAwesomeIcon icon={faDiscord} />
        //         </a>
        //     </div>
        // </footer>
        <>
            <footer className="p-4 bg-gray-600 shadow justify-center md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-600 footer">
                <span className="text-sm text-gray-500 sm:text-center dark:text-white/75">
                    Copyright © {new Date().getFullYear()} MDHS K1D1. All Rights Reserved.
                </span>
            </footer>
        </>
    )
}

export default Footer;
