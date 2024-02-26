let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + totalSlides) % totalSlides;
  slides[currentSlide].style.display = 'block';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 1500);
