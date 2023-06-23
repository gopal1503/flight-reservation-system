const inputVal = document.getElementById("input-val");
const btnEn = document.getElementById("btn-en");
const ulEl = document.getElementById("ul-el");
const batch = [];
btnEn.addEventListener("click", function () {
  batch.push(inputVal.value);
  inputVal.value = "";

  func();
});

function func() {
  let newBatch = "";
  for (let i = 0; i < batch.length; i++) {
    newBatch += batch[i];
    console.log(newBatch);
  }
  ulEl.textContent = "<li>" + newBatch + " </li>";
}
