const http = require('http');

const register = require('./controllers/register.js');
const brands = require('./controllers/brands.js');
const mongodb = require('./mongo.js');

const route = {
	brands: {
		path: '/api/v1/brands',
		path: '/api/v1/brands',
		controller: brands,
	}
}

const findAll = function(req,res){

}

const server = http.createServer(register(route));
server.listen(5000);