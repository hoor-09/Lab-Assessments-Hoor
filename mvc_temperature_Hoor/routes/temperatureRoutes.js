temperatureroutes.js code 

const express = require('express');
const router = express.Router();
const controller = require('../controller/temperatureController');

router.get('/temperatures', controller.getAll);
router.get('/temperatures/:region', controller.getByRegion);
router.post('/temperatures', controller.add);

module.exports = router;