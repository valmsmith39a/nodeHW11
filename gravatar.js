var md5 = require('md5') 
module.exports = {
	getGravatarURL: function(email){
		var md5Hash = md5(email);
		var gravatarURL = 'http://www.gravatar.com/avatar/' + md5Hash + '\n';
		return gravatarURL; 
	}
}