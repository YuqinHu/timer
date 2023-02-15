const args = process.argv.slice(2);
let integer = [];

for (let i = 0; i < args.length; i++) {
  if (parseInt(args[i]) >= 0) {
    integer.push(parseInt(args[i]));
  }
}

let delay = 1000;
for (const int of integer) {
  delay = 1000 * int;
  setTimeout(() => {
    console.log(`${int} seconds`);
    process.stdout.write('\x07');
  }, delay);
}

