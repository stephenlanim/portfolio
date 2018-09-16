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

function btnAccordion(triggerClass, contentClass) {

  // Initially hide accordion content
  $(`${contentClass}`).hide();

  // When trigger is clicked...
  $(`${triggerClass}`).click(function(e){
    const $clickedTrigger = $(e.target);

    // show accordion content if hidden, close if shown
    $clickedTrigger.parent().find(`${contentClass}`).toggle(200);
    // rotate arrow in trigger
    $clickedTrigger.parent().find('i').toggleClass('rotateCCW90');

  });
}

/* ========================================
  Project Results Scripts
=========================================== */

btnAccordion(".results-acrdn-trigger", ".project-results");

/* ========================================
  Project Tasks Scripts
=========================================== */

btnAccordion(".task-acrdn-trigger", ".project-tasks");
