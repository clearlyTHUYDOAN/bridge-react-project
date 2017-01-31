import React from 'react';
import { Link } from 'react-router';
// Ternary is not working properly when I add it. Always tries to run second option?

const Movies = (props) => (
    <div>
        <h3>Search Results</h3>
        <ul>
            {props.movies.length !== 0 ? props.movies.map((movie, index) => 
                <Link onClick={(eventToIgnore) => props.click(movie)} to="/movie"  key={index}><li>{movie.Title}</li></Link>
            ) : <li>Results have yet been found but we're optimistic for next time.</li>}
        </ul>
    </div>)

export default Movies;


