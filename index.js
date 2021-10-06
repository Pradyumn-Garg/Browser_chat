// index.js
const express = require('express')
const app = express()
const server = require('http').createServer(app)
app.get('/', (req, res, next) => {
  res.send('<h1>Hello World</h1>')
})
const port = process.env.PORT || 3000
server.listen(port, ()=> {
  console.log('listening on: ', port)
})
