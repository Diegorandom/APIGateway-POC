var express = require('express');
var router = express.Router()
const apiAdapter = require('../apiAdapter')
const serviceURL = require('../serviceRegistry/serviceRegistry.js');

router.get('/admin/tasks', async (req, res, next) => {
  const BASE_URL = await serviceURL.tasksService();
  const api = apiAdapter(BASE_URL)
  console.log("making get request to ", BASE_URL + req.path)

  api.get(req.path + "?userId=" + req.query.userId ).then((resp, error) => {
      if(error){
        console.log("error", error)
        res.send(error)
      }else{
        console.log("data", resp.data)
        res.send(resp.data)
      }
    })
 
})

router.post('/users/tasks', async (req, res) => {
  const BASE_URL = await serviceURL.tasksService();
  const api = apiAdapter(BASE_URL)
  console.log("making get request to ", BASE_URL + req.path)

  api.get(req.path + "?userId=" + req.query.userId ).then((resp, error) => {
      if(error){
        console.log("error", error)
        res.send(error)
      }else{
        console.log("data", resp.data)
        res.send(resp.data)
      }
    })
})

router.get('/users/tasks', async (req, res) => {
  const BASE_URL = await serviceURL.tasksService();
  const api = apiAdapter(BASE_URL)
  console.log("making get request to ", BASE_URL + req.path)

  api.get(req.path + "?userId=" + req.query.userId ).then((resp) => {
    console.log("data", resp.data)
    res.send(resp.data)
  }).catch(error =>{
    console.log("error", error.error)
    res.send(error)
  })
  })

  router.delete('/users/tasks', async(req, res) => {
    const BASE_URL = await serviceURL.tasksService();
  const api = apiAdapter(BASE_URL)
  console.log("making get request to ", BASE_URL + req.path)

  api.get(req.path + "?userId=" + req.query.userId ).then((resp) => {
    console.log("data", resp.data)
    res.send(resp.data)
  }).catch(error =>{
    console.log("error", error.error)
    res.send(error)
  })
  })

  router.put('/users/tasks', async (req, res) => {
    const BASE_URL = await serviceURL.tasksService();
  const api = apiAdapter(BASE_URL)
  console.log("making get request to ", BASE_URL + req.path)

  api.get(req.path + "?userId=" + req.query.userId ).then((resp) => {
    console.log("data", resp.data)
    res.send(resp.data)
  }).catch(error =>{
    console.log("error", error.error)
    res.send(error)
  })
  })

module.exports = router