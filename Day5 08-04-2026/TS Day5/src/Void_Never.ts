function greet(): void {
  console.log("Hello");
}

function throwError(): never {
  throw new Error("Error!");
}

greet();
throwError();