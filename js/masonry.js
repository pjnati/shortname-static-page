$(document).ready(function() {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: 12,
    horizontalOrder: true,
    percentPosition: true
  });
});