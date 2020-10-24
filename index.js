const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/aframe', express.static(path.join(__dirname, '/node_modules/aframe/dist/')))
  .use('/aframe-extras', express.static(path.join(__dirname, '/node_modules/aframe-extras/dist/')))
  .use('/aframe-ar', express.static(path.join(__dirname, '/node_modules/aframe-ar/dist/')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    res.render('pages/index');
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
