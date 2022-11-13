import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Movies from "./Movies";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class Catalog extends Component {
    constructor() {
        super();
        this.state = {
            searchResult: [],
        };
    }
    getUserBudget = () => {
        const id = this.props.userId;
        const user = this.props.users.find((user) => user.id.toString() === id);
        return user.budget;
    };
    getUserRentedMovies = () => {
        const id = this.props.userId;
        const user = this.props.users.find((user) => user.id.toString() === id);
        return user.rentedMovies;
    };
    rentMovie = (movieId) => {
        this.props.rentMovie(this.props.userId, movieId);
    };
    unrentMovie = (movieId) => {
        this.props.unrentMovie(this.props.userId, movieId);
    };
    updateSearchResult = (searchResult) => {
        this.setState({
            searchResult: searchResult,
        });
    };
    getSearchResult = () => {
        if (this.state.searchResult.length === 0) {
            return this.props.movies;
        }
        return this.state.searchResult;
    };
    render() {
        return (
            <Container>
                <Row className="m-4">
                    <Col className="d-flex justify-content-start">
                        <Search
                            movies={this.props.movies}
                            updateSearchResult={this.updateSearchResult}
                        ></Search>
                    </Col>
                    {this.props.userId ? (
                        <Col className="d-flex justify-content-end">
                            <h4>budget: {this.getUserBudget()}</h4>
                        </Col>
                    ) : null}
                </Row>
                {this.props.userId ? (
                    <Row className="m-4">
                        <div>
                            <h2 className="d-flex justify-content-start">
                                Rented
                            </h2>
                            <Movies
                                userId={this.props.userId}
                                movies={this.getUserRentedMovies()}
                                rentMovie={this.rentMovie}
                                unrentMovie={this.unrentMovie}
                            ></Movies>
                        </div>
                    </Row>
                ) : null}
                <Row className="m-4">
                    <h2 className="d-flex justify-content-start ml-4">
                        Catalog
                    </h2>
                    <Movies
                        userId={this.props.userId}
                        movies={this.getSearchResult()}
                        rentMovie={this.rentMovie}
                        unrentMovie={this.unrentMovie}
                    ></Movies>
                </Row>
            </Container>
        );
    }
}

export default Catalog;
