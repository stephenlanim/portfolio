/* ======================================
    Nav Link Activator
   ====================================== */

   // Variables
   const pageURL = window.location.href.toLowerCase();

   // Make nav link active
   // Loop through each nav item
   $('.nav-list a').each( function (index, navURL) {
     const $navURL = $(this).attr('href').toLowerCase();

   // If nav link URL matches current page URL...
     if (pageURL.includes($navURL)) {
       // add class "active" to nav link
       $(this).addClass('active');
     }
     // If current page URL is the home page without "index.html" specified
     else if (pageURL.endsWith('portfolio/')) {
       // add class "active" to the first nav link (for the dashboard)
       $('.nav-item:first-child').addClass('active');
     }
     // else remove "active" class from nav link
     else {
       $(this).removeClass('active');
     }
   });

  // When hamburger menu icon is clicked...
  $('.hamburger').click(function(){
     // Convert hamburger icon into X (in CSS)
    $(this).toggleClass('is-active');
    // toggle nav links open or closed
    $('.nav-list').toggle('blind', 400);

  });

  // When a navigation link is clicked...
  $('.nav-list a').click( function(e) {
    // Prevent
    event.preventDefault();

    // Animate scrolling to the target within the page body
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top }, 300);

  });
