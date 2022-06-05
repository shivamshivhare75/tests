let num = +prompt("Enter a number to which you have to get the cube");
let cube;
for (let i = 1; i <= num; i++) {
  cube = i * i * i;
  console.log(`cube of ${i} = ${i} * ${i} * ${i} = ${cube}`);
}

