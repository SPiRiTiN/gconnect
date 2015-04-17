
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/index')
  , neo4j = require('./routes/neo4j');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/assets'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/neo4j', neo4j.index);

app.post('/neo4j/insertNode', neo4j.insertNode);
app.post('/neo4j/getNodeById', neo4j.getNodeById);
app.post('/neo4j/getGraphJson', neo4j.getGraphJson);
app.post('/neo4j/getEmpFList', neo4j.getEmpFList);


app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
