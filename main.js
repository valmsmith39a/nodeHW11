'use strict';

$(document).ready(init);

function init(){
	console.log('in jquery');
	$('#submit-email').on('click', getEmailButton);
}

var emailG = '';

function getEmailButton(){
	console.log('in get email');
	emailG = $('#email-input').val();
	console.log(emailG);

	getRequest(emailG);
}

function getRequest(email){
	console.log('email in get request is: ', email);



//var url = 'proxy.php?url=http://localhost:4000/gravatar/samer.buna@gmail.com'; // + email;
var url = 'https://localhost:4000/math/add/3/3'; // + email;

var url2 = '/gravatar/samer.buna@gmail.com';

$.ajax({
		url: url, 
		type:"GET", 
		contenttype:'jsonp',
		success:function(data){
			console.log('data is', data);
			//city = data.location.city; 
			//state = data.location.state;
			//var stateCityString = state + ',' + ' '+ city;
			//$('.input-field').val(stateCityString);

			//setWeatherObject(stateCityString);
		},
		error:function(err){
			alert(err);
		}
	}); 


/*
	$.get(url, function( data ) {
  		debugger;
  		console.log('data is: ', data);
  //$( ".result" ).html( data );
  alert( "Load was performed." );
  });
  */
}