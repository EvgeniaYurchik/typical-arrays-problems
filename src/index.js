
exports.min = function min (array) {
  if (array!=undefined&&array.length) {
    return Math.min.apply(null, array);
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (array!=undefined&&array.length) {
    return Math.max.apply(null, array);
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array!=undefined&&array.length) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer)/array.length;
  } else {
    return 0;
  }
}