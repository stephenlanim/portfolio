/* ======================================
    Nav Link Scripts
   ====================================== */

/* === Hamburger Menu === */

// When hamburger menu icon is clicked...
$('.hamburger').click(function(){
   // Convert hamburger icon into X (in CSS)
  $(this).toggleClass('is-active');
  // toggle nav links open or closed
  $('.nav-list').toggle('blind', 400);

});

/* === Anchor Scroll === */

// When a navigation anchor link is clicked...
$('.nav-list a').click( function(e) {

  // Prevent default behavior of jumping to link and adding anchor to URL
  e.preventDefault();
  // Note: Anchor scroll still works when not preventing default, but there is a flicker before the aimation, and the animation speed is off.

  // Animate scrolling to the target anchor within the page body ("top -96" leaves room for sticky navbar)
  $("html, body").animate(
    { scrollTop: $($(this).attr("href")).offset().top -96}, 300);

  // Loop through each nav item
  $('.nav-list a').each( function (index, navURL) {

    // Remove class "active"
    $(this).removeClass('active');

  });

  // Add class "active" to clicked anchor
  $(this).addClass('active');

});

/* === Anchor Link Activator === */
// 09-16-2018: I need to create a function that makes an achor link active not upon clicking but upon the user scrolling to that section of the page, regardless of whether or not they clicked the anchor link to get there.


/* === Nav Link Activator === */
// 09-15-2018: Not currently in use because all links are currently anchors. But I'm keeping this code for if I decide to create more pages within this website.

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
