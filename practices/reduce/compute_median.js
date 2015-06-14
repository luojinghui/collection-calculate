'use strict';
var _ = require('../chain/prolodash.js');

function compute_median(collection) {
    return _median(collection);
}

module.exports = compute_median;
