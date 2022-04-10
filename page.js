// ######################################################################

let container = document.getElementById("container");
let cone = document.getElementById("cone");
let icons = document.querySelectorAll(".icons");

const units = [];

for (i = 0; i < 55; i++) {
  units[i] = document.createElement("div");
  units[i].classList.add("unit", "pos-center");
  units[i].style.cssText = `
        transform: rotateY(${i * (360 / 55)}deg) translate3D(-50%, -50%, 50px);
        animation-delay: ${i * 0.1}s;
        `;
  cone.appendChild(units[i]);
}

function set3D(parent) {
  parentWidth = document.querySelector(`.${parent}`).clientWidth;
  let front = document.querySelector(`.${parent} .side.front`);
  let left = document.querySelector(`.${parent} .side.left`);
  let back = document.querySelector(`.${parent} .side.back`);
  let right = document.querySelector(`.${parent} .side.right`);

  front.style.transform = `translateZ(${parentWidth * 0.5}px)`;
  left.style.transform = `rotateY(90deg) translateZ(${parentWidth * 0.5}px)`;
  back.style.transform = `rotateY(180deg) translateZ(${parentWidth * 0.5}px)`;
  right.style.transform = `rotateY(270deg) translateZ(${parentWidth * 0.5}px)`;
}

set3D("cone-cube");
set3D("middle");
set3D("kara");
set3D("end-cube");

// start slide show

let slider = [
  `<a href="#"> <img src="images/web-4.jpg" alt=""></a>`,
  `<a href="#"><img src="images/web-3.jpg" alt=""></a>`,
  `<a href="#"><img src="images/web-2.jpg" alt=""></a>`,
  `<a href="#"><img src="images/web-1.jpg" alt=""></a>`,
];

let slide_container = document.querySelector(".slide-box");
i = 0;
slide_container.innerHTML += slider[0];

function show() {
  slide_container.innerHTML = slider[i];
  i++;
  if (i > slider.length - 1) {
    i = 0;
  }
}

setInterval(show, 5000);

// *********** swiper All product

var swiper = new Swiper(".mySwiper1", {
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    // when window width is >= 320px
    375: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },

    320: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
  },
});
// &&&&&&&&&&&&& swiper main product

var swiper = new Swiper(".mySwiper2", {
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 15,
      slidesPerGroup: 4,
    },

    768: {
      slidesPerView: 4.5,
      spaceBetween: 18,
      slidesPerGroup: 4,
    },

    425: {
      slidesPerView: 2.7,
      spaceBetween: 22,
      slidesPerGroup: 1,
    },

    375: {
      slidesPerView: 2.4,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },

    320: {
      slidesPerView: 2.3,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// *********** swiper lastes product

var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    // when window width is >= 320px
    375: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },

    320: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  responsive: true,
});
