import React, { Component } from 'react';
import { Link } from 'react-router';
// Q. How to have it display nothing when no search has been performed?
// a) Some condition linked to a different state change?

export default class Movies extends Component {
    render() {
        return (<div>
        <h3>Search Results</h3>
        <ul>
            {this.props.movies.length !== 0 ? this.props.movies.map((movie, index) => 
                <Link onClick={(eventToIgnore) => this.props.click(movie)} to={`movie/${movie.imdbID}`} key={index}><li>{movie.Title}</li></Link>
            ) : <li>Results have yet been found but we're optimistic for next time.</li>}
        </ul>
    </div>)
    }
}

// const Movies = (props) => (
//     <div>
//         <h3>Search Results</h3>
//         <ul>
//             {props.movies.length !== 0 ? props.movies.map((movie, index) => 
//                 <Link onClick={(eventToIgnore) => props.click(movie)} to="/movie" key={index}><li>{movie.Title}</li></Link>
//             ) : <li>Results have yet been found but we're optimistic for next time.</li>}
//         </ul>
//     </div>)

// export default Movies;


