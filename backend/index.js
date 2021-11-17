require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const axios = require('axios');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.post('/', async (req, res, next) => {
    const { searchTerm } = req.body;
    const response = await axios.get(`https://api.deezer.com/search?q=artist:"${searchTerm}"`);

    const { data, ...rest } = response.data;
    let artistIds = data.map(data => data.artist.id);
    artistIds = [...new Set(artistIds)];

    let artists = artistIds.map(async artistId => {
        const response = await axios.get(`https://api.deezer.com/artist/${artistId}`);
        return response.data;
    })
    artists = await Promise.all(artists);

    let albumIds = data.map(data => data.album.id);
    albumIds = [...new Set(albumIds)];

    let albums = albumIds.map(async albumId => {
        const response = await axios.get(`https://api.deezer.com/album/${albumId}`);
        return response.data;
    })
    albums = await Promise.all(albums);

    artists = artists.map(async artist => {
        let tracks = await axios.get(`${artist.tracklist}`);
        tracks = tracks.data.data;
        return { ...artist, tracks }
    })

    artists = await Promise.all(artists);

    return res.status(200).json({ artists, ...rest, albums })

});

app.use("*", (req, res) =>
    res.status(404).send({
        message: "route does not exist!",
    })
);
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}....`);
});

module.exports = app;