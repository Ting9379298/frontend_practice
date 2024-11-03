const brown = document.getElementById("color-1");
const blue = document.getElementById("color-2");
const green = document.getElementById("color-3");
const show = document.getElementById("show-color");

brown.addEventListener("click", () => updateColor("brown"));
blue.addEventListener("click", () => updateColor("blue"));
green.addEventListener("click", () => updateColor("green"));

function updateColor(color) {
  show.style.backgroundColor = color;
}
