

  
  // For Scrolling Animate
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
   
       reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);



  const sliderContainer = document.querySelector('.mini-slider-container');
  let cardIndex = 0;

  function showCard(index) {
    const cardWidth = document.querySelector('.mini-card').offsetWidth + 20; // Include margin
    sliderContainer.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  function nextCard() {
    cardIndex = Math.min(cardIndex + 1, document.querySelectorAll('.mini-card').length - 1);
    showCard(cardIndex);
  }

  function prevCard() {
    cardIndex = Math.max(cardIndex - 1, 0);
    showCard(cardIndex);
  }

  // Add event listeners for next and previous buttons
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.mini-slider-container').style.width = `${document.querySelectorAll('.mini-card').length * 100}%`;
    document.querySelector('.mini-container').style.display = 'flex';
    showCard(cardIndex);
  });

  // for hamburger
  function showMenu(){
    var element = document.getElementById("sidebar1");

    if (element.style.display === "none") {
        element.style.display = "flex"; // or any other display value you want
       
        
    } else {
        element.style.display = "none";
    }
  }


//Button

const btn = document.querySelectorAll("#Button");
btn.onmousemove = function(e){
  const x = e.pageX - btn.offsetLeft;
  const y =e.pageY- btn.offsetTop;
  btn.style.setProperty('--x',x+'px');
  btn.style.setProperty('--y',y+'px');
}
const btn1 = document.querySelectorAll("#Button1");
btn1.onmousemove = function(e){
  const x1 = e.pageX - btn.offsetLeft;
  const y1 =e.pageY- btn.offsetTop;
  btn.style.setProperty('--x1',x1+'px');
  btn.style.setProperty('--y1',y1+'px');
}

// Script for button 




/*-------------------event slider ----*/
let currentIndex1 = 0;
const totalSlides1 = document.querySelectorAll('.event-slide').length;
const slider1 = document.querySelector('.event-slider');
const intervalTime1 = 4000; // Set the interval time in milliseconds (e.g., 5000ms = 5 seconds)

function nextBlogSlide() {
  currentIndex1 = (currentIndex1 + 1) % totalSlides1;

  updateSlider();
  resetInterval();
}

function prevBlogSlide() {
  currentIndex1 = (currentIndex1 - 1 + totalSlides1) % totalSlides1;

  updateSlider();
  resetInterval();
}

function updateSlider() {
  const translateValue1 = -currentIndex1 * 100;
  slider1.style.transform = `translateX(${translateValue1}%)`;

  // Add zoom effect to the background image
  const currentSlide1 = document.querySelector('.event-slide:nth-child(' + (currentIndex1 + 1) + ')');
  const img1 = currentSlide1.querySelector('img');

}

/*------------------------hovering-----------------------------*/

function displayContent(){
  var element = document.getElementsByClassName("dropdown-content");

  if (element.style.display === "none") {
      element.style.display = "flex"; // or any other display value you want
     
      
  } else {
      element.style.display = "none";
  }
}