const burgerButton = document.querySelector(".burger__button");
const menuList = document.querySelector(".header__list");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("active");
  menuList.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".header__list") === menuList) {
    return;
  }
  if (e.target.closest(".burger__button") !== burgerButton) {
    menuList.classList.remove("active");
  }
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    burgerButton.classList.toggle("active");
    menuList.classList.toggle("active");
  });
});
