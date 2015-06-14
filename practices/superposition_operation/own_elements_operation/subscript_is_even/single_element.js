'use strict';
var _ = require('../../../chain/prolodash.js');

var single_element = function(collection){
    var temp = {};
    var result = [];

    _(collection).filter(function(n,i) {
        return i % 2 != 0;
    }).each(function(n) {
        temp[n + 'a'] = temp[n + 'a'] || 0;
        temp[n + 'a'] ++;
    });
    for(var key in temp) {
        if(temp[key] === 1) {
            result.push(parseInt(key));
        }
    }
    return result;

    // var array = _.filter(collection,function(n,i) {
    //     return i % 2 != 0;
    // });
    //
    // var temp = {};
    // var result = [];
    //
    // _.foreach(array,function(n) {
    //     temp[n + 'a'] = temp[n + 'a'] || 0;
    //     temp[n + 'a'] ++;
    //     console.log(temp);
    // });
    // for(var key in temp) {
    //     if(temp[key] === 1) {
    //         result.push(parseInt(key));
    //     }
    // }
    // return result;
}
module.exports = single_element;
