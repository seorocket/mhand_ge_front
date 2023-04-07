$(window).scroll(function() {
    var header = $('.main-header');
    if ($(this).scrollTop() > 0) {
      header.addClass('sticky');
    } else {
      header.removeClass('sticky');
    }
});

$('.all-calendar').on('click', function () {
  const elements = $(this).parents('.open')
  elements.each(function (key) {
    $(elements[key]).removeClass('open')
  })
})