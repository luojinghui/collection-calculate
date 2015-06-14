'use strict';
var _ = require('../chain/prolodash.js');
function compute_chain_median(collection) {
    var array = [];

    _(collection.split('->')).each(function(n) {
        array.push(Number(n));
    });
    return _median(array);
}
module.exports = compute_chain_median;
