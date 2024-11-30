let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

// Increase or decrease the value of scrollLeft by the appropriate number of pixels
scrollContainer.addEventListener('wheel', function (e) {
  e.preventDefault();
  let scrollAmount = 200; // Scroll amount (in pixels)

  if (e.deltaY > 0) {
    // Scroll to the right
    scrollContainer.scrollLeft += scrollAmount;
  } else {
    // Scroll to the left
    scrollContainer.scrollLeft -= scrollAmount;
  }
  scrollContainer.style.scrollBehavior = 'auto';
});

nextBtn.addEventListener('click', function () {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener('click', function () {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft -= 900;
});
