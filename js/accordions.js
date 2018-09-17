/* ========================================
  Accordions
=========================================== */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

These scripts can be used to turn an HTML object into a trigger for an accordion.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// 09-16-2018: I'm gonna need to redo how the accordions work. Right now they work using DOM traversal on classes, but that only works well if there is only one trigger-content pair within a container. With multiple content objects in the same container, a given trigger in that container will open ALL the content objects.
// So here are my options:
// 1) Match the trigger and content by ID, which will require turning all triggers into <a> tags with hrefs and giving an ID to every content object.
// 2) Loop through the triggers and add an event listener that oly activates on the content object that has the same index number. This will require less HTML markup going forward, and I can mimic the code I used in the Dashboard App project. I may still use classes to match up the TYPES of triggers and contents.
// I should also write a script to toggle class "active."

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
      // If the index of the clicked trigger matches the current content object
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
