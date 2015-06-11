'use strict';
var _ = require('../chain/prolodash.js');

function get_integer_interval_2(number_a, number_b) {
    return _(number_a).range(number_b).filter(function(n) {
        return n % 2 === 0;
    }).value();

}

module.exports = get_integer_interval_2;
