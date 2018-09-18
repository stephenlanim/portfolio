/* ========================================
  Accordions
=========================================== */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

These scripts can be used to turn an HTML object into a trigger for an accordion.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// Function to open accordions by matching index number of trigger and content
function accordionByIndex(triggerClass, contentClass) {
  // Get accordion triggers
  const $accordionTriggers = $(`${triggerClass}`);
  // Get content objects
  const $accordionContent = $(`${contentClass}`);

  // Initially hide accordion content of indicated class
  $accordionContent.hide();

  // When trigger is clicked...
  $accordionTriggers.on('click', function(e){
    // Get the clicked trigger object
    const $clickedTrigger = $(e.target);

    // Loop through all content objects of this class
    for (let i = 0; i < $accordionContent.length; i++) {
      // If the index of the clicked trigger matches the current content object in the loop
      if ($accordionTriggers.index(e.target) === i) {
        // Toggle class "active" on the matched trigger
        $clickedTrigger.toggleClass('active');
        // Toggle open/close the matched content object
        $accordionContent.eq(i).slideToggle(200);
        // Rotate arrow in clicked trigger
        $clickedTrigger.find('i').toggleClass('rotateCCW90');
      } // end of if statement

    } // end of for loop

  }); // end of click function
}

// This version uses DOM traveral and only works if a trigger-content pair is the only one in the container.
function btnAccordion(triggerClass, contentClass) {

  // Initially hide accordion content
  $(`${contentClass}`).hide();

  // When trigger is clicked...
  $(`${triggerClass}`).click(function(e){
    const $clickedTrigger = $(e.target);

    // Toggle class "active"
    $clickedTrigger.toggleClass('active');
    // show accordion content if hidden, close if shown
    $clickedTrigger.parent().find(`${contentClass}`).toggle(200);
    // rotate arrow in trigger
    $clickedTrigger.parent().find('i').toggleClass('rotateCCW90');

  });
}

// Future accordion = accordionByID(): Match the trigger and content by ID, which will require turning all triggers into <a> tags with hrefs and giving an ID to every content object. This would allow a developer to create new accordions in just the HTML without having to name specific classes in the JS file.

// Future accordion = groupAccordion(): Create a version of accordions similar to ZURB Foundation that group multiple panels in the same accordion together. When the user clicks open an panel, all others in that same accordion close.

// Better Idea = accordionGroupByID(): Combine accordionByIndex with by ID. Wrap each set of accordion panels in an accordion with an ID. Then continue having the triggers and content be matched by index number but by only looping WITHIN the accordion of the parent ID.

/* ========================================
  Project Results Scripts
=========================================== */

// btnAccordion(".results-trigger", ".project-results");
accordionByIndex(".results-trigger", ".project-results");

/* ========================================
  Project Summary Scripts
=========================================== */

// btnAccordion(".tasks-trigger", ".project-tasks");
accordionByIndex(".summary-trigger", ".project-summary");

/* ========================================
  Project Tasks Scripts
=========================================== */

// btnAccordion(".tasks-trigger", ".project-tasks");
accordionByIndex(".tasks-trigger", ".project-tasks");
