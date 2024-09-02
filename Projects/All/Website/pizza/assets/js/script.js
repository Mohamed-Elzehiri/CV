
(function() {
  "use strict"; // Start of use strict

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    var navbarCollapse = mainNav.querySelector('.navbar-collapse');
    
    if (navbarCollapse) {
      
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      
      var navbarItems = navbarCollapse.querySelectorAll('a');
      
      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener('click', function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function() {

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
  }

})(); // End of use strict





document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Products isotope and filter
   */
  let productsContainer = document.querySelector('.Products-container');
  if (productsContainer) {
    let productsIsotope = new Isotope(productsContainer, {
      itemSelector: '.Products-item'
    });

    let productsFilters = document.querySelectorAll('#Products-flters li');

    productsFilters.forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        productsFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        productsIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        productsIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      });
    });
  }

  /**
   * Initiate products lightbox 
   */
  const productsLightbox = GLightbox({
    selector: '.Products-lightbox'
  });

  /**
   * Initiate products details lightbox 
   */
  const productsDetailsLightbox = GLightbox({
    selector: '.Products-details-lightbox',
    width: '90%',
    height: '90vh'
  });

});
