
//bretcope
//var neo4j = require('neo4j-js');

//philippkueng
//var neo4j = require('node-neo4j');
//db = new neo4j('http://suvi:suvi@localhost:7474');
	
//thingdom
var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://neo4j:neo4j@localhost:7474');

exports.index = function(req, res) {
	console.log('--------index----------');
	console.log(db);
	res.send("Neo4j");
}


exports.insertNode = function(req, res) {
	console.log("---------insert node--------");
	console.log(db);
	
	//philippkueng
	// db.insertNode({
	//     name: 'Darth Vader',
	//     sex: 'male'
	// },function(err, node){
	//     if(err) console.log(err);

	//     // Output node properties.
	//     console.log(node);
	//     res.send(node);
	//     // Output node id.
	//     console.log(node._id);
	// });

	//thingdom
	var node = db.createNode({hello: 'world'});     // instantaneous, but...
	node.save(function (err, node) {    // ...this is what actually persists.
	    if (err) {
	        console.error('Error saving new node to database:', err.message);
	    } else {
	        console.log('Node saved to database with id:', node.id);
	    }
	});


}













// exports.index = function(req, res) {
// 	console.log("--------index--------");
// 	neo4j.connect('http://localhost:7474/', function (err, graph) {
// 	    if (err)
// 	        throw err;

// 	    // do something with the graph
// 	    console.log(graph);
	 
// 	   graph.createNode({ prop1: 'node property', boolProperty: false }, function (err, node) {
// 		    console.log(err ? err : node);
// 		});

// 	    res.send("Connected");
// 	});

// }
