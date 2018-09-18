// ============================================
//   JavaScript Modal Scripts
// ============================================

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

These scripts can be used for any page that uses JavaScript modals.
Use this document in conjunction with the stylesheet js-modal.css.

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
        <!-- Close Button -->
        <button class="close-btn">&#10006; Close</button>
        <!-- Modal Title -->
        <h4 class="modal-title">[Project Title]</h2>
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
const $modalTrigger = $(".modal-trigger");

// Get any modal overlay
const $modalDiv = $("div.modal-overlay");

// Get modal content window
const $modalContent = $("div.modal-content-window");

// Get modal close button
const $modalCloseBtn = $(".modal-content-window .close-btn");

// -------------------------------
//   Modal by Index in DOM
// -------------------------------

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
09-18-2018: These scripts select and manipulate modal objects by their index number/instance in the DOM. So, unlike the DOM traversal scripts I made a few months ago, these ones do not require that the modal-trigger and modal-overlay content be placed in the same precise manner. They just need to be in the same chronological order to match up the index numbers.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function modalByIndex() {
  // Function for when user clicks modal trigger button
  $($modalTrigger).click(function(e){

    // Loop through all modal divs
    for (let i = 0; i < $modalDiv.length; i++) {
      // If the index of the clicked modal trigger matches the current modal div in the loop
      if ($modalTrigger.index(e.target) === i) {

        // Open the modal corresponding to the clicked trigger
        $modalDiv.eq(i).css({"display": "block"});

      } // end of if statement

    } // end of for loop

  });

  // Function for when user clicks close button
  $modalCloseBtn.click(function(e){

    // Loop through all modal divs
    for (let i = 0; i < $modalDiv.length; i++) {
      // If the index of the clicked modal close button matches the current modal div in the loop
      if ($modalCloseBtn.index(this) === i) {
        // Note: I used "this" here to induce event bubbling on the "x" inside the close button.

        // Close the corresponding modal overlay
        $modalDiv.eq(i).toggle('scale', 300);

        // Stop video by replacing src link with same link
        $(this).parent().find("iframe").attr("src", $(this).parent().find("iframe").attr("src"));

      } // end of if statement

    } // end of for loop

  });

  // Function for when user clicks the area outside the modal content window (i.e. the modal overlay)
  $($modalDiv).click(function(e){

    // If the modal div itself is the target...
    if ($modalDiv.is(e.target)) {
      // Note: I used "e.target" here to prevent event bubbling on the $modalDiv's children.

      // Close the clicked modal overlay
      $(this).toggle('scale', 300);

      // Stop video by replacing src link with same link
      $(this).parent().find("iframe").attr("src", $(this).parent().find("iframe").attr("src"));
    }

  });

}

modalByIndex();

// -------------------------------
//   Modal by DOM Traversal
// -------------------------------

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
These scripts select and manipulate modal objects relative to one another via "DOM traversal," so modal objects do not need IDs in the HTML. This was done using the "this" keyword in JavaScript and jQuery's parent() and find() methods. Because these scripts rely on DOM traversal, the objects in the DOM must be arranged in a specific and uniform manner for each set of modal-trigger and modal-overlay plus contents.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function modalByDOMTraversal() {
  // Function for when user clicks modal trigger button
  $($modalTrigger).click(function(){
    // Open the modal corresponding to the clicked trigger
    $(this).parent().find(".modal-overlay").css({"display": "block"});
  });

  // Function for when user clicks close button
  $("button.close-btn").click(function(){
    // Close the modal overlay belonging to the clicked close button
    $(this).parent().parent().parent().toggle('scale', 300);

    // Stop video by replacing src link with same link
    $(this).parent().find("iframe").attr("src", $(this).parent().find("iframe").attr("src"));
  });

  // Function for when user clicks the area outside the modal content window (i.e. the modal overlay)
  $($modalDiv).click(function(e){

    // If the modal div itself is the target...
    if ($modalDiv.is(e.target)) {
      // Close the clicked modal overlay
      $(this).toggle('scale', 300);

      // Stop video by replacing src link with same link
      $(this).parent().find("iframe").attr("src", $(this).parent().find("iframe").attr("src"));
    }

  });

}

// modalByDOMTraversal();

// -------------------------------
//   Modal Carousel
// -------------------------------

function modalCarousel() {

}

// modalCarousel();




/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The above scripts are very modified versions of the methods used in "Create a Modal With HTML, CSS & JavaScript" by Brad Traversy at https://www.youtube.com/watch?v=6ophW7Ask_0.

You can also visit Brad's simplemodal CodePen at https://codepen.io/bradtraversy/pen/zEOrPp to play around with Brad's code on a live page in real time.

At this point, the scripts in this document barely resemble the original scripts copied from Brad Traversy's presentation. Traversy's version relied on IDs for selecting objects to manipulate, which was not convenient for creating multiple modals on the same page, since each set of modal objects would require a new set of four or so IDs.

modalByID() 09-18-2018: There is, however, a way to create modal objects by ID and have it be efficient. It would require making the modal-trigger an <a> each time with an href and giving the modal-overlay an ID that corresponds with the trigger.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
