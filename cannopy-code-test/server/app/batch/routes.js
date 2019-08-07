
const ctrl = require('./ctrl')
const router = require('express').Router()

router.get('/batches', ctrl.getBatches)
router.get('/batches/:id', ctrl.getBatch)
router.post('/createbatch',ctrl.addBatch)
router.put('/updatebatch',ctrl.updateBatch)
module.exports = router

