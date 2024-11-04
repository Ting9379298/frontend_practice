const toggle = document.querySelector(".toggle");
const list = document.querySelector(".items");

toggle.addEventListener("click", () => {
  if (list.style.display === "block") {
    list.style.display = "none";
    toggle.style.transform = "rotate(0deg)";
  } else {
    list.style.display = "block";
    toggle.style.transform = "rotate(-45deg)";
  }
});
