import { useLocation } from "react-router-dom";

function Artist() {
  const location = useLocation();

  const { state } = location;

  const tracks = (state && state.tracks && state.tracks.slice(0, 5)) || [];

  return (
    <>
      <div className="artist-card-container">
        <div className="potrait">
          <img className="potrait-img" src={state && state.picture_xl} />
          <section className="artist-details">
            <h3>{state && state.name}</h3>
            <p><b>{state && state.nb_fan}</b> Fans</p>
            <p><b>{state && state.nb_album}</b> Albums</p>
          </section>
        </div>
        <div className="tracks">
          <h1 className="title">Top Five Tracks</h1>
          {tracks.map(track => (
            <div className="track">
              <span>{track.title}</span>
            </div>)
          )}
        </div>
      </div>
      <div className="albums">
        <h1 className="title">Albums</h1>
        {tracks.map(track => (
          <div className="card">
            <h3 className="album-title">{track.album.title}</h3>
            <img src={track.album.cover_xl} />
          </div>)
        )}</div>
    </>
  );
}

export default Artist;
