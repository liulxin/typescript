var isDone = true;
var decL = 20;
var myname = 'hello';
var list = [1, 2, 3];
var list1 = [1, 2, 3];
var x;
x = ['hhl', 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var c1 = Color[3];
console.log(c1);
