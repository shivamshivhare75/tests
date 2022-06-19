// 1.An array is given, return the sum of all the positives numbers.
// const input = [ 1, -5, 2, 10, -30, 29, 50];

const input = [1, -5, 2, 10, -30, 29, 50];
let sum = 0;
let positive = false;
for (let i of input) {
  if (0 <= i) {
    sum += i;
    positive = true;
  }
}
if (positive == true) {
  console.log(`sum of positives in array is ${sum}`);
} else {
  console.log("no positive number in array");
}
