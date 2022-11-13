import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Movie from "./Movie";

class Movies extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {this.props.movies.map((movie) => (
                        <Col key={movie.id}>
                            <Movie
                                imgId={movie.id}
                                userId={this.props.userId}
                                name={movie.name}
                                img={movie.img}
                                isRented={movie.isRented}
                                rentMovie={this.props.rentMovie}
                                unrentMovie={this.props.unrentMovie}
                            ></Movie>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Movies;
