let arr = process.argv.slice(2);
let i = 0;
for (const time of arr) {
  i += Number(time);
  console.log(i)
  setTimeout(() => {
    process.stdout.write("\x07");
  }, i);
}