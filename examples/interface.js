function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myobj = {
    size: 10,
    label: "this is label"
};
printLabel(myobj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "red" });
var p1 = { x: 10, y: 10 };
// p1.x = 11
var a = [1, 2, 3];
var ro = a;
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var myArray;
myArray = ['hhl', 'wu'];
console.log(myArray[0]);
