// Loader
setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 2000);
var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("dissapear");
}

// Navbar Shrink

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").classList.add("navbar-shrink");
  } else {
    document.getElementById("navbar").classList.remove("navbar-shrink");
  }
}

// Backtop
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// form
const elForm = document.querySelector(".js-form");
const elName = document.querySelector(".js-name");
const elLasName = document.querySelector(".js-lastname");
const elPhone = document.querySelector(".js-phone");
const elText = document.querySelector(".js-text");
const elBtn = document.querySelector(".js-btn");

let arr = [
  {
    name: "Ali",
    lastName: "Jasurov",
    Phone: "90123456789",
    Text: "USA ga dam olgani borish",
  },
  {
    name: "Sardor",
    lastName: "Nosirov",
    Phone: "99987654321",
    Text: "Dubai ga dam olgani borish",
  },
];
elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let user = {
    name: elName.value,
    lastName: elLasName.value,
    Phone: elPhone.value,
    Text: elText.value,
  };
  arr.push(user);
  localStorage.setItem("user", JSON.stringify(arr));
  elName.value = "";
  elLasName.value = "";
  elPhone.value = "";
  elText.value = "";
});

// Video player

const video = document.querySelector(".video-bg");
const pauseVideo = document.querySelector(".pause");
const playVideo = document.querySelector(".replay");

pauseVideo.addEventListener("click", (evt) => {
  evt.preventDefault();
  video.pause()
  pauseVideo.style.display = "none";
  playVideo.style.display = "block"
});
playVideo.addEventListener("click", (evt) => {
  evt.preventDefault();
  video.play()
  playVideo.style.display = "none";
  pauseVideo.style.display = "block"
});

// Title 

