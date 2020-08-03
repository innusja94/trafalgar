import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

export default class Header1 extends Component {
    render() {
        return (
            <Navbar fixed="top" className="navbar" bg="white" expand="lg">
                <Navbar.Brand className="logo" href="/">
                    <img src='logo1.png' alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#find a doctor">Find a doctor</Nav.Link>
                        <Nav.Link href="#apps">Apps</Nav.Link>
                        <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                        <Nav.Link href="#about us">About us</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}