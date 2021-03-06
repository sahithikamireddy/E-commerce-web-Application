
const express = require('express')

const router = new express.Router()
const baseUrl = '/api'

const modules = [
  'strain',
  'batch'
]
modules.forEach(module => {
  router.use(baseUrl, require(`./${module}/routes`))
})

module.exports = router

