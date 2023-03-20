const express = require('express');
const app = express();

const { Categris } = require('./data')

app.get('/get',Categris);

app.listen(5000)