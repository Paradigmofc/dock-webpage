"use strict"
// BUTTON "UP"
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});



/* ===================================
  Rotating Text
====================================== */

$("#js-rotating").Morphext({
  animation: "flipInX",
  separator: ",",
  speed: 3000,
  complete: function() {

}
});