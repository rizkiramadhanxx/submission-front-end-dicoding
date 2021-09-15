function showMenu() {
  document.getElementsByClassName("menu")[0].style.display = "block";
}
const toTop = document.querySelector(".keatas");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
