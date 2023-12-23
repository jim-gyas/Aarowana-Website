function revealFunction(){
  

  
    window.sr = ScrollReveal({duration:1350, distance:'250px',easing: 'ease-out'});


    sr.reveal('.reveal-left',{origin:'left', reset:false});
    sr.reveal('.reveal-top',{origin:'top', reset:false});
    sr.reveal('.reveal-bottom',{origin:'bottom', reset:false});
    sr.reveal('.reveal-right',{origin:'right', reset:false});

    
    }
   

    // Optionally, you can add an event listener to handle window resizing

      window.addEventListener('load',()=>{
        revealFunction();
      })
  
    
      let currentIndex = 0;
      const totalSlides = document.querySelectorAll('.blog-slide').length;
      const slider = document.querySelector('.blog-slider');
      const intervalTime = 4000; // Set the interval time in milliseconds (e.g., 5000ms = 5 seconds)
      
      function nextBlogSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
      
        updateSlider();
        resetInterval();
      }
      
      function prevBlogSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      
        updateSlider();
        resetInterval();
      }
      
      function updateSlider() {
        const translateValue = -currentIndex * 100;
        slider.style.transform = `translateX(${translateValue}%)`;
      
        // Add zoom effect to the background image
        const currentSlide = document.querySelector('.blog-slide:nth-child(' + (currentIndex + 1) + ')');
        const img = currentSlide.querySelector('img');
      
      }
      // for hamburger
  function showMenu(){
    var element = document.getElementById("sidebar1");
    if (element.style.display === "none") {
        element.style.display = "flex"; // or any other display value you want
    } else {
        element.style.display = "none";
    }
  }

  function displayContent1(){
    var element = document.getElementsByClassName("dropdown-content");
  
    if (element.style.display === "none") {
        element.style.display = "flex"; // or any other display value you want
       
        
    } else {
        element.style.display = "none";
    }
  }