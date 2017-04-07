$(document).ready(function() {
  //click on the hamburger icon slides out the nav
  $('.burger-container').click(function() {
    $('.burger').toggleClass('open');
    $('.nav').toggleClass('slide_out');
  });

  //if you click off of the menu it closes
  $(window).on('click touchstart', function() {
    $('.burger').removeClass('open');
    $('.nav').removeClass('slide_out');
  });

  // click on the hamburger icon menu closes
  $('.burger-container').on('click touchstart', function(event) {
    event.stopPropagation();
  });

  //click on one of the links in the menu it smoothly scrolls to that section of the page
  $('a[href^="#"]').on('click', function(event) {
   event.preventDefault();
   var target = this.hash;
   var $target = $(target);
   console.log($target);
   $('body, html').animate({
     'scrollTop': $target.offset().top
   }, 300, 'linear');
   });
});
