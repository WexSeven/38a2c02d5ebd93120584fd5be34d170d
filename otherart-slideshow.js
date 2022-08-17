let otherSlideIndex = 1;
showOtherSlides(otherSlideIndex);
// Next/previous controls
function plusOtherSlides(n) {
  showOtherSlides(otherSlideIndex += n);
}

// Thumbnail image controls
function currentOtherSlide(n) {
  showOtherSlides(otherSlideIndex = n);
}

function showOtherSlides(n) {
  let j;
  let otherSlides = document.getElementsByClassName("myOtherSlides");
  let otherDots = document.getElementsByClassName("dotOther");
  if (n > otherSlides.length) { otherSlideIndex = 1 }
  if (n < 1) { otherSlideIndex = otherSlides.length }
  for (j = 0; j < otherSlides.length; j++) {
    otherSlides[j].style.display = "none";
  }
  for (j = 0; j < otherDots.length; j++) {
    otherDots[j].className = otherDots[j].className.replace(" active", "");
  }
  otherSlides[otherSlideIndex - 1].style.display = "block";
  otherDots[otherSlideIndex - 1].className += " active";
}