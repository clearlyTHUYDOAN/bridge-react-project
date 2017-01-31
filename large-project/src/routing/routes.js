import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import App from '../containers/App/App';
import Movie from '../components/movie';


export const Routes = () => // you cannot export default a const here. only a class.
  (<Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="movie:imdbID" component={Movie} />
</Router>);

// Rule of thumb: All components that are directly associated with routes -should- be 
// containers, ie, class based components.

// Route based components need to have intelligence...so that any url can be shared.