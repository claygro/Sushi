document.querySelector(".bar").style.display = "flex";
document.querySelector(".all-menu").style.display = "none";

function show() {
  document.querySelector(".all-menu").style.display = "flex";
  document.querySelector(".bar").style.display = "none";
}

function hide() {
  document.querySelector(".all-menu").style.display = "none";
  document.querySelector(".bar").style.display = "flex";
}
