"use strict";

// horizontal card view: change the toggle button label

var buttonLabel,
    buttonAltLabel;

var initializeButtonLabels = (siblings) => {
  if (!buttonLabel) {
    buttonLabel = siblings.children().attr("data-value");
  }
  if (!buttonAltLabel) {
    buttonAltLabel = siblings.children().attr("data-alt-value");
  }
};

$("[id^='multiCollapseContent']").on("shown.bs.collapse", function () {
  var siblings = $(this).parent().siblings()
  initializeButtonLabels(siblings);
  siblings.children().text(
    buttonAltLabel
  );
});

$("[id^='multiCollapseContent']").on("hidden.bs.collapse", function () {
  var siblings = $(this).parent().siblings()
  initializeButtonLabels(siblings);
  siblings.children().text(
    buttonLabel
  );
});

// Enable tooltips everywhere
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
