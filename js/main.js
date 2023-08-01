// ------------------------------- Dark Mode button -------------------------------

const dayIcon = document.querySelector('.toggle-button-day-image');
const nightIcon = document.querySelector('.toggle-button-night-image');
const checkbox = document.querySelector("input");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark").matches;

const iconToggle = () => {
  dayIcon.classList.toggle('hidden');
  nightIcon.classList.toggle('hidden');
}

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark")
    dayIcon.classList.add("hidden");
    return;
  }
  nightIcon.classList.add("hidden");
}

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
}

checkbox.addEventListener("change", () => {
  themeSwitch();
});

themeCheck();

// ------------------------------- Navigation -------------------------------------

const mobileMenu = document.querySelector(".mobile-menu");

function findPosition(obj) {
  var currenttop = 0;
  if (obj.offsetParent) {
    do {
      currenttop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [currenttop];
  }
}

function scrollToHome() {
  var contactPosition = findPosition(document.getElementById("home"));
  window.scroll({top: contactPosition - 10, behavior: "smooth"});
}

function scrollToAbout() {
  var contactPosition = findPosition(document.getElementById("about"));
  window.scroll({top: contactPosition - 10, behavior: "smooth"});
}

function scrollToContact() {
  var contactPosition = findPosition(document.getElementById("contact"));
  window.scroll({top: contactPosition - 10, behavior: "smooth"});
}

function mobileScrollToHome() {
  mobileMenu.classList.toggle("hidden");
  var contactPosition = findPosition(document.getElementById("home"));
  window.scroll({top: contactPosition - 10, behavior: "smooth"});
}

function mobileScrollToAbout() {
  mobileMenu.classList.toggle("hidden");
  var contactPosition = findPosition(document.getElementById("about"));
  window.scroll({top: contactPosition - 10, behavior: "smooth"});
}

function mobileScrollToContact() {
  mobileMenu.classList.toggle("hidden");
  var contactPosition = findPosition(document.getElementById("contact"));
  window.scroll({top: contactPosition - 10, behavior: "smooth"});
}


// ------------------------------- Animations -------------------------------------

var alreadyAnimated = [];

const callback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !alreadyAnimated.includes(entry.target)) {
      entry.target.classList.add("motion-safe:animate-scrollAnimation");
      alreadyAnimated.push(entry.target);
    } else {
      entry.target.classList.remove("motion-safe:animate-scrollAnimation");
    }
  });
};
  
const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  observer.observe(target);
});

// ------------------------------- Open mobile menu button ------------------------

function openMobileMenu() {
  mobileMenu.classList.toggle("hidden");
}