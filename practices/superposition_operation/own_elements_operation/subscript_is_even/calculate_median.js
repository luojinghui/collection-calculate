'use strict';
var _ =require('../../../chain/prolodash.js');

var calculate_median = function(collection){
    return _(collection).filter(function(n,i) {
        return i % 2 === 0;
    }).median();
};

module.exports = calculate_median;
