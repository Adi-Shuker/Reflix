import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchField: "",
        };
    }
    getFilteredMovies = () => {
        if (this.state.searchField === "") {
            return this.props.movies;
        }
        return this.props.movies.filter((movie) => {
            return (
                movie.title
                    .toLowerCase()
                    .includes(this.state.searchField.toLowerCase()) ||
                movie.title
                    .toLowerCase()
                    .includes(this.state.searchField.toLowerCase())
            );
        });
    };
    handleChange = (e) => {
        this.setState({ searchField: e.target.value }, this.searchList);
    };
    searchList = () => {
        this.props.updateSearchResult(this.getFilteredMovies());
    };

    render() {
        return (
            <section className="garamond">
                <div className="pa2">
                    <input
                        className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                        type="search"
                        value={this.state.searchField}
                        placeholder="Search Movie"
                        onChange={this.handleChange}
                    />
                </div>
            </section>
        );
    }
}

export default Search;
