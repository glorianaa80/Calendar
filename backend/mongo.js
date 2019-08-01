const mongo = require('mongodb').MongoClient;
const qs = require('querystring');
let ds = '';

let uri = "mongodb://localhost:27017/CalenderEvents";

// Connect to the db
mongo.connect(uri, (err, client) => {
	if(err) console.log(`ERROR: Conectado a la BD: ${err}`);
  else console.log('Conexion a la BD realizada');
  const db = client.db('CalenderEvents');
  const data = qs.parse(ds);
  const collect = db.collection('Months');
  collect.insertOne(data , function(err , res){
      if(err) throw err;
      console.log("data success")
      client.close()
  })
});
