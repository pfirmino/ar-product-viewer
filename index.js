const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/aframe', express.static(path.join(__dirname, '/node_modules/aframe/dist/')))
  .use('/aframe-extras', express.static(path.join(__dirname, '/node_modules/aframe-extras/dist/')))
  .use('/aframe-ar', express.static(path.join(__dirname, '/node_modules/aframe-ar/dist/')))
  .use("/", express.static(__dirname + '/index.html'))
  .get('/', (req, res) => {
      })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
