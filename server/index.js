const express = require('express');
require('dotenv').config();
const app = express();
const {SERVER_PORT} = process.env;
const leadCtrl = require('./controllers/leadController');
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

app.post('/api/post', leadCtrl.postModeFull)

app.listen(SERVER_PORT, console.log('working on port', SERVER_PORT));