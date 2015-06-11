
function _(collection) {
    if(!(this instanceof _)) {
        return new _(collection);
    }
    this.collection = collection;
}

_.prototype.each = function(fun) {
    for (var i = 0; i < this.collection.length; i++) {
        fun(this.collection[i],i);
    }
};

_.prototype.map = function(fun) {
    var result = [];

    this.each(function(n,i) {
        result.push(fun(n,i));
    });
    this.collection = result;
    return this;
}

_.prototype.
_.prototype.value = function() {
    return this.collection;
}

module.exports = _;
