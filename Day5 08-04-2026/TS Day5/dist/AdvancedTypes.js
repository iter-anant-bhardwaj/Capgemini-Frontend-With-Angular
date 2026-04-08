"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//union
let value;
value = 10;
value = "hello";
console.log(value);
//literal type
let direction;
direction = "left";
console.log(direction);
let u1 = { name: "Anant", age: 21 };
console.log(u1);
//enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Left"] = 1] = "Left";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let dir = Direction.Down;
console.log(dir);
