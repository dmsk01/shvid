AOS.init();

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
    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    const targetElement = document.getElementById(targetId.substring(1));
    let scrollToPx = Math.floor(targetElement.offsetTop - 120);
    if (targetId === "#hero") {
      scrollToPx = 0;
    }

    window.scrollTo({ top: scrollToPx, behavior: "smooth" });
    console.log(targetElement, scrollToPx);

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

const swiper = new Swiper(".swiper", {
  // Optional parameters
  spaceBetween: 6,
  slidesPerView: "auto",
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// Vimeo player

$("body")
  .on("click", ".vimeo-launch", function () {
    let videoID = $(this).data("vimeo-id"),
      $video = '<div id="vimeo-pop-container"><div><span class="vimeo-close"></span><iframe src="https://player.vimeo.com/video/' + videoID + '/?title=1&amp;byline=1&amp;portrait=0&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>';
    $("body").append($video);
  })

  .on("click", ".vimeo-close", function () {
    $("#vimeo-pop-container").remove();
  });
