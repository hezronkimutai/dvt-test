import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Artist from './components/Artist';
import Artists from './components/Artists';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import { AppContext, fetchData } from './utils';

import './App.css';

const App = (props) => {
  const [searchTerm, setSearchTerm] = useState('eminem');
  const [data, setData] = useState({});

  const initialState = { searchTerm, setSearchTerm, data, setData };

  useEffect(() => {
    fetchData(searchTerm, setData);
  }, []);

  return (
    <AppContext.Provider value={initialState}>
      <div className="App">
        <Router >
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Artists data={data} {...props} />} />
            <Route exact path="/:artistId" element={<Artist {...props} />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  )
}

export default App;
