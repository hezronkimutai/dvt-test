import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const url = 'https://shrouded-hamlet-74185.herokuapp.com/';

function Artists() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('eminem');
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData(searchTerm);
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
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
    e.preventDefault();
    navigate(`/${artist.id}`, { state: artist });
  }

  return (
    <>
      <div className="search-box">
        <input className="search-box-input" type='text' value={searchTerm} onChange={handleChange} />
        <button className="search-box-button" onClick={handleSearch}>Search</button>
      </div>
      <div className="card-container">
        {data.artists && data.artists.map(artist => (
          <button onClick={(e) => handleGetDetails(e, artist)} className="card">
            <img src={artist.picture_xl} />
            <p className="card-text"><b>Name :</b>{artist.name}</p>
            <p className="card-text"><b>Fans :</b> {artist.nb_fan}</p>
            <p className="card-text"><b>Albums :</b> {artist.nb_album}</p>
          </button>))}
      </div>
    </>
  );
}


export default Artists;
