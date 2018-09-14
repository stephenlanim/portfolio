// ============================================
//   JavaScript Modal Scripts
// ============================================

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

These scripts can be used for any page that uses JavaScript modals.
Use this document in conjunction with the stylesheet js-modal.css.

These scripts select and manipulate modal objects relative to one another via "DOM traversal," so modal objects do not need IDs in the HTML. This was done using the "this" keyword in JavaScript and jQuery's parent() and find() methods.

This set of code is a very modified version of the methods used in "Create a Modal With HTML, CSS & JavaScript" by Brad Traversy at https://www.youtube.com/watch?v=6ophW7Ask_0.

You can also visit Brad's simplemodal CodePen at https://codepen.io/bradtraversy/pen/zEOrPp to play around with Brad's code on a live page in real time.

Note: Traversy's version does rely on IDs for selecting objects and does not use the "this" keyword or jQuery.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
HTML Object Requirements Per Modal

<!-- Any Parent Container for Set of Modal Objects -->
<div>

  <!--  Modal Trigger -->
  <!-- - If trigger is a simple button -  -->
  <button class="modal-trigger">Open [Object Name]</button>
  <!-- - OR if trigger is a video screenshot - -->
  <button class="modal-trigger vid-modal-trigger text-center"><img src="[image URL]" alt=""></button>

  <!-- Entire Modal Overlay (w/ transparent background) -->
  <div class="modal-overlay">

    <!-- Container Housing Modal Content (white background) -->
    <div class="modal-content-window">

      <!-- Header section for modal content -->
      <div class="modal-header">
        <h4 class="modal-title">[Project Title]</h2>
        <!-- Close Button -->
        <button class="close-btn">&#10006; Close</button>
      </div>

      <!-- Embedded Object -->
      <iframe allowfullscreen frameborder=0 src="[URL for embedded video, calendar, form, web page, etc.]"></iframe>

    </div> <!-- End of .modal-content-window -->
  </div> <!-- End of .modal-overlay -->

</div> <!-- End of modal set -->

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


// -------------------------------
//   Variables
// -------------------------------

// Get any modal trigger button
const $modalTrigger = $("button.modal-trigger");

// Get any modal overlay
const $modalDiv = $("div.modal-overlay");

// Get modal content window
const $modalContent = $("div.modal-content-window");

// -------------------------------
//   Functions
// -------------------------------

// Function for when user clicks modal trigger button
$($modalTrigger).click(function(){
  // Open the modal corresponding to the clicked trigger
  $(this).parent().find(".modal-overlay").css({"display": "block"});
  // $(this).parent().find(".modal-overlay").toggle('scale', 300);
});

// Function for when user clicks close button
$("button.close-btn").click(function(){
  // Close the modal overlay belonging to the clicked close button
  // $(this).parent().parent().css({"display": "none"});
  $(this).parent().parent().parent().toggle('scale', 300);

  // Stop video by replacing src link with same link
  $(this).parent().find("iframe").attr("src", $(this).parent().find("iframe").attr("src"));
});

// Function for when user clicks the area outside the modal content window (i.e. the modal overlay)
$($modalDiv).click(function(e){
  // Close the clicked modal overlay
  // If the modal content window is NOT the target...
  if ($modalDiv.is(e.target)) {
    $(this).toggle('scale', 300);
    // $(this).css({"display": "none"});
    // $(this).find(".modal-content-window").toggle('scale', 300);
    // $(this).delay(300).toggle('scale', 1);

    // Stop video by replacing src link with same link
    $(this).parent().find("iframe").attr("src", $(this).parent().find("iframe").attr("src"));
  }

});

// $($modalDiv).click(function(){
//   // Close the clicked modal overlay
//   // $(this).css({"display": "none"});
//   $(this).toggle('scale', 300);
//
//   // Stop video by replacing src link with same link
//   $(this).parent().find("iframe").attr("src", $(this).parent().find("iframe").attr("src"));
// });
