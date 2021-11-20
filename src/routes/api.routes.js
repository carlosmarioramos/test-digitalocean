const { Router } = require('express')
const router = Router()
const apiCtrl = require('../controllers/api.controller')

router.get('/', apiCtrl.root)

module.exports = router