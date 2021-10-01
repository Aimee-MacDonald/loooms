const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
require('dotenv').config()
const path = require('path');

app.set('view engine', 'pug')
app.set('views', __dirname)

app.use(express.static(path.join(__dirname, '../../dist')))

require(path.join(__dirname, 'socketManager'))(server)
app.get('*', (req, res) => res.status(200).render('index'))
server.listen(process.env.PORT, console.log('Server up'))