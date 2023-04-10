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

$(function() {
	var tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('#tabs .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('#tabs .tabs-nav a[href=' + $(this).attr('href')+ ']').click();
	});
	
	// Отрытие вкладки из хеша URL
	if(window.location.hash){
		$('#tabs-nav a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#" . window.location.hash).offset().top);
	}
});