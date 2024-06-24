let b = process.argv[2];
if (typeof b === "number" || b >= 0) {
  for (let i = 0; i < b; i++) {
    console.log("C is fun");
  }
} else {
  console.log("Missing Occurence");
}
