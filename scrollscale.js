$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var targetDiv = $('.content-behind');
  var targetDivOffset = targetDiv.offset().top;
  var targetDivHeight = targetDiv.height();
  var specificScrollStart = targetDivHeight - 1000;
  var opacity = 1;

  if (scroll >= specificScrollStart) {
      if (scroll <= (targetDivOffset + targetDivHeight)) {
          opacity = 1 - 2 * (scroll - specificScrollStart) / (targetDivHeight / 2);
      } else {
          opacity = 0;
      }
  }
  $('.overlay').css({
      'opacity': opacity
  });
});


$(document).ready(function() {
  var p1 = $('.p1');
  var initialPosition = p1.offset().top - 100;
  var minScale = 0.35;
  var maxScale = 1.0;

  if ($(window).width() > 768) {
    $(window).scroll(function() {
      var scrollPosition = $(window).scrollTop();
      var scale = 1 - (scrollPosition - initialPosition) / 300;
      scale = Math.max(minScale, Math.min(maxScale, scale));
      p1.css('transform', 'scale(' + scale + ')');
    });
  } else {
    p1.css('transform', 'none');
  }
});




