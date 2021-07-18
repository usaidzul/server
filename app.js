const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const caseRoute = require('./routes/case');

app.use('/', caseRoute);



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log('connected DB')
);

//Listen to the server
app.listen(3000);