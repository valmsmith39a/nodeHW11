module.exports = {
	sum: function sum(reqURLString){
		var regex = /\d+/g;
		var numbersArray = reqURLString.match(regex);
		var sum = numbersArray.reduce(function(a,b){
  				return parseFloat(a) + parseFloat(b);
			  });
		return sum;
	}, 
	square: function square(number){
		var square = num * num; 
		var squareStr = square.toString();
		var ans = JSON.stringify(squareStr);
		return ans;
	}
}