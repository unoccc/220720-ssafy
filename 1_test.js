const btns = [];
const sampleBtns = [];
for (let k = 0; k < 5; k++) {
  btns.push(document.createElement("button"));
}

for (let i = 0; i < 5; i++) {
  btns[i].setAttribute("class", "sample-btn-" + String(i + 1));
  const txt = document.createTextNode("버튼" + String(i + 1));
  btns[i].append(txt);

  document.querySelector("body").append(btns[i]);

  sampleBtns[i] = document.querySelector(".sample-btn-" + String(i + 1));
}

sampleBtns[0].addEventListener("click", function () {
  alert("안녕 버튼1");
});
sampleBtns[1].addEventListener("click", function () {
  alert("안녕 버튼2");
});
sampleBtns[2].addEventListener("click", function () {
  alert("안녕 버튼3");
});
sampleBtns[3].addEventListener("click", function () {
  alert("안녕 버튼4");
});
sampleBtns[4].addEventListener("click", function () {
  alert("안녕 버튼5");
});
