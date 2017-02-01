import React, { Component } from 'react';
import $ from 'jquery';
import Movies from '../Movies/movies';
// import Movie from '../../components/movie';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
        movies: [],
    }
  
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMovie = this.handleMovie.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    let baseUrl = "http://www.omdbapi.com/?s=";
    let parameters = "&y=&plot=short&r=json&type=movie";
    let input = $('#searchMovieInput').val();
    let searchQuery = input.replace(" ", "+");
    let requestUrl = baseUrl + searchQuery + parameters;
    
    $.get(requestUrl)
        .then(response => {
          if (response.Response === "True") {
            this.setState ({
              movies: response.Search,
            })
            console.log(response.Search);
            $("#searchMovieInput").value = ""; // how to clear form input field after search? this doesn't do anything as of now'
          } 
          else if (response.Response === "False"){
            console.log("No results were found.")
          }
    });
  }

  handleMovie(movie) {
    console.log(movie);
  }

  render() {
    return (
      <div className="App">
        <h1 className="appTitle">OMDb API</h1>
        <form className="form-horizontal">
            <div className="form-group form-group-lg">
              <div className="row">
                <div className="col-md-8">
                  <input className="form-control" type="text" id="searchMovieInput" placeholder="Let's look for a great movie."/>
                </div>
                <div className="col-md-4">
                  <button onClick={this.handleSearch} type="submit" className="btn btn-danger">Search</button>
                </div>
              </div>
            </div> 
        </form>
        <Movies click={this.handleMovie} movies={this.state.movies} results={this.state.results}/>
      </div>
    );
  }
}
