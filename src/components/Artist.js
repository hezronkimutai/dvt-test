import { useLocation, useNavigate } from "react-router-dom";

function Artist() {
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;

  const handleGoBack = () => {
    navigate("/");
  }
  const tracks = state.tracks.slice(0, 5);

  return (
    <>
      <button onClick={handleGoBack}>Back</button>
      <div className="artist-card-container">
        <div>
          <img style={{ maxWidth: 320 }} src={state.picture_xl} />
          <section className="artist-details">
            <h3>{state.name}</h3>
            <h3>{state.nb_fan} Fans</h3>
            <h3>{state.nb_album} Albums</h3>
          </section>
        </div>
        <ol>{tracks.map(track => (
          <li>
            <span>{track.title}</span>
            <span>{track.rank}</span>
          </li>)
        )}</ol>
      </div>
      <h2>Albums</h2>
      <div className="albums">
        {tracks.map(track => (
          <div className="card">
            <h3>{track.album.title}</h3>
            <img style={{ maxWidth: 320 }} src={track.album.cover_xl} />
          </div>)
        )}</div>
    </>
  );
}

export default Artist;
