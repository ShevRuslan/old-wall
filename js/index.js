
let count = prompt("Введите количество стен");
let array = prompt("Введите стены").split(" ");
console.log(array);
let maxHeight = 5;
let countBad = 0;
let start, end = 0;
array.forEach((block, index) => {
  if (+block < 5) {
    countBad += 5 - +block;
    if (start == 0) start = index + 1
    else end = index + 1;
  }
  else {
    countBad = 0;
    start = 0;
    index = 0;
  }
})
alert(`${start} ${end} ${countBad}`);
