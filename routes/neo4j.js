var express = require('express');
var router = express.Router();
var neo4j = require('../controllers/neo4j');

router.get('/', neo4j.index);
router.post('/insertNode', neo4j.insertNode);

module.exports = router;
