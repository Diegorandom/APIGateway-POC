var express = require('express');
var router = express.Router()
const apiAdapter = require('../apiAdapter')

const BASE_URL = 'http://localhost:8088'
const api = apiAdapter(BASE_URL)

router.get('/habits', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/habits/user', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/habits/user', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

  router.post('/habits/user', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

  router.get('/habits/user/:habitId', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

  router.delete('/habits/user/:habitId', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

  router.put('/habits/user/:habitId', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

module.exports = router