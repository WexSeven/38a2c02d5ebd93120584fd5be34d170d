let slideIndex = 1;
showSlides(slideIndex, 'game');
showSlides(slideIndex, 'other');
// Next/previous controls
function plusSlides(n, type) {
  showSlides(slideIndex += n, type);
}

// Thumbnail image controls
function currentSlide(n, type) {
  showSlides(slideIndex = n, type);
}

function showSlides(n, type) {
  let i;
  let slides = document.getElementsByClassName(type + "Slides");
  let dots = document.getElementsByClassName(type + "dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}