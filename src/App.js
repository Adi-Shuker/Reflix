import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import ReflixNavbar from "./components/ReflixNavbar";
import MovieDetails from "./components/MovieDetails";

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                {
                    id: 0,
                    name: "Merlin",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLA3U8lqPkkkMrPox2OzNyS5d3gpPx-uMlag&usqp=CAU",
                    budget: 5,
                    rentedMovies: [],
                },
                {
                    id: 1,
                    name: "Morgana",
                    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
                    budget: 2000,
                    rentedMovies: [],
                },
                {
                    id: 2,
                    name: "Gandalf",
                    img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",
                    budget: 3000,
                    rentedMovies: [],
                },
                {
                    id: 3,
                    name: "Adi",
                    img: "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg",
                    budget: 4000,
                    rentedMovies: [],
                },
            ],
            movies: [
                {
                    id: 0,
                    isRented: false,
                    title: "Tarzan",
                    year: 1999,
                    img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
                    descrShort:
                        "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out.",
                },
                {
                    id: 1,
                    isRented: false,
                    title: "The Lion King",
                    img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg",
                    year: 1994,
                    descrShort:
                        "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies.",
                },
                {
                    id: 2,
                    isRented: false,
                    title: "Beauty and the Beast",
                    year: 1991,
                    img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg",
                    descrShort:
                        "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself.",
                },
                {
                    id: 3,
                    isRented: false,
                    title: "The Sword in the Stone",
                    year: 1963,
                    img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg",
                    descrShort:
                        "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means.",
                },
                {
                    id: 4,
                    isRented: false,
                    title: "Beauty and the Beast",
                    year: 2016,
                    img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg",
                    descrShort:
                        "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation.",
                },
                {
                    id: 5,
                    isRented: false,
                    title: "DC League of Super-Pets",
                    year: 2016,
                    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4WQTooY6sxpWkv_HHd_ZPi7sA-dWSnuDxYQj5sUCMNr9ttqhy",
                    details:
                        "Krypto the Super-Dog and Superman are inseparable best friends, sharing the same superpowers and fighting crime side by side in Metropolis. However, Krypto must master his own powers for a rescue mission when Superman is kidnapped.",
                },
                {
                    id: 6,
                    isRented: false,
                    title: "Tad",
                    year: 2016,
                    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVoeC-zfFXJmSV68dxlYet1BCaKLN4vZLfhP41KAFlGZ9-cdHM",
                    details:
                        "Construction worker Tad wants to be a famous archaeologist. He gets a chance to look for a lost Inca city in Peru, where the gold was hidden. He meets the professor's cute daughter/assistant. Villains chase them.",
                },
                {
                    id: 7,
                    isRented: false,
                    title: "Extinct",
                    year: 2016,
                    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQLP95T6em7MSBU7Gd93TxDS39Rn-yibISY4FnfbmuBoVaMtGTb",
                    details:
                        "A mysterious portal sends a pair of flummels into the future who discover that their species is extinct. Although while undoing their fate, they find aid in a poodle who has wicked plans of his own.",
                },
                {
                    id: 8,
                    isRented: false,
                    title: "Rabbit Academy: Mission Eggpossible",
                    year: 2016,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhGYBMro9Kdk5KNU5Gkgxg6wmD_cF6oD31o2m4_j9e8yvipnO",
                    details:
                        "At the Rabbit Academy, sneaky rabbit Leo begins working with the foxes to destroy Easter once and for all. Now, Easter rabbits Max, Emmy and their friends must team up to stop him.",
                },
            ],
        };
    }
    rentMovie = (userId, movieId) => {
        const users = [...this.state.users];
        const movies = [...this.state.movies];
        const currUser = users.find((user) => user.id.toString() === userId);
        const userBudget = currUser.budget;
        if (userBudget - 3 < 0) {
            alert("Sorry, you don't have enough budget");
            return;
        }
        const currMovie = movies.find((movie) => movie.id === movieId);
        currMovie.isRented = true;
        currUser.rentedMovies.push(currMovie);
        currUser.budget -= 3;
        this.setState({
            users: users,
            movies: movies,
        });
    };
    unrentMovie = (userId, movieIdToRemove) => {
        const users = [...this.state.users];
        const movies = [...this.state.movies];
        const currUser = users.find((user) => user.id.toString() === userId);
        currUser.rentedMovies = currUser.rentedMovies.filter(
            (movie) => movie.id !== movieIdToRemove
        );
        currUser.budget += 3;
        const currMovie = movies.find((movie) => movie.id === movieIdToRemove);
        currMovie.isRented = false;
        this.setState({
            users: users,
            movies: movies,
        });
    };
    render() {
        return (
            <Router>
                <div className="App">
                    <ReflixNavbar />
                    <div id="home-background"></div>

                    <Route
                        path="/"
                        exact
                        render={() => <Home users={this.state.users} />}
                    />
                    <Route
                        path="/catalog"
                        exact
                        render={() => <Catalog movies={this.state.movies} />}
                    />
                    <Route
                        path="/users/:id/catalog"
                        exact
                        render={({ match }) => (
                            <Catalog
                                userId={match.params.id}
                                users={this.state.users}
                                movies={this.state.movies}
                                rentMovie={this.rentMovie}
                                unrentMovie={this.unrentMovie}
                            />
                        )}
                    />
                    <Route
                        path="/movies/:id"
                        exact
                        render={({ match }) => (
                            <MovieDetails
                                match={match}
                                movies={this.state.movies}
                            />
                        )}
                    />
                </div>
            </Router>
        );
    }
}

export default App;
