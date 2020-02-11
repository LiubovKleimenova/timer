const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on("data", key => {
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  if (key === "b") {
    process.stdout.write("\x07");
  }
  if (Number(key) >= 1 || Number(key) <= 9) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, Number(key)*1000);
  }

  //process.stdout.write(".");
});

//console.log("after callback");
