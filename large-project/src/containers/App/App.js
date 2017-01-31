import React, { Component } from 'react';
import Movies from '../Movies/movies';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>OMDb API</h1>
        <form className="form-horizontal">
            <div className="form-group form-group-lg">
              <div className="col-md-8">
                <input className="form-control" type="text" id="formGroupInputLarge" placeholder="Welcome to our movie database."/>
                <button type="button" className="btn btn-danger">Search</button>
              </div>
            </div>
        </form>
        <Movies />
      </div>
    );
  }
}
