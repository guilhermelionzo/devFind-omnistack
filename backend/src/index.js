const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const configuration = require('../config_env')

const app = express();

mongoose.connect('mongodb+srv://'+ configuration.database_info.user+':'+configuration.database_info.password+'@clustergl-crsg7.azure.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.use(cors());
app.use(express.json())

app.use(routes);

app.listen(3333);