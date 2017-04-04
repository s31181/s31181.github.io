$(document).ready(function() {
  $('.burger-container').click(function() {
    $('.burger').toggleClass('open');
    $('.nav').toggleClass('slide_out');
    console.log('click');
  });

  $(window).click(function() {
    $('.burger').removeClass('open');
    $('.nav').removeClass('slide_out');
    console.log('i took a shit');
  });
  $('.burger-container').click(function(event) {
    event.stopPropagation();
    console.log('holy crap');
  });

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
