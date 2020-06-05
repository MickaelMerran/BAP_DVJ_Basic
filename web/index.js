// const slider = $("#project-slider");


// slider
// .slick({
// arrows:false,
// centerMode: true,
// centerPadding: '100px',
// slidesToShow: 1,
// dots:false,
// infinite: true,
// variableWidth: false,
// vertical: true,
// cssEase: 'ease-in-out'

// });
getProject1();
var $slider = $("#project-slider");
var index;
const url = "http://localhost:1337";
let allProject = [];

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    index = (currentSlide + '/' +slidesCount);
    console.log(index);
  };

  $slider.on('init', function(event, slick) {
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick({
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
}

function getProject1() {
  var div = document.createElement('div');
  if  (index >= 1) {
    div.innerHTML = '';
    div.innerHTML +=
        '<span style="display:inline;"><img class="imgone" src="'+url+allProject+PhotoOne[0].url+'"></span>';
    document.getElementById('imageOne').appendChild(div);
  }   if  (index >= 2) {
    div.innerHTML = '';
    div.innerHTML +=
        '<span style="display:inline;"><img class="imgone" src="'+"https://www.w3schools.com/css/img_forest.jpg"+'"></span>';
    document.getElementById('imageOne').appendChild(div);
  }
}

$slider.on('DOMMouseScroll mousewheel whee', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickPrev');
  } else {
    $(this).slick('slickNext');
  }
}));
