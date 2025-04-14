const slider = {
  currentSlide: 0,
  wrapper: document.querySelector(".slider__wrapper"),
  slides: document.querySelectorAll(".slider__slide"),
  totalSlides: document.querySelectorAll(".slider__slide").length,

  init() {
    document
      .querySelector(".slider__button--prev")
      .addEventListener("click", () => this.prevSlide());
    document
      .querySelector(".slider__button--next")
      .addEventListener("click", () => this.nextSlide());
  },

  goToSlide(index) {
    this.currentSlide = index;
    this.wrapper.style.transform = `translateX(-${index * 33.333}%)`;
  },

  nextSlide() {
    const next = (this.currentSlide + 1) % this.totalSlides;
    this.goToSlide(next);
  },

  prevSlide() {
    const prev = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(prev);
  },
};

const navigation = {
  navbar: document.querySelector(".navbar"),
  openButton: document.querySelector(".navbar-open-button"),
  closeButton: document.querySelector(".navbar-close-button"),
  isOpen: false,

  init() {
    this.openButton.addEventListener("click", () => this.open());
    this.closeButton.addEventListener("click", () => this.close());
  },

  open() {
    this.navbar.style.opacity = "1";
    this.navbar.removeAttribute("inert");
    this.openButton.setAttribute("aria-expanded", "true");
    this.isOpen = true;
  },

  close() {
    this.navbar.style.opacity = "0";
    this.navbar.setAttribute("inert", "");
    this.openButton.setAttribute("aria-expanded", "false");
    this.isOpen = false;
  },
};

document.addEventListener("DOMContentLoaded", () => {
  slider.init();
  navigation.init();
});
