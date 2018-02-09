// main.js
let slider = document.getElementById('slider');
let slides = document.querySelectorAll('.slide');
let rightArrow = document.getElementById('arrow-right');
let leftArrow = document.getElementById('arrow-left');
let picButtons = document.getElementById('pic-buttons');
let picBtns;
let mousePause = false;
let interval;
let slideInterval = 5000;
let slideCount = 0;

createButtons();
slides[0].style.display = "block";
picBtns[0].style.opacity = "1";
setSliderInterval();
mouseHoverPause();
rightArrow.addEventListener('click', function () {
  slideRight();
});

leftArrow.addEventListener('click', function () {
  slideLeft();
});

function createButtons () {
  let btnHtml = '';
  for (let i = 0; i < slides.length; i++) {
    btnHtml += '<div id="pic-btn' + i + '" class="pic-btn"></div>'
  }
  picButtons.innerHTML = btnHtml;
  picBtns = document.querySelectorAll('.pic-btn');
  for (let i = 0; i < picBtns.length; i++) {
    picBtns[i].addEventListener('click', function (event) {
      slideCount = i;
      changeSlide();
    });
  }
}

function slideRight () {
  if(++slideCount == slides.length){
    slideCount = 0;
  }
  changeSlide();
}

function slideLeft () {
  if(--slideCount == -1){
    slideCount = slides.length - 1;
  }
  changeSlide();
}

function changeSlide () {
  for(let i = 0; i < slides.length; i++){
    if( i == slideCount ){
      slides[i].style.display = "block";
      picBtns[i].style.opacity = '1';
    } else {
      slides[i].style.display = "none";
      picBtns[i].style.opacity = '0.5';
    }
  }
}

function setSliderInterval () {
  interval = setInterval(function () { 
    slideRight();
  }, slideInterval);
}

function mouseHoverPause () {
  if(mousePause){
    slider.addEventListener('mouseout', function () {
      setSliderInterval();
    });

    slider.addEventListener('mouseover', function () {
      clearInterval(interval);
    });
  }
}

