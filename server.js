const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog.js');
const api = require('./routes/index.js');
// make route to notes.html page from index.html page 

const port = process.env.PORT || 3001;

const app = express();

app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/pages/notes.html')));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));