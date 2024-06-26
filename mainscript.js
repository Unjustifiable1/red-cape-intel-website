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
  } else if (window.innerWidth > 600) {
    document.getElementById("navLogoContainer").style.height = "5em";
    document.getElementById("navCTA").style.fontSize = "1.5em";
  } else if (window.innerWidth > 400) {
    document.getElementById("navLogoContainer").style.height = "4em";
    document.getElementById("navCTA").style.fontSize = "1em";
  // } else if (window.innerWidth > 250) {
  //   document.getElementById("navLogoContainer").style.height = "3em";
  //   document.getElementById("navCTA").style.fontSize = "1em";
  } else return;
}



// hero automatic slideshow

let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("heroSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides();



// form submission handler - Home Page CTA/Modal Form

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


// form submission handler - Home Page Contact Section Form

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



// benefit dropdowns

let charNum = 60;
let benefitContents = document.querySelectorAll(".benefitContent");

benefitContents.forEach(content => {
    let strongNum = content.textContent.indexOf(':') + 1;
    let strongText = content.textContent.slice(0, strongNum);
    strongText = `<strong class="tw-600 ta-upper">${strongText}</strong>`

    let subText = content.textContent.slice(strongNum).trim();
    let displayText = subText.slice(0,charNum);
    let moreText = subText.slice(charNum);
    content.innerHTML = `${strongText} ${displayText}<span class="benefitDots">...</span><span class="benefitHide benefitMore">${moreText}</span>`;
});

function readMore2(btn) {
  let benefitPost = btn.querySelector('.benefitContent');
  benefitPost.querySelector(".benefitDots").classList.toggle("benefitHide");
  benefitPost.querySelector(".benefitMore").classList.toggle("benefitHide");
}


// responsiveness - remove or add classes on 600px or less screen size

let bentoLargeCards = document.querySelectorAll("#bentoLarge");
let featuresSection = document.getElementById("features");
let featureItems = document.querySelectorAll(".featureItem");


window.addEventListener("resize", function() {
  bentoLargeCards.forEach(card => {
    if (window.innerWidth < 600) card.classList.remove("bentoLarge");
    else card.classList.add("bentoLarge");
  });

  if (window.innerWidth < 600) featuresSection.classList.remove("darkBG");
  else featuresSection.classList.add("darkBG");

  featureItems.forEach(item => {
    if (window.innerWidth < 600) item.classList.add("gradientCard");
    else item.classList.remove("gradientCard");
  })
});


window.addEventListener("load", function() {

  bentoLargeCards.forEach(card => {
    if (window.innerWidth < 600) card.classList.remove("bentoLarge");
  });

  if (window.innerWidth < 600) featuresSection.classList.remove("darkBG");

  featureItems.forEach(item => {
    if (window.innerWidth < 600) item.classList.add("gradientCard");
  })
});