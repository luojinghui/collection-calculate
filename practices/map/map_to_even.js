'use strict';
var _ = require('../chain/prolodash.js');

function map_to_even(collection){
    return _(collection).map(function (n) {
        return n * 2;
    }).value();
}
module.exports = map_to_even;
