const mongo = require('mongodb').MongoClient;
const qs = require('querystring');
let ds = '';
let uri = "mongodb://localhost:27017/";
const config = require('./inventories/config.json')


// Connect to the db
mongo.connect(uri, (err, client) => {
	if(err) console.log(`ERROR: Conectado a la BD: ${err}`);
  else console.log('Conexion a la BD realizada');
  const db = client.db('CalenderEvents');
  const data = qs.parse(ds);
  const collect = db.collection('Months').find();
  // collect.forEach(function(doc){
    console.log(config.mongo.db.collection);
  // });

});
// })
  // Esto crea e inserta un nuevo elemento a la collection
  // db.collection('Months').insertOne({
  //   month: 'Enero',
  //   day: '[1,1,1,1,1,1,1,1,1,1]'
  // }
  // )
  
  // Trea los que tenga adentro
  // collect.forEach(function(doc){
  //   console.log(doc.month);
  // });