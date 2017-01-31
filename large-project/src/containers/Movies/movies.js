import React, { Component } from 'react';
import $ from 'jquery';

export default class Movies extends Component {

    state = {
        movies: [],
    }

    componentDidMount() {
        $.get('http://www.omdbapi.com/?s=harry+potter&y=&plot=short&r=json&type=movie')
        .then(response => {
            // console.log(response.Search);
        this.setState ({
            movies: response.Search
        })
            console.log(this.state.movies);
        });
    }

    render() {
        return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {this.state.movies.map((movie, index) => 
                    <li key={index}>{movie.Title}</li>
                )}
            </ul>
        </div>)
    }
}

