const express = require('express');
const app = express();
const { route } = require('./routers/wishlishrouters');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const ConnectDB = require('./config/db');
ConnectDB()

app.use(express.urlencoded({ extended: false }));

app.use('/api/wishlish', require('./routers/wishlishrouters'));

app.use('/api/addcard',require('./routers/addcardrouters.js'))

app.use('/api/signup',require('./routers/signuprouters'))

app.use('/api/address',require("./routers/addressrouters"))

app.use('/api/sarees',require('./datarouter'))

app.listen(port, () => {
    console.log(`port is colled ${port}`);
});