var Writable = require('stream').Writable;
var util = require('util');

module.exports = CountStream;

// heranca
util.inherits(CountStream, Writable);

function CountStream(matchText, options) {
    Writable.call(this, options);
    this.count = 0;
    this.matcher = new RegExp(matchText, 'ig');
}

CountStream.prototype._write = function(chunk, encondig, callback) {
    var matches = chunk.toString().match(this.matcher);

    if (matches) {
        this.count += matches.length;
    }

    callback();
};

CountStream.prototype.end = function() {
    this.emit('total', this.count);
};
