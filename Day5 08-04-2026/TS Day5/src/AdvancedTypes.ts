//union
let value: number | string;
value = 10;
value = "hello";
console.log(value);

//literal type
let direction: "left" | "right";
direction = "left";
console.log(direction);

//type alias
type User = {
  name: string;
  age: number;
};
let u1: User = { name: "Anant", age: 21 };
console.log(u1);

//enum
enum Direction{
    Up,
    Left,
    Down,
    Right
}
let dir:Direction = Direction.Down;
console.log(dir);