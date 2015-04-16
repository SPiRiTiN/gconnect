
//bretcope
//var neo4j = require('neo4j-js');

//philippkueng
var neo4j = require('node-neo4j');
db = new neo4j('http://neo4j:nxihtPMt2w@localhost:7474');
	
//thingdom
//var neo4j = require('neo4j');
//var db = new neo4j.GraphDatabase('http://neo4j:neo4j@localhost:7474');

exports.index  = function(req, res){
	console.log("Neo4j : index");

	//getting all nodes

	res.render('neo4j', { title: 'Neo4j' })
}


exports.insertNode = function(req, res) {
	console.log("---------insert node--------");
	//console.log(db);
	var node = {'name' : req.body.name, 'empid' : req.body.empid}
	console.log(node);
	//philippkueng
	db.insertNode(node,function(err, node){
	    if(err) console.log(err);

	    // Output node properties.
	    console.log(node);
	    res.send(node);
	    
	});

}

exports.getNodeById = function(req, res, next) {
	console.log("---------get node--------");
	var nodeid = req.body.nodeid;
	db.readNode(nodeid, function(err, node){
	    if(err) throw err;

	    // Output node properties.
	    console.log(node);
		res.send(node);
	});

	
}
