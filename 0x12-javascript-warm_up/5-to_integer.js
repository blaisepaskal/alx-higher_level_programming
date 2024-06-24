let b = process.argv[2];
function printMyNumber(i) {
  if (i == "number") {
    console.log("Not a number");
  } else console.log("My number: " + Number(i));
}
printMyNumber(b);
