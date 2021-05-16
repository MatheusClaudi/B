//Install express server
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/vacinimin'));

app.get('/*', (req, res) =>
    res.sendFile(__dirname + '/dist/vacinimin/index.html'),
);

// Start the app by listening on the default Heroku port
app.listen(PORT);