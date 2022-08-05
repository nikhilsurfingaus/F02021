import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Drivers from './components/pages/Drivers';
import Stats from './components/pages/Stats';
import Quiz from './components/pages/Quiz';
import ChampionsCorner from './components/pages/ChampionsCorner';
import SeasonReview from './components/pages/SeasonReview';
// Did some change

function App() {
    return ( 
      <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/season-review" component={SeasonReview} />
          <Route path='/drivers' component={Drivers} />
          <Route path='/stats' component={Stats} />
          <Route path='/quiz' component={Quiz} />
          <Route path='/champions-corner' component={ChampionsCorner} />
        </Switch>
      </Router>
      </>
    );
}

export default App;