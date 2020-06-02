const slider = $("#project-slider");

slider
.slick({
arrows:false,
centerMode: true,
centerPadding: '100px',
slidesToShow: 1,
dots:false,
infinite: true,
variableWidth: false,
vertical: true,
cssEase: 'ease-in-out'

});

slider.on('DOMMouseScroll mousewheel whee', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickPrev');
  } else {
    $(this).slick('slickNext');
  }
}));