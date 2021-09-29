const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path');

app.set('view engine', 'pug')
app.set('views', __dirname)

app.use(express.static(path.join(__dirname, '../../dist')))

app.get('*', (req, res) => res.status(200).render('index'))
app.listen(process.env.PORT, console.log('Server up'))