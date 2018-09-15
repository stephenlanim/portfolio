/* ========================================
  Accordions
=========================================== */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

These scripts can be used to turn an HTML object into a trigger for an accordion.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* ========================================
  Project Tasks Scripts
=========================================== */

// Initially hide list of project tasks
$(".project-tasks").hide();

// When Project Tasks trigger is clicked...
$(".pd-acrdn-trigger").click(function(){
  // show list of project tasks
  $(this).parent().find(".project-tasks").toggle(200);
});
