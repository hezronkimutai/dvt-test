import axios from 'axios';
import { useState } from 'react';

const url = 'http://localhost:8080/';

function App({ history }) {

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  }

  const fetchData = (search) => {
    axios.post(url, { searchTerm: search }).then(res => {
      setData(res.data);
    });
  }
  const handleSearch = () => {
    fetchData(searchTerm);
  }

  const handleGetDetails = (e, artist) => {
    fetchData(artist.name);
  }

  return (
    <div className="App">
      <input type='text' onChange={handleChange} />
      <button onClick={handleSearch}>Click</button>
      <div className="card-container">
        {data.artists && data.artists.map(artist => (
          <button onClick={(e) => handleGetDetails(e, artist)} className="card">
            <img src={artist.picture} />
            <p>{artist.nb_fan}</p>
            <p>{artist.nb_album}</p>
          </button>))}

      </div>
    </div>
  );
}

export default App;
