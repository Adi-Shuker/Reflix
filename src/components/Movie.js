import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { BsFillDashCircleFill, BsFillPlusCircleFill } from "react-icons/bs";
import "./Style.css";

class MovieCard extends Component {
    rentMovie = () => {
        const movieId = this.props.imgId;
        this.props.rentMovie(movieId);
    };
    unrentMovie = () => {
        const movieId = this.props.imgId;
        this.props.unrentMovie(movieId);
    };
    render() {
        return (
            <Card className="m-2 movie-card" style={{ width: "18rem" }}>
                <Link className="movie-img" to={`/movies/${this.props.imgId}`}>
                    <Card.Img
                        src={this.props.img}
                        style={{ height: "23rem" }}
                    />
                </Link>
                {this.props.userId ? (
                    this.props.isRented ? (
                        <BsFillDashCircleFill
                            onClick={this.unrentMovie}
                            size={35}
                            className="top-right-icon"
                        />
                    ) : (
                        <BsFillPlusCircleFill
                            onClick={this.rentMovie}
                            size={35}
                            className="top-right-icon"
                        />
                    )
                ) : null}
            </Card>
        );
    }
}

export default MovieCard;
