/*var prompt = require('prompt');
*/var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'vhw3t8e71xdz9k14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'nzn9ko8olrh3n5m6',
  password : 'p3qdt126md7d5mi6',
  database : 'e6tlk6hczi2mtshm'
});

/*prompt.start();
*/ 
connection.connect(function(err){
	if (err) throw err;
	console.log("connected as id" + connection.threadId);
});
 //sends commands to the mysql.
connection.query('SELECT FROM * Products', function(err, res) {
 for (var i = 0; i < res.length; i++) {
 	  console.log(res[i].itemID + " | " + res[i].ProductName + " | " + res[i].DepartmentName + " | " + res[i].Price + " | " + res[i].StockQuantity);

 };
 
  console.log("res");
});


 
connection.end();

