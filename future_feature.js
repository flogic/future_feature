jQuery(function($) {
  div = $('<div class="futureproof"><p style="font-family:Helvetica,Arial,sans-serif; font-weight:bold; font-size: 1.5em;">Future Feature</p></div>');
  $(".future_feature").each(function(i) {
    offset = $(this).offset();
    var id = "futureproof_" + i;
    $(div).clone().css({
      "z-index": 1000, 
      position: "absolute", 
      top: offset.top,
      left: offset.left,
      width: $(this).outerWidth(),
      height: $(this).outerHeight(),
      "background-color": "#000", 
      opacity: 0.4, 
      filter: "alpha(opacity=40)", 
      color: "#fff"
    }).attr("id", id).insertBefore($(this));
    $(this).resize(function() {
      $("#"+id).css({
        width: $(this).outerWidth(),
        height: $(this).outerHeight()
      });
    });
  });
  $(window).resize(function() {
    $(".future_feature").resize();
  });
});
