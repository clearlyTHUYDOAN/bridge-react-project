import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import App from '../containers/App/App';
import Movie from '../components/movie';


export const Routes = () => // you cannot export default a const here. only a class.
  (<Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="movie" component={Movie} />
</Router>);