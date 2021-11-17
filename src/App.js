import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Artist from './components/Artist';
import Artists from './components/Artists'

import './App.css';



const App = (props) => {

  return (
    <Router >
      <Routes>
        <Route path="/" exact element={<Artists {...props} />} />
        <Route exact path="/:artistId" element={<Artist {...props} />} />
      </Routes>
    </Router>
  )
}

export default App;
