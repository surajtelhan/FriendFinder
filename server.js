var express = require("express");
var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes');

var server = express();
var PORT = process.env.PORT || 3000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static('app/public'));

server.use('/', htmlRoutes);
server.use('/api', apiRoutes);

server.listen(PORT, function() {
  console.log("Server is listening on PORT " + PORT);
});