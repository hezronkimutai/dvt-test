import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../utils';

function Artists() {
  const { data } = React.useContext(AppContext);
  const navigate = useNavigate();

  const handleGetDetails = (e, artist) => {
    e.preventDefault();
    navigate(`/${artist.id}`, { state: artist });
  }

  return (
    <>
      <div className="card-container">
        {data && data.artists
          ? data.artists.map(artist => (
            <button onClick={(e) => handleGetDetails(e, artist)} className="card">
              <img src={artist.picture_xl} />
              <p className="card-text"><b>Name :</b>{artist.name}</p>
              <p className="card-text"><b>Fans :</b> {artist.nb_fan}</p>
              <p className="card-text"><b>Albums :</b> {artist.nb_album}</p>
            </button>))
          : <h2>Loading....</h2>}
      </div>
    </>
  );
}


export default Artists;
