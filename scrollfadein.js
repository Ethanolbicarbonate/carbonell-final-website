$(document).ready(function() {
    $(window).on('scroll', function() {
      $('.animateDiv').each(function() {
        const bottom_of_object = $(this).position().top + $(this).outerHeight();
        const bottom_of_window = $(window).scrollTop() + $(window).height() + 200;
        if (bottom_of_window > bottom_of_object) {
          $(this).addClass('fadeIn');
        }
      });
    });
  });  