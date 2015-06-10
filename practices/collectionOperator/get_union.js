'use strict';
var _ = require('../lodash/mylodash.js');

function get_union(collection_a, collection_b) {
    var array = _.concat(collection_a,collection_b);
    
    return _.no_repeat(array);
}
module.exports = get_union;


/*
function grouping_count(collection) {
  //
  // //在这里写入代码
  // var _ = require('../lodash');
  // return _.countBy(collection);
  //collection.sort();
  var temp = {};

  for(var i = 0;i < collection.length;i++) {
    //   temp[collection[i]]=temp[collection[i]]||0;
    //   temp[collection[i]]++;
      if(!! temp[collection[i]]) {
          temp[collection[i]]++;
      }else{
          temp[collection[i]]=0;
          temp[collection[i]]++;
      }

  }
  return temp;
}

module.exports = grouping_count;
*/
