const burgerBtnRef = document.querySelector(".burger-btn");
const closeBtnRef = document.querySelector(".close-btn");
const mobMenuRef = document.querySelector(".mob-menu");
// const heroPageRef = document.querySelector(".hero-wrap");

burgerBtnRef.addEventListener("click", function () {
  mobMenuRef.classList.add("is-open");
  // heroPageRef.style.display = "none";
});

closeBtnRef.addEventListener("click", function () {
  mobMenuRef.classList.remove("is-open");
  // heroPageRef.style.display = "unset";
});
