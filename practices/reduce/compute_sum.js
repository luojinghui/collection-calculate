'use strict';
var _ = require('../chain/prolodash.js');
function calculate_elements_sum(collection) {
    return _(collection).reduce(function(a,b) {
        return a + b;
    }).value();
}
module.exports = calculate_elements_sum;
