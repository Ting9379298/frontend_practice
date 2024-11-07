const container = document.querySelectorAll(".container");

container.forEach((lists) => {
  const toggle = lists.querySelector(".toggle");
  const list = lists.querySelector(".items");
  const circle = lists.querySelectorAll(".select");
  const font = list.querySelectorAll(".item");

  toggle.addEventListener("click", () => {
    if (list.style.display === "block") {
      list.style.display = "none";
      toggle.style.transform = "rotate(0deg)";
    } else {
      list.style.display = "block";
      toggle.style.transform = "rotate(-45deg)";
    }
  });

  circle.forEach((circle, index) => {
    circleSelect(circle, font[index]);
  });
});

function circleSelect(item, text) {
  item.addEventListener("click", () => {
    if (item.innerHTML === "●") {
      item.innerHTML = "○";
      text.style.fontWeight = "300";
    } else {
      item.innerHTML = "●";
      text.style.fontWeight = "500";
    }
  });
}
