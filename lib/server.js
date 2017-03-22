'use strict'

const express = require('express')
const path = require('path')
const app = express()
                                                            
app.use(express.static(path.join(__dirname, '../public')))         // Setup static file server

const server = app.listen(process.env.PORT || 3000, function () {
  const host = server.address().address
  const port = server.address().port
  console.log('Server listening at http://%s:%s', host, port)
})
