const result = document.getElementById("result");
const submit = document.getElementById("submit");

function binary(e) {
  e.preventDefault();

  const num = document.getElementById("number").value;

  if (num === "") {
    alert("Please Enter a Number");
  } else if (num < 0) {
    alert("Please Enter a Positive Number");
  } else {
    result.style.visibility = "visible";
  }

  let binaryNumber = Number(num).toString(2);
  result.innerHTML = binaryNumber;
}
submit.addEventListener("click", binary);
