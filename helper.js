const _ = require('lodash');

const numberFormat = (number) => {
    const comma = ',',
        string = Math.max(0, number).toFixed(0),
        length = string.length,
        end = /^\d{4,}$/.test(string) ? length % 3 : 0;
    return (end ? string.slice(0, end) + comma : '') + string.slice(end).replace(/(\d{3})(?=\d)/g, '$1' + comma);
}

exports.followers = (number) => {
    return numberFormat(number) + ' FOLLOWERS'
}

exports.numberOfTracks = (number) => {
  return `${number} TRACKS`
}

exports.removeRepeatedObjs = (array, path, sizeLimit) => {
    let filteredArray = [];

  
    for(let i=0; i<array.length; i++ ) {
  
      if(sizeLimit == filteredArray.length) {
        break
      };
  
      if(i + 1 == array.length){
        filteredArray.push(array[i]);
        break;
      }
  
      if (_.get(array[i], path) != _.get(array[i+1], path)) {
        filteredArray.push(array[i])
      }
    }
    
    return filteredArray;
  }