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
  let message = 'весь календарь'
  console.log(elements);
  if(elements.length){
	elements.each(function (key) {
		$(elements[key]).removeClass('open')
	  })
  } else {
	message = 'скрыть календарь'
	$(this).parents('.calendar-container').addClass('open')
	$(this).parents('.new-calendar-section.mobile').addClass('open')
  }
  $('.all-calendar').html(message)
})
$('.select-city-trigger').on('click', function () {
	console.log(1)
	$('.select-city-popup').toggleClass('open')
})

$(function() {
	var tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	$('#tabs .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .tabs-nav li').removeClass('active');
		$(this).parent().addClass('active');
		return false;
	}).filter(':first').click();
 
	$('.tabs-target').click(function(){
		$('#tabs .tabs-nav a[href=' + $(this).attr('href')+ ']').click();
	});
	
	if(window.location.hash){
		$('#tabs-nav a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#" . window.location.hash).offset().top);
	}
});
$(document).ready(function() {
	$('#currentCity').on('click', function(){
		$('.select-city-popup').toggleClass('open')
	})

	$('.close-popup').on('click', function(){
		$(this).parents('.open').removeClass('open')
	})

	$('.close-banner').on('click', function(){
		$(this).parents('.open').removeClass('open')
	})

	if($('.select-city')){
		$('.select-city').select2({
			placeholder: "Город",
			language: "ru",
			dropdownParent: $('#jobModal'),
			width: '100%',
		});
		// $('.select-city').select2({
		// 	placeholder: "Выберите город",
		// 	language: "ru",
		// 	dropdownParent: $('#jobModal'),
		// 	width: '100%',
		// });
	}
	if($('.datepicker').length){
		$.datepicker.regional['ru'] = {
			closeText: 'Закрыть',
			prevText: 'Предыдущий',
			nextText: 'Следующий',
			currentText: 'Сегодня',
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
			dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
			dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
			dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			weekHeader: 'Не',
			dateFormat: 'dd.mm.yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''
		};
		$.datepicker.setDefaults($.datepicker.regional['ru']);
		
		$(".datepicker").datepicker();
	}
	$('.burget-menu').on('click', function () {
		const window_width = $(window).width()
		if(window_width > 768){
			$('.main-header').toggleClass('static')
		}
		$('.mobile-menu').toggleClass('open')
	})

})