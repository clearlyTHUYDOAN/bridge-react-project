import React, { Component } from 'react';

const Movies = (props) => (
    <div>
        <h3>Search Results</h3>
        <ul>
            {props.movies.map((movie, index) => 
                <li key={index}>{movie.Title} </li>
            )}
        </ul>
    </div>)

export default Movies;


