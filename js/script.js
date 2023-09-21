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
    burgerButton.classList.remove("active");
  }
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    burgerButton.classList.remove("active");
    menuList.classList.remove("active");
  });
});

const heroVideo = document.getElementById("hero-video");

heroVideo.onload = () => {
  heroVideo.onplay();
};

// Hero video ====

const heroVideoButton = document.getElementById("hero-video-button");

heroVideoButton.addEventListener("click", () => {
  console.log("click");
});

fsLightbox.props.disableThumbs = true;

// const instance = new FsLightbox();
// instance.props.sources = [document.getElementById("vimeo")];
