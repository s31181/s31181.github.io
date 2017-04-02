$(document).ready(function() {
  $('.burger-container').click(function() {
    $('.burger').toggleClass('open');
    $('.nav').toggleClass('slide_out');
    console.log('click');
  });

  $(window).click(function() {
    $('.burger').removeClass('open');
    $('.nav').removeClass('slide_out');
  });
  $('.burger-container').click(function(event) {
    event.stopPropagation();
  });
});
