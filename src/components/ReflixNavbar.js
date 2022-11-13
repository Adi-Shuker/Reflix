import React, { Component } from "react";
import Container from "react-bootstrap//Container";
import Navbar from "react-bootstrap//Navbar";
import Nav from "react-bootstrap//Nav";
import "bootstrap/dist/css/bootstrap.css";
import * as constants from "./constants";
class ReflixNavbar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">{constants.Home}</Nav.Link>
                            <Nav.Link href="/catalog">
                                {constants.Catalog}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default ReflixNavbar;
