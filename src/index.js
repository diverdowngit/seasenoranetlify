import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom"
import './index.css';
import "typeface-raleway"
import Home from "./pages/home"
import About from "./pages/about"
import Post from "./pages/post"
import NotFound from "./pages/notfound"
import Admin from './pages/content/admin';
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path='/admin'>
          <Admin />
        </Route>
            <Route exact path="/about" component={About} />
            <Route exact path="/404" component={NotFound} />
            <Route exact path="/post/:id" render={props => <Post {...props} />} />
        </div>
    </Router>, 
    document.getElementById('root')
);

