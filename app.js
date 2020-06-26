var input = document.querySelector("input");
var btn = document.querySelector("button");
function nmbr(num) {
  input.value += num;
}

function cls() {
  input.value = "0";
}

function getresult() {
  input.value = eval(input.value);
}
