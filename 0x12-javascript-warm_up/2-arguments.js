let b = process.argv[2];
let c = process.argv[3];
function argumentPassed(b,c) {
  if (arguments.length === 0) {
    console.log("No Argument");
  } else if (arguments.length === 1) {
    console.log("Argument found");
  } else {
    console.log("Arguments found");
    console.log(arguments);
  }
}

argumentPassed(b,c);
