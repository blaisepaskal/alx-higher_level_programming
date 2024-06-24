
let b = process.argv[2];
function drawSquare(x) {
  if (typeof x === "number" || x >=0) {
     for (let i = 0; i < x; i++) console.log("X".repeat(x));

  } else {
    console.log("missing size");
  }
}
drawSquare(b);
