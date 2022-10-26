import React from "react";
import { useEffect } from 'react'
import './index.css';

function Footer() {
    useEffect(() => {

    }, []);
    return (
        <>
            <footer className="p-4 bg-gray-600 shadow justify-center md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-600 footer select-none">
                <span className="text-sm text-gray-500 sm:text-center dark:text-white/75">
                    Copyright © {new Date().getFullYear()} MDHS K1D1. All Rights Reserved.
                </span>
            </footer>
        </>
    )
}

export default Footer;
