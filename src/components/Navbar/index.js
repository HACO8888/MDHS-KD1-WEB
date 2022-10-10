import React from "react";
import './index.css';
import logo from '../../logo.svg';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function login() {
    alert("功能開發中尚不可使用")
}

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="title1">
                    <img alt="" src={logo} width="50" height="50" className="d-inline-block align-top" />
                    {' '}
                    MDHS K1D1
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">首頁</Nav.Link>
                        <Nav.Link href="/course">班級課表 <Badge bg="danger">New</Badge></Nav.Link>
                        <Nav.Link href="/people">人物趣事 <Badge bg="primary">Beta</Badge></Nav.Link>
                        <Nav.Link href="/note">班級記事 <Badge bg="secondary">Dev</Badge></Nav.Link>
                        <Nav.Link href="/test">測試頁面</Nav.Link>
                    </Nav>
                    <Nav className="d-flex">
                        <Nav.Link onClick={login}>登入</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <nav class="bg-gray-800 px-4 py-3">
        //     <div class="flex justify-between item-center">
        //         <a href="#">
        //             <img width="50" src="/logo192.png" alt="logo" />
        //         </a>
        //         <div class="hidden md:flex gap-2">
        //             <a href="#" class="bg-gray-900 text-white px-5 py-3 rounded-md">
        //                 Dashboard
        //             </a>
        //             <a href="#" class="text-white px-5 py-3 rounded-md hover:bg-white/5">
        //                 Team
        //             </a>
        //             <a href="#" class="text-white px-5 py-3 rounded-md hover:bg-white/5">
        //                 Project
        //             </a>
        //             <a href="#" class="text-white px-5 py-3 rounded-md hover:bg-white/5">
        //                 Calendar
        //             </a>
        //         </div>
        //         <div class="flex gap-4">
        //             <a href="#" class="text-gray-400 py-3 px-2 hover:text-white">
        //                 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24"
        //                     height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
        //                     stroke-linecap="round" stroke-linejoin="round">
        //                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        //                     <circle cx="10" cy="10" r="7"></circle>
        //                     <line x1="21" y1="21" x2="15" y2="15"></line>
        //                 </svg>
        //             </a>
        //             <a href="#" class="text-gray-400 py-3 px-2 hover:text-white">
        //                 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="24"
        //                     height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
        //                     stroke-linecap="round" stroke-linejoin="round">
        //                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        //                     <path
        //                         d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6">
        //                     </path>
        //                     <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
        //                 </svg>
        //             </a>
        //             <button data-mobile-menu class="text-gray-400 py-3 px-2 hover:text-gray-200 block md:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24"
        //                     height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
        //                     stroke-linecap="round" stroke-linejoin="round">
        //                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        //                     <line x1="4" y1="6" x2="20" y2="6"></line>
        //                     <line x1="4" y1="12" x2="20" y2="12"></line>
        //                     <line x1="4" y1="18" x2="20" y2="18"></line>
        //                 </svg>
        //             </button>
        //             <a href="#" class="block bg-blue-600 text-gray-200 px-5 py-3 rounded-md hover:bg-blue-600/80">
        //                 Sign In
        //             </a>
        //         </div>
        //     </div>
        //     <div class="hidden" id="mobile-menu">
        //         <div class="flex flex-col gap-1 py-3">
        //             <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md font-medium">
        //                 Dashboard
        //             </a>
        //             <a href="#" class="text-gray-300 hover:bg-white/5 px-3 py-2 rounded-md">
        //                 Team
        //             </a>
        //             <a href="#" class="text-gray-300 hover:bg-white/5 px-3 py-2 rounded-md">
        //                 Project
        //             </a>
        //             <a href="#" class="text-gray-300 hover:bg-white/5 px-3 py-2 rounded-md">
        //                 Calendar
        //             </a>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default NavBar;