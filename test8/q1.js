// Write a function to check if geekster exists in your array var list = ['geek', 'geekster', 'geeky'];
// If it exists  add some code to find the index of geekster and remove that item.

function isExist(list) {
  let exist = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === "geekster") {
      exist = true;
      console.log("geekster exist");
      console.log(`index of geekster is ${i}`);
    }
  }
  if (exist == true) {
    var list1 = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i] === "geekster") {
        continue;
      }
      list1.push(list[i]);
    }
    console.log(list1);
  } else {
    console.log("geekster doesnot exist");
  }
}

var list = ["geek", "avcd", 'geekster',"geeky"];
isExist(list);



