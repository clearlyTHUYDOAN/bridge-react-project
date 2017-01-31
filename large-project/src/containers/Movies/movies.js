import React, { Component } from 'react';
// import $ from 'jquery';

export default class Movies extends Component {

    render() {

        return (
        <div>
            <h3>Search Results</h3>
            <ul>
                {this.props.test.map((movie, index) => 
                    <li key={index}>{movie.Title} </li>
                )}
            </ul>
        </div>)
    }
}

