var count = 0;
$(".navbar-toggler-icon").click(function(e) {
  if (count == 0) {
    $('html, body').css({
      overflow: 'hidden',
      height: '100%',
    });
    count++;
  } else {
    $('html, body').css({
      overflow: 'visible',
      height: 'auto'
    });
    count = 0;
  }
});

$('.btn-nov').click(function() {
  $("html, body").animate({
    scrollTop: $('#nov').offset().top
  }, 1000);
});

$('.btn-santos').click(function() {
  $('.btn-nia').removeClass("active");
  $('.btn-santos').addClass("active");
  $('#carouselSantos').css('display', 'block');
  $('#carouselNIA').css('display', 'none');

});

$('.btn-nia').click(function() {
  $('.btn-santos').removeClass("active");
  $('.btn-nia').addClass("active");
  $('#carouselSantos').css('display', 'none');
  $('#carouselNIA').css('display', 'block');

});

$(document).ready(function() {
  $('body').append('<div id="toTop" class="btn btn-info btn-toTop"><img src="img/arrow-up.png" class="toTop-icon"></div>');
  $(window).scroll(function() {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});

$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });



/* REMOVE THIS PART AND ADD THEM IN THE custom069b.js FILE*/
$('.btn-submit').click(function() {
  if ($.trim($('.form-control').val()) != '') {
    var resultDiv = $('.result').css('display');
    if (resultDiv == "none") {
      $('.result').toggle('slow');
      $('#nov-gallery').toggle('fast');
      $('#plate-gallery').toggle('fast');
      window.location.href = '#result';
      resultDiv = $('.result').css('display');
    }
  }
});
