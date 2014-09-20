/* 
Copyright (c) 2014 Halász Ádám <mail@adamhalasz.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

module.exports.class = mongodb;
module.exports.client = MongoClient;
module.exports.db = function(database, port, host, protocol){
	var options = {
		database : database || 'test',
		port	 : port 	|| '27017',
		host	 : host 	|| 'localhost',
		protocol : protocol || 'mongodb'
	}
	function MongoClass($){
		MongoClient.connect(options.protocol 
			+ '://'+ options.host 
			+ ':'  + options.port 
			+ '/'  + options.database, 
		function(error, db) {
			if(error){
				throw new Error(error);
			} else {
				$.onEnd(function(callback){
					db.close();
					callback();
				});
				$.return(db);
			}
		});
	}
	MongoClass.database = database;
	return MongoClass;
}

module.parent.return()