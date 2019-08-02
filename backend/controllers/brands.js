const fs = require('fs');
const path = require('path');
// const brandsJson = require('../inventories/brands.json');
// const months = require('../mongo.js');
const config = require('../inventories/config.json');
const {
  end,
  // getData,
  // throwErr
} = require('./method');



function GET(req, res) {
    end(res, {data: config})
}

// function reportBrands(req, res, routeBrands) {	
//   let brands = require(brandsJson);	
//    brands.reduce((t, brand, i) => {	
// 			Object.keys(brand).forEach(key => {	
// 				t += `${key}:${brand[key]}`;	
// 				t += i < brands.length ? '\n' : '';	
// 			});	
// 			return t;	
// 		}, '');
// }

module.exports = {
  GET,
  // reportBrands
};