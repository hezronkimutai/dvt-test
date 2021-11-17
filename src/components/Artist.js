import { useLocation, useNavigate } from "react-router-dom";

function Artist() {
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;

  const handleGoBack = () => {
    navigate("/");
  }

  return (
    <>
      <button onClick={handleGoBack}>Back</button>
      <div className="card-container">
        <div><img style={{ maxWidth: 320 }} src={state.picture_xl} /></div>
        <ol>{state.tracks.map(track => (
          <li>
            <span>{track.title}</span>
            <span>{track.rank}</span>
          </li>)
        )}</ol>
        <h2>Albums</h2>
        <div>{state.tracks.map(track => (
          <div>
            <span>{track.album.title}</span>
            <img style={{ maxWidth: 320 }} src={track.album.cover_xl} />
          </div>)
        )}</div>
      </div>
    </>
  );
}

export default Artist;
