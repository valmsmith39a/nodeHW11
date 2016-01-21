'use strict';

// require other JS files 
var math = require('./math.js');
var wordCount = require('./wordcount.js');
var md5 = require('md5') 

// create server
var http = require('http');

var server = http.createServer(function(req, res){
	var urlParts = req.url.match(/[^/]+/g);
	// curl localhost:4000/time
	// curl localhost:4000/math/add/5/50
	// /math/add/3/3/3 => 9 (this should accept any quantity of numbers)
	// curl localhost:4000/math/square/5
	// /math/square/5 => 25
	// curl localhost:4000/wordcount/this%20is%20a%20string
	switch(urlParts[0]){
		case 'time':
			var timestamp = Date.now();
			res.end(timestamp + '\n'); 
			break; 
		case 'math':
			if(urlParts[1] === 'add'){
				/*
				// Method 1 
				var a = urlParts[2];
				var b = urlParts[3];
				var sum = parseInt(a) + parseInt(b);
				var sumStr = sum.toString();

				// or Method 2: use imported file math.js
				var sumStr = math.sum(a, b);
				*/
				var regex = /\d+/g;
				var numbersArray = req.url.match(regex);
				var sum = numbersArray.reduce(function(a,b){
  				return parseFloat(a) + parseFloat(b);
			  });
			  var sumStr = sum.toString();
				res.end(sumStr + '\n');
			}
			else if(urlParts[1] === 'square'){
				var num = urlParts[2];
				var square = num * num; 
				var squareStr = square.toString();
				res.end(squareStr + '\n');
			}
			break;
		case 'sentence':
		 		var sentence = urlParts[1];
		 		var sentenceStr = decodeURI(sentence);
		 		var stringLength = sentenceStr.length;
		 		var regexSpaces = / /g;
		 		var regexWords = /\w+/g;
		 		var regexLetters = /[a-zA-Z]/g;
		 		var spacesCount = sentenceStr.match(regexSpaces).length;
		 		var wordsCount = sentenceStr.match(regexWords).length;
		 		var lettersCount = sentenceStr.match(regexLetters).length;
		 		var countsObject = {};
		 		countsObject.spaces = spacesCount; 
		 		countsObject.words = wordsCount; 
		 		countsObject.letter = lettersCount; 
		 		var countsObjectStr = JSON.stringify(countsObject);
				res.end('sentence counter: ' + countsObjectStr + '\n');
			break;
		case 'gravatar':
				var email = urlParts[1];
				var md5Hash = md5(email);
				var gravatarURL = 'http://www.gravatar.com/avatar/' + md5Hash + '\n';
				res.end(gravatarURL);
			break;
		default:
			res.end('nothing');
	}
});

// list for requests
server.listen(4000);