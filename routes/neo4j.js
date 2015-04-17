// var express = require('express');
// var router = express.Router();
var neo4j = require('../controllers/neo4j');

exports.index = neo4j.index;

exports.insertNode = neo4j.insertNode;

exports.getNodeById = neo4j.getNodeById;

exports.getGraphJson = neo4j.getGraphJson;

exports.getEmpFList = neo4j.getEmpFList;



