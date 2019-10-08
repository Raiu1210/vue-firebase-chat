const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
var http = require('http');

app.use(bodyParser.json())
app.use(cors())
app.use(express.static(__dirname));

var server = http.createServer(app);

app.get('/', (req, res) => res.sendFile('./index.html'));


server.listen(3000);