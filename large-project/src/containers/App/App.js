import React, { Component } from 'react';
import $ from 'jquery';
import Movies from '../Movies/movies';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
        movies: [],
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let baseUrl = "http://www.omdbapi.com/?s=";
    let parameters = "&y=&plot=short&r=json&type=movie"
    let input = $('#searchMovieInput').val();
    let searchQuery = input.replace(" ", "+");
    let requestUrl = baseUrl + searchQuery + parameters;
    
    $.get(requestUrl)
        .then(response => {
          if (response.Response === "True") {
            this.setState ({
              movies: response.Search,
              results: true
            })
            console.log(response.Search);
          } 
          else if (response.Response === "False"){
            console.log("No results were found.")
            console.log(this.state.movies);
          }
    });
  }

  render() {
    return (
      <div>
        <h1>OMDb API</h1>
        <form className="form-horizontal">
            <div className="form-group form-group-lg">
              <div className="col-md-8">
                <input className="form-control" type="text" id="searchMovieInput" placeholder="Welcome to our movie database."/>
                <button onClick={this.handleClick} type="button" className="btn btn-danger">Search</button>
              </div>
            </div> 
        </form>
        <Movies movies={this.state.movies} results={this.state.results}/>
      </div>
    );
  }
}
