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


