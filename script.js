let count = 0;
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const counter = document.getElementById("counter");
incrementBtn.onclick = function () {
  count++;
  counter.textContent = count;
};
decrementBtn.onclick = function () {
  if (count != 0) {
    count--;
    counter.textContent = count;
  }
};
resetBtn.onclick = function () {
  count = 0;
  counter.textContent = count;
};
