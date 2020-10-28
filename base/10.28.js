var numArr = [1, 2];
var reverseNums = numArr.reverse();
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var x = extend({ a: 1 }, { b: '2' });
console.log(x);
