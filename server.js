var module = require('./dbmodule');
var url = require('url');
var querystring = require('querystring');
var http = require('http');

http.createServer(function(request, response) {
var data1 = '';

request.on('data', function(chunk) {
            data1 += chunk;
        });

request.on('end', function() {
var fname = querystring.parse(data1)["fname"];
console.log(fname);
var number = querystring.parse(data1)["number"];
console.log(number);
var email = querystring.parse(data1)["email"];
console.log(email);
var date = querystring.parse(data1)["date"];
console.log(date);
var pass = querystring.parse(data1)["pass"];
console.log(pass);
var password1 = querystring.parse(data1)["password1"];
console.log(password1);
var gender = querystring.parse(data1)["gender"];
console.log(gender);

if (request.url === '/login') {
module.authenticateUser(fname,number, email,date,pass,password1,gender, response);
            } 
else if (request.url === '/save') {
module.saveUser(fname,number,email,date,pass,password1,gender, response);
            } 
      });
    
}).listen(3000);
console.log("Server started");