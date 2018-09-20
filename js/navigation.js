/* ======================================
    Nav Link Scripts
   ====================================== */

/* === Hamburger Menu === */
// Funciton to open and close a hamburger menu.

function hamburgerToggle() {
  // When hamburger menu icon is clicked...
  $('.hamburger').click(function(){
     // Convert hamburger icon into X (in CSS)
    $(this).toggleClass('is-active');
    // toggle nav links open or closed
    $('.nav-list').toggle('blind', 400);

  });
}

// Call function
hamburgerToggle();

/* === Anchor Scroll === */
// Function to animate scrolling down to an anchor tag when its nav link is clicked

function anchorScroll(){

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

}

// Call function
anchorScroll();

/* === Anchor Link Activator === */
// 09-16-2018: I need to create a function that makes an achor link active not upon clicking but upon the user scrolling to that section of the page, regardless of whether or not they clicked the anchor link to get there.


/* === Nav Link Activator === */
// Function to get make the nav link that matches the current URL active

// 09-15-2018: Not currently in use because all links are currently anchors. But I'm keeping this code for if I decide to create more pages within this website.

function navLinkActivator() {

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

}

// Call function
// navLinkActivator();

/* === Courteous Navbar === */
// Function to make the sticky navbar disappear when user scrolls down and reappear when user scrolls up.

function courteousNavbar() {

  // Get the navbar
  const $navbar = $('.navbar');

  // Set the initial scroll position as 0
  let initScrollPos = 0;

  // When the user scrolls...
  $(window).on('scroll', function () {

    // Get the current scroll position
    const $curScrollPos = $(this).scrollTop();

    // If the current scroll position is further down the page than the initial position before scrolling (i.e. scrolling down) and the scroll position has reached passed the navbar's natural height (105px)...
    if ($curScrollPos > initScrollPos && $curScrollPos > 105) {

      // Slide the navbar out of the user's way and make sure it's invisible
      $navbar.css({'transform': 'translateY(-100%)', 'visibility': 'hidden'});

    }
    // Else if the current scroll position is further up the page than 10 pixels from the initial position (i.e. scrolling up)...
    else if ($curScrollPos < (initScrollPos - 10)) {

      // Slide the navbar into view and make sure it's visible
       $navbar.css({'transform': 'translateY(0)', 'visibility': 'visible'});
    }
    // Reset the initial scroll position to where the scrollbar is now.
    initScrollPos = $curScrollPos;

  });

}

// Call function
courteousNavbar();
