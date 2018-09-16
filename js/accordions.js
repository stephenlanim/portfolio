/* ========================================
  Accordions
=========================================== */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

These scripts can be used to turn an HTML object into a trigger for an accordion.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


function btnAccordion(trigger, content) {
  // Initially hide accordion content
  $(`${content}`).hide();

  // When trigger is clicked...
  $(`${trigger}`).click(function(e){
    const $clickedTrigger = $(e.target);

    // show accordion content if hidden, close if shown
    $clickedTrigger.parent().find(`${content}`).toggle(200);
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
