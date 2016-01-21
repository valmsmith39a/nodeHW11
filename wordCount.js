module.exports = {
	sentenceCount:function(sentence){
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

	 	return countsObject; 
	}
}