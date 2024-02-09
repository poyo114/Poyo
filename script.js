$(document).ready(function() {
  var btn = $('#buttonUP');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      if ($(window).width() > 600) {
        btn.removeClass('show');
      }
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});


window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.card-img, .card-text, #CStitle');
  var window_height = window.innerHeight;

  elements.forEach(function(element) {
    var element_top = element.getBoundingClientRect().top;

    if (element_top < window_height) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
});
// console.log("JavaScript file is connected!");

// function checkVisibility() {
//   var nameElement = document.getElementById('name');
//   var headerElement = document.getElementById('header');
  
//   // Check if headerElement exists
//   if (headerElement) {
//     var rect = headerElement.getBoundingClientRect();
//     var isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    
//     if (isVisible) {
//       nameElement.style.opacity = "0";
//     } else {
//       nameElement.style.opacity = "1";
//     }
//   } else {
//     // If headerElement doesn't exist, always show nameElement
//     nameElement.style.opacity = "1";
//   }
// }


// window.addEventListener('scroll', checkVisibility);
// window.addEventListener('load', checkVisibility);


// window.addEventListener('scroll', function() {
//   var bird = document.getElementById('bird');
//   bird.style.left = window.scrollY + 'px';
// });



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    var ul = x.getElementsByTagName("ul")[0];
    var children = Array.from(ul.children);
    var firstChild = children.shift(); // Remove the first child from the array
    children.reverse().forEach(child => ul.appendChild(child));
  } else {
    x.className = "topnav";
    var ul = x.getElementsByTagName("ul")[0];
    var children = Array.from(ul.children);
    var firstChild = children.shift(); // Remove the first child from the array
    children.reverse().forEach(child => ul.appendChild(child));
  }
}



var slideIndex = 1;

window.onload = function() {
  showDivs(slideIndex);
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("carousel__image");
  slideIndex = n; // Update slideIndex here
  if (slideIndex > x.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

