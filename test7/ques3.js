let num = +prompt("Enter a number");
let total = 0;
for (let i = 1; i <= num; i = i + 2) {
  total = total + i;
}
console.log(`sum of odd numbers from 1 to ${num} = ${total}`);
