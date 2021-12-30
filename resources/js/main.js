// Bx Slider

$(document).ready(function(){
  $('.slider').bxSlider();
});

//===========SLIDER BAR START===========

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//===========SLIDER BAR END===========



//===========STICKY MENU START========

$(document).ready(function(){

  //STICKY MENU

  $(".create_sticky_menu").waypoint(function(direction){
      if(direction == "down"){
          $(".navigation_bar").addClass("sticky");
      }
      else{
          $(".navigation_bar").removeClass("sticky");
      }
  });

  //SMOOTH SCROLL FOR IE/ EDGE/ SAFARI
  $("a").on('click', function(event) {

      if(this.hash !== ""){
          event.preventDefault();

          var hash = this.hash;

          $('html,body').animate({
              scrolltop: $(hash).offset().top
              }, 100, function(){
                  window.location.hash = hash;
          });
      }
      
  });
});


//  MOBILE MENU
function openNav(){
  document.querySelector("#mobile_nav").style.width="100%";
}

function closeNav(){
  document.querySelector("#mobile_nav").style.width="0%";
}


//===========STICKY MENU END==========