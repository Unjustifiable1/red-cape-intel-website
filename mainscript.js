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