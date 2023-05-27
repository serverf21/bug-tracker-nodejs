// require('dotenv').config();
const express = require('express');

const db = require('./config/mongoose');
const port = 8000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//setting up view engines
app.set('view engine', 'ejs');
app.set('views', './views');

//using express router
app.use('/', require('./routes'));

app.listen(port, (error) => {
    if (!error) {
        console.log("Server is successfully running on the port", port);
    }
    else {
        console.log("Error Occured", error);
    }
});