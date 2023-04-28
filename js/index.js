$( document ).ready(function() {
  // set the clickable button of shortname
  function widgetButtonResize(){
    $('.widget_sized_btn').each(function(){
      $(this).height($(this).siblings('.sn_info').outerHeight() + $(this).siblings('.sn_dom').outerHeight())
    })
  }
  widgetButtonResize();

  $( window ).on( "resize", function() {
    widgetButtonResize();
  });
  
});