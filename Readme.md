# **diet-mongo**
A diet plugin for the official node.js mongodb driver:
[https://github.com/mongodb/node-mongodb-native][1]

## **Features**
- Simplifies connecting to mongodb
- Creates a mongodb wrapper for diet that can be used in local diet routes.
- the `db.close()` is called automatically on `$.end()` so you don't have to close every connection on your own.
- Very small, just 20kb

## **Install**
`npm install diet-mongo`

## **Usage**
```js
// Require Diet
require('diet');

// New Domain
app = new Domain('http://example.com/');

// MongoDB
var mongo = app.plugin('diet-mongo');
var db = mongo.db('test');

// Use in Route
app.get('/', db, function($){
    var users = $.db.collection('users');
    users.findOne({ username: 'peter' }, function(err, item) {
        $.data.user = item;
        $.json(); // -> { user: { _id: '4309jg43f234', username: 'peter'} }
    });
});
```

## **One Liner**
If you only need to use one database, you can shorten your call to:
```js
var db = app.plugin('diet-mongo').db('test');
```

## **Methods**
The plugin returns a few methods when you call it:

**mongo.db**
The `database` paremeter is required everything else is optional.
```js
// api
var db = mongo.db(database, port, host, protocol);
```
```js
// example - with the defaults
var db = mongo.db('test', 27017, 'localhost', 'mongodb');
```

**mongo.class**
This is a shortcut for the return values of `require('mongodb')` inside `diet-mongo`.

**mongo.client**
This is a shortcut for the return values of `require('mongodb').MongoClient` inside `diet-mongo`.

# License
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


  [1]: https://github.com/mongodb/node-mongodb-native