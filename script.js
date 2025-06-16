function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
}

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.width = star.style.height = Math.random() * 3 + 1 + "px";
  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.animationDuration = 2 + Math.random() * 3 + "s";
  return star;
}

function createShootingStar() {
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");
  shootingStar.style.top = Math.random() * window.innerHeight / 2 + "px";
  shootingStar.style.left = window.innerWidth + 100 + "px";
  document.getElementById("starry-background").appendChild(shootingStar);

  shootingStar.style.opacity = "1";
  shootingStar.style.animation = "shooting 1.5s ease-in-out forwards";

  shootingStar.addEventListener("animationend", () => {
    shootingStar.remove();
  });
}

function initStars() {
  const starContainer = document.getElementById("starry-background");
  for (let i = 0; i < 100; i++) {
    starContainer.appendChild(createStar());
  }
  setInterval(() => {
    createShootingStar();
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener("click", () => {
      toggleTheme();
      toggleMenu();
    });
  }

  initStars();
});
