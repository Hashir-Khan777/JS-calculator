var input = document.querySelector("input");
var btn = document.querySelector("button");
function nmbr(num) {
  var opt = ["+", "-", "*", "/"];
  var lastValue = input.value.slice(input.value.length - 1);
  if (opt.indexOf(lastValue) !== -1) {
    console.log(true);
  } else {
    console.log(false);
    input.value += num;
  }
}

function cls() {
  input.value = "";
}

function getresult() {
  input.value = eval(input.value);
}
