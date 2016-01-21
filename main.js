'use strict';

$(document).ready(init);

function init(){
	console.log('in jquery');
	$('#submit-addition-button').on('click', getAdditionButton);
	$('#submit-square-button').on('click', getSquareButton);
	$('#submit-email-button').on('click', getGravatarButton);
	$('#submit-sentence-button').on('click', getSentenceButton);
}

function getAdditionButton(){
	var inputString = $('#addition-input').val();
	var numbersStr = inputString.replace('+', '/');
	var baseADD_URL = 'http://localhost:4000/math/add/'; 	
	var additionURL = baseADD_URL +  numbersStr; 
	$.ajax({
		url: additionURL,
		contenttype:'json',
		success:function(data){
			$('#display-addition').text('Result is: ' + data);
		},
		error:function(err){
			alert(err);
		}
	}); 
}

function getSquareButton(){
	var inputString = $('#square-input').val();
	var baseSquare_URL = 'http://localhost:4000/math/square/'; 	
	var squareURL = baseSquare_URL + inputString; 
	$.ajax({
		url: squareURL,
		contenttype:'json',
		success:function(data){
			$('#display-square').text('Result is: ' + data);
		},
		error:function(err){
			alert(err);
		}
	}); 
}

function getGravatarButton(){
	var gravatarEmail = $('#email-input').val();
	var baseGravatarEmailURL = 'http://localhost:4000/gravatar/';
	var gravatarURL = baseGravatarEmailURL + gravatarEmail; 
	$.ajax({
		url: gravatarURL,
		contenttype:'json',
		success:function(data){
			$('#display-gravatar').text('Gravatar URL is: ' + data);
		},
		error:function(err){
			alert(err);
		}
	}); 
}

function getSentenceButton(){
	var sentenceStr = $('#sentence-input').val();
	var baseSentenceURL = 'http://localhost:4000/sentence/'; 	
	var sentenceURL = baseSentenceURL + sentenceStr; 
	$.ajax({
		url: sentenceURL,
		contenttype:'json',
		success:function(data){
			debugger;
			console.log(data);
			$('#display-sentence-results').text('Sentence Results are: ' + data);
		},
		error:function(err){
			alert(err);
		}
	}); 
}
