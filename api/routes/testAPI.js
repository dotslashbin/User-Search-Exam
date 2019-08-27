var express = require('express');
var router = express.Router();
router.get('/', (req, res, next) => { res.send('API SERVER IS STARTING ...') });
module.exports = router;