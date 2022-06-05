let input = +prompt("Enter Nth prime number");
counter = 0;
for (let i = 2; i <= 1000000; i++) {
  let prime = true;

  // checking if number is prime or not
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }

  // if number greater than 1 and not divisible by other numbers increment counter
  if (i > 1 && prime === true) {
    counter++;
    if (input === counter) {
      console.log(i);
      break;
    }
  }
}
