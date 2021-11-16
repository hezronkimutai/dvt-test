import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Artist from './components/Artist';
import Artists from './components/Artists'

import './App.css';



const App = () => {
  return (

    <Router>
      <Switch>

        <Route path="/" component={Artists} />
        {/* <Route exact path="/:artistId" component={Artist} />
        <Route exact path="/" component={NavBar} />
        <Route path="/page-1" component={PageOne} />
        <Route path="/page-2" component={PageTwo} /> */}
      </Switch>
    </Router>
  )
}

export default App;
