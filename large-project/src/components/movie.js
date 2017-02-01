import React, { Component } from 'react';
import $ from 'jquery';

export default class Movie extends Component {
    constructor() {
        super();
        
        this.state = {
            movie: ""
        }
    }

    componentDidMount() {
        // console.log(this.props.params);
        // console.log(this.props.params.imdbID);

        // http://www.omdbapi.com/?i=tt0086197&plot=full&r=json

        let baseUrl = "http://www.omdbapi.com/?i=";
        let parameters = "&plot=full&r=json";
        let searchQuery = (this.props.params.imdbID);
        let requestUrl = baseUrl + searchQuery + parameters;

        $.get(requestUrl)
        .then(response => {
            // console.log(response);
            this.setState ({
              movie: response
            })
            console.log(this.state.movie);
        })
    }

    render() {
        const { movie } = this.state;

        return (
        <div className="Movie">
            <h3>{movie.Title}</h3>
            <img src={`${movie.Poster}`} role="presentation" className="moviePoster" />
            <p>{movie.Plot} ({movie.Year})</p>
        </div>)
    }
}

// Note:
// It is not mandatory for all component logic to be in one component. Let logic occur where it makes sense.







// const Movie = (props) => (
//     <div>
//         <h3>Movie Details:</h3>
//         <p>Poster</p>
//         <p>Title</p>
//         <p>Type</p>
//         <p>Year</p>
//         <p>imdbID</p>
//     </div>
// )

// export default Movie;