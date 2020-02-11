let arr = process.argv.slice(2);
let i = 0;
for (const time of arr) {
  if (time > 0) {
  i += Number(time);
  //console.log(i);
  setTimeout(() => {
    process.stdout.write("\x07");
  }, i);
}}