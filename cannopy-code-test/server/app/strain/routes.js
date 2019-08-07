
const ctrl = require('./ctrl')
const router = require('express').Router()

router.get('/strains', ctrl.getStrains)
router.get('/strains/:id', ctrl.getStrain)
router.post('/createstrain',ctrl.addstrain)
router.put('/updatestrain',ctrl.updatestrain)

module.exports = router

