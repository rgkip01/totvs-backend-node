const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/database');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/api', require('./routes/user.routes'))
app.use(express.static('public'))
const port = process.env.PORT | 3000
app.listen(port)
