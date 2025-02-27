var databaseUrl = "mongodb://127.0.0.1:27017/mydb";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
console.log("Connected to MongoDB");

exports.authenticateUser = function(fname,number, email,date,pass,password1,gender, response) {
db.users.find({ "fname": fname,"number": number,"email": email,"date": date,"pass": pass,"passowrd1": password1,"gender": gender },
	function(err, users) 
	{
		if (err || !users) {
		response.write("Not authorized user");
		response.end();
            } 
		else if (users.length == 0) {
		response.write("Not authorized user");
		response.end();
            } 
		else {
		response.write("Authorized user");
		response.end();
            }
        });
}

exports.saveUser = function(fname,number, email,date,pass,password1,gender, response) {
console.log('Saving user to mongo');
db.users.insert({ "fname": fname,"number": number,"email": email,"date": date,"pass": pass,"passowrd1": password1,"gender": gender  },
function(err, saved) 
{
	if (err || !saved)
		console.log(err);
	else
		response.write("User Saved");
		response.end();
         });
}
