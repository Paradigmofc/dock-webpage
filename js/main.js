"use strict"
// КНОПКА "ВВЕРХ"
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



// $(document).ready(function(){
//   animateDiv('.pin1');
//   animateDiv('.pin2');
//   animateDiv('.pin3');
//   animateDiv('.pin4');
//   animateDiv('.pin5');
//   animateDiv('.pin6');
//   animateDiv('.pin7');
//   animateDiv('.pin8');
//   animateDiv('.pin9');
//   animateDiv('.pin10');
// });

// // function makeNewPosition(){
  
// //   // Get viewport dimensions (remove the dimension of the div)
// //   var h = $(window).height() - 500;
// //   var w = $(window).width() - 500;
  
// //   var nh = Math.floor(Math.random() * h);
// //   var nw = Math.floor(Math.random() * w);
  
// //   return [nh,nw];    
  
// // }

// // function animateDiv(myclass){
// //   var newq = makeNewPosition();
// //   $(myclass).animate({ top: newq[0], left: newq[1] }, 10000,   function(){
// //     animateDiv(myclass);        
// //   });
  
// // };