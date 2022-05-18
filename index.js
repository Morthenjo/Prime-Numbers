// program to print prime numbers between the two number
// take input from the user
const lowerNumber = document.getElementById("lowerNumber");
const higherNumber = document.getElementById("higherNumber");
const knappen = document.getElementById("knappen");
const primtallEl = document.getElementById("primtall");
function readInputLow() {
  return lowerNumber.value;
}
function readInputHigh() {
  return higherNumber.value;
}
// looping from lowerNumber to higherNumber
knappen.addEventListener("click", () => {
  for (let i = readInputLow(); i <= readInputHigh(); i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
      primtallEl.textContent += `|-- ${i} --| `;
      console.log([i]);
    }
  }
});
