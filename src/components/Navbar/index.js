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
                        <Nav.Link href="/course">班級課表 <Badge bg="danger">NEW</Badge></Nav.Link>
                        <Nav.Link href="/note">班級記事 <Badge bg="secondary">DEV</Badge></Nav.Link>
                        <Nav.Link href="/test">測試頁面</Nav.Link>
                    </Nav>
                    <Nav className="d-flex">
                        <Nav.Link onClick={login}>登入</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;