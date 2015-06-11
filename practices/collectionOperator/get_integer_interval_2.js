'use strict';
var _ = require('../chain/prolodash.js');

function get_integer_interval_2(number_a, number_b) {
    var array = _(number_a).range(number_b).value();
    var result = _(array).filter(function(n) {
        return n % 2 === 0;
    }).value();

    return result;
}

module.exports = get_integer_interval_2;
