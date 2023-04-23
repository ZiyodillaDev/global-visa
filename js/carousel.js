$(".hero_carousel").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow:
    ' <div class=" arrow slider_btn slider_prev "><img src="./images/left-arrow.png" alt="" width="30"></div>',
  nextArrow:
    '<div class=" arrow slider_btn slider_next "><img src="./images/right-arrow.png" alt="" width="30" ></div>',
  speed: 2500,
});
