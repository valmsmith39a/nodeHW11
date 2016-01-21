'use strict';

var math = require('./math.js');
var wordCount = require('./wordcount.js');
var gravatar = require('./gravatar.js');
var md5 = require('md5') 
var http = require('http');

var server = http.createServer(function(req, res){
	// Security permissions. In this exercise, accessing different ports of same server. 
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');

	var urlParts = req.url.match(/[^/]+/g);

	switch(urlParts[0]){
		case 'time':
			var timestamp = Date.now();
			res.end(timestamp + '\n'); 
			break; 
		case 'math':
			if(urlParts[1] === 'add'){
				var sumStr = math.sum(req.url).toString();
				res.end(sumStr + '\n');
				/* Method 2
				var regex = /\d+/g;
				var numbersArray = req.url.match(regex);
				var sum = numbersArray.reduce(function(a,b){
  				return parseFloat(a) + parseFloat(b);
			  });
			  var sumStr = sum.toString();
				res.end(sumStr + '\n');
				*/				
				/* Classroom example 
				// Method 1 
				var a = urlParts[2];
				var b = urlParts[3];
				var sum = parseInt(a) + parseInt(b);
				var sumStr = sum.toString();

				// or Method 2: use imported file math.js
				var sumStr = math.sum(a, b);
				*/
			}
			else if(urlParts[1] === 'square'){
				var num = urlParts[2];
				var result = math.square(num);
				res.end(result);
				/*
				var num = urlParts[2];
				var square = num * num; 
				var squareStr = square.toString();

				var ans = JSON.stringify(squareStr);
				res.end(ans);
				*/
			}
			break;
		case 'sentence':
		 		var sentence = urlParts[1];
		 		var countsObject = wordCount.sentenceCount(sentence);
		 		var countsObjectStr = JSON.stringify(countsObject);
		 		res.end('sentence counter: ' + countsObjectStr + '\n');
		 		/* Method 2 
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
				*/
			break;
		case 'gravatar':
				var email = urlParts[1];
				var gravatarURL = gravatar.getGravatarURL(email);
				res.end(gravatarURL);
				/*
				var email = urlParts[1];
				var md5Hash = md5(email);
				var gravatarURL = 'http://www.gravatar.com/avatar/' + md5Hash + '\n';
				res.end(gravatarURL);
				*/
			break;
		default:
			res.end('nothing');
	}
});

// list for requests
server.listen(4000);