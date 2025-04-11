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

document.addEventListener("DOMContentLoaded", () => slider.init());
