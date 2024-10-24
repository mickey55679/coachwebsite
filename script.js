function showSideBar(){
    //get sidebar element 
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
let slideIndex = 1;
showSlides(slideIndex);

// Function to change slides
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Function to display the current slide
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
}

// Optional: Auto slideshow
// setInterval(() => {
//   changeSlide(1);
// }, 1000); 
// Toggle between monthly and yearly pricing
const priceToggle = document.querySelector('#priceToggle');
const prices = document.querySelectorAll('.price');

priceToggle.addEventListener('change', function () {
  prices.forEach((price) => {
    if (this.checked) {
      // Assume a 20% discount for yearly pricing
      const currentPrice = price.textContent.match(/\d+/)[0];
      const yearlyPrice = Math.round(currentPrice * 12 * 0.8);
      price.innerHTML = `$${yearlyPrice}<span>/year</span>`;
    } else {
      // Return to monthly pricing
      price.innerHTML = `$${price.dataset.monthly}<span>/month</span>`;
    }
  });
});
