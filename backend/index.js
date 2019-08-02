const http = require('http');

const register = require('./controllers/register.js');
const brands = require('./controllers/brands.js');
const mongodb = require('./mongo.js');
const config = require('./inventories/config.json');



const route = {
	brands: {
		path: '/api/v1/brands',
		controller: brands,
	}
}



const server = http.createServer(register(route));
server.listen(5000);