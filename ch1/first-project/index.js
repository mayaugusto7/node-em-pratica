var CountStream = require('./countstream');
var countStream = new CountStream('book');
var https = require('https');

https.get('https://www.manning.com/', function(res) {
    res.pipe(countStream);
});

countStream.on('total', function(count) {
    console.log('Total matches: ', count);
});