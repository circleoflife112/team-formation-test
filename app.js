const startBtn = document.querySelector(".btn-start");
const resetBtn = document.querySelector(".btn-reset");

const inputs = document.querySelectorAll("input");

console.log(startBtn);

function clickable() {
  if (inputs.innerText === "") {
    startBtn.disabled = true;
  } else {
    startBtn.disabled = false;
    startBtn.classList.toggle("changeColor");
  }
}

window.addEventListener("", clickable());
