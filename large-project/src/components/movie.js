import React, { Component } from 'react';

export default class Movie extends Component {
    render() {
        return (
        <div>
            <h3>Movie Details:</h3>
            <p>Poster</p>
            <p>Title</p>
            <p>Type</p>
            <p>Year</p>
            <p>imdbID</p>
        </div>)
    }
}

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