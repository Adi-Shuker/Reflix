import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import User from "./User";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as constants from "./constants";

class Home extends Component {
    render() {
        return (
            <Container>
                <div className="justify-content-center">
                    <div className="display-3 m-4">{constants.HomeTitle}</div>
                    <Row>
                        {this.props.users.map((user) => (
                            <Col key={user.id}>
                                <User
                                    id={user.id}
                                    name={user.name}
                                    img={user.img}
                                ></User>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        );
    }
}

export default Home;
