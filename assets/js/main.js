let divCarousel = document.querySelector('.products-img')

function setCarousel() {
  if (window.matchMedia("(max-width: 1280px)").matches) {
    divCarousel.innerHTML = `    
      <div class="swiper-container mySwiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
        <img src="ressources/img/img-chaussure-1-removebg-preview.png" alt="" width="600px">
        </div>
        
        <div class="swiper-slide">
        <img class="margin-bottom-lg"src="ressources/img/img-chaussure-2-removebg-preview.png" alt="" width="600px">
        </div>
        
        <div class="swiper-slide">
        <img src="ressources/img/img-chaussure-4-removebg-preview.png" alt="" width="600px">
        </div>
        
        <div class="swiper-slide">
        <img class="margin-bottom-lg" src="ressources/img/img-chaussure-3-removebg-preview.png" alt="" width="600px>
        </div>
        
      </div>
      <div class="swiper-pagination swiper-pagination2"></div>
    </div>    
        `
    var swiper = new Swiper(".mySwiper2", {
      autoHeight: true,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
      },
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
    });
  } else {
    divCarousel.innerHTML = `
            <img src="ressources/img/img-chaussure-1.jpg" alt="" width="400px">
            <img src="ressources/img/img-chaussure-3.jpg" alt="" width="400px">
            <img src="ressources/img/img-chaussure-2.jpg" alt="" width="400px">
            <img src="ressources/img/img-chaussure-4.jpg" alt="" width="400px">
        `
  }

}
setCarousel()

window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('resize', setCarousel);
});



