'use strict';
var _ = require('../chain/prolodash.js');

function get_intersection(collection_a, collection_b) {
    return _(collection_b).intersection(collection_a).value();
}

module.exports = get_intersection;
