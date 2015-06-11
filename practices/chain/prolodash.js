
function _(collection) {
    if(!(this instanceof _)) {
        return new _(collection);
    }
    this.collection = collection;
}

_.prototype.each = function(fun) {
    for (var i = 0; i < this.collection.length; i ++) {
        fun(this.collection[i],i);
    }
};

_.prototype.map = function(fun) {
    var result = [];

    this.each(function(n,i) {
        result.push(fun(n));
    });
    this.collection = result;
    return this;
};

_.prototype.filter = function(fun) {
    var result = [];

    this.each(function(n,i) {
        if(fun(n,i)) {
            result.push(n);
        }
    });
    this.collection = result;
    return this;
};

_.prototype.reduce = function(fun) {
    var result;

    this.each(function(n,i) {
        if(i === 0) {
            result = n;
        } else {
            result = fun(result,n);
        }
    });
    this.collection = result;
    return this;
}



_.prototype.value = function() {
    return this.collection;
};

module.exports = _;
