import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './nav';
import Todo from './Todo';
import Home from './Home'


function App(){
    return (
<Router>
<Navbar/>
<Switch>

    <Route path="/todo" component={Todo}/>
    <Route path="/" exact component={Home}/>
    </Switch>
   </Router>


      );
  }

export default App;
