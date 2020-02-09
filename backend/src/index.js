const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const configuration = require('../config_env');
const {setupWebsocket} = require('./websocket')

//DOCKER port and host
const PORT = 3333;
const HOST ='0.0.0.0';


const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://'+ configuration.database_info.user+':'+configuration.database_info.password+'@clustergl-crsg7.azure.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true,
})

app.use(cors());
app.use(express.json())
app.use(routes);

server.listen(PORT,HOST,()=>{
    console.log('> backend listening on port 3333.');
});