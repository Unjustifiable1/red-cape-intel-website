// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// When the user scrolls down 50px from the top of the document, resize the header logo and contact button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navLogoContainer").style.height = "3em";
    document.getElementById("navCTA").style.fontSize = "1em";
  } else {
    document.getElementById("navLogoContainer").style.height = "5em";
    document.getElementById("navCTA").style.fontSize = "1.5em";
  }
}



// hero automatic slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("heroSlides");
  // let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}




// form submission handler

window.addEventListener("load", function() {
  const form1 = document.getElementById('form-id01');
  form1.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form1);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Success! We'll contact you soon. Thank you!");
    })
  });
});

window.addEventListener("load", function() {
  const form2 = document.getElementById('form-id02');
  form2.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form2);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Success! We'll contact you soon. Thank you!");
    })
  });
});