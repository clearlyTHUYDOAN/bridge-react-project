import React from 'react';
import { Link } from 'react-router';
// Ternary is not working properly when I add it. Always tries to run second option?

const Movies = (props) => (
    <div>
        <h3>Search Results</h3>
        <ul>
            {props.movies.map((movie, index) => 
                <Link to="/movie" key={index}><li>{movie.Title}</li></Link>
            )}
        </ul>
    </div>)

export default Movies;


