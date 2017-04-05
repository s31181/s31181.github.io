$(document).ready(function() {

  var aboutEl = $('.peek');
  var skillEl = $('.pook');
  var projEl = $('.jook');
  var aboutElOffset = aboutEl.offset().top / 2;
  var skillElOffset = skillEl.offset().top / 2;
  var projElOffset = $('#projects').offset().top - 10;
  var documentEl = $(document);

  documentEl.on('scroll',function(){
    if (documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('peek') ) aboutEl.addClass('a_boo');
  });

  documentEl.on('scroll', function() {
    if (documentEl.scrollTop() > skillElOffset && skillEl.hasClass('pook')) skillEl.addClass('a_boo');
  });

  documentEl.on('scroll', function() {
    if (documentEl.scrollTop() > projElOffset && projEl.hasClass('jook')) projEl.addClass('a_boo');
  });

});
