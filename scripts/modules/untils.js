$(window).scroll(function() {
    var header = $('.main-header');
    if ($(this).scrollTop() > 0) {
      header.addClass('sticky');
    } else {
      header.removeClass('sticky');
    }
  });