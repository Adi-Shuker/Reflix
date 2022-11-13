import React, { Component } from "react";
import Container from "react-bootstrap//Container";
import Navbar from "react-bootstrap//Navbar";
import Nav from "react-bootstrap//Nav";
import "bootstrap/dist/css/bootstrap.css";

class ReflixNavbar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/catalog">catalog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default ReflixNavbar;
