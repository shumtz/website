const crypto = require('crypto');

module.exports = function generateId(){
	 return crypto.randomBytes(5).toString('HEX');
}