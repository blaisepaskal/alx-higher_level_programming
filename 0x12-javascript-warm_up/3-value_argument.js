let b = process.argv[2];
function printFirstParameter(b) {
  if (arguments.length === 0) {
    console.log("No argument");
  } else {
    console.log(b);
  }
}
printFirstParameter(b);
