/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};



/*========== scroll sections active link ==========*/
// Get all header links
const headerLinks = document.querySelectorAll('.navbar a');

// Function to add/remove active class
function updateActiveLink() {
  for (const link of headerLinks) {
    const href = link.getAttribute('href');
    const section = document.querySelector(href);

    // Check if section is visible (partially or fully) in viewport
    const isVisible = isElementInViewport(section);
    console.log(section);
    if (isVisible) {
      link.classList.remove('passive');
      link.classList.add('active');
    } else {
      link.classList.remove('active');
      link.classList.add('passive');
    }
  }
}

// Helper function to check element visibility--
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      ((rect.top <= 0 && rect.bottom >= 0) ||
      (rect.top >= 0 && rect.bottom <= 0 + (window.innerHeight || document.documentElement.clientHeight))) &&
      ((rect.left <= 0 && rect.right >= 0) ||
      (rect.left >= 0 && rect.right <= 0 + (window.innerWidth || document.documentElement.clientWidth)))
  );
}

// Add event listener for scrolling--
window.addEventListener('scroll', updateActiveLink);

// Call updateActiveLink initially to handle initial page load--
updateActiveLink();

const header = document.querySelector('header'); // Get the header element
const logo = document.querySelector('.logo'); // Get the header element
const links = document.querySelectorAll('.navbar a'); // Get the header element

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY || window.pageYOffset;// Get scroll position

  if (scrollY > header.offsetHeight+250) {
    links.forEach(link => link.classList.add('inViewLinks'));
    document.querySelector('#DarkMode-icon').setAttribute('style','color:#19488a')
    logo.classList.add('hidden');
  } else {
    links.forEach(link => link.classList.remove('inViewLinks'));
    document.querySelector('#DarkMode-icon').setAttribute('style','color:bisque')
    logo.classList.remove('hidden');
  }
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
  
});


    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/

    

/*========== swiper ==========*/


/*========== dark light mode ==========*/
let darkModeIcon= document.querySelector('#DarkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};
//custom js
{/* <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"> </script> */}

/*========== scroll reveal ==========*/
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200

 });
 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img img, .Skills-container, .project-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
 ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });




