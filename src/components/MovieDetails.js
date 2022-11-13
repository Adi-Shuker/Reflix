import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class MovieDetails extends Component {
    render() {
        const movie = this.props.movies.find((movie) => {
            return movie.id.toString() === this.props.match.params.id;
        });
        return (
            <Container>
                <Row className="justify-content-center m-4">
                    <Card style={{ width: "70rem" }}>
                        <Row className="no-gutters">
                            <Col md={5} lg={5}>
                                <Card.Img variant="top" src={movie.img} />
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>{movie.year}</Card.Text>
                                    <Card.Text>{movie.descrShort}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </Container>
        );
    }
}

export default MovieDetails;
