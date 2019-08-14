$('.btn-santos').click(function() {
  $('.map-img').attr('src', 'img/Maps D.Santos-01.png');
});

$('.btn-santos1').click(function() {
  $('.map-img').attr('src', 'img/Maps D.Santos-02.png');
});
$('.btn-santos2').click(function() {
  $('.map-img').attr('src', 'img/Maps D.Santos-03.png');
});
$('.btn-santos3').click(function(){
    $('.map-img').attr('src', 'img/Maps D.Santos-04.png');
    });
    $('.btn-santos4').click(function(){
        $('.map-img').attr('src', 'img/Maps D.Santos-05.png');
        });

$('.btn-nia').click(function() {
  $('.map-img').attr('src', 'img/Maps NIA-06.png');
});
$('.btn-nia1').click(function() {
  $('.map-img').attr('src', 'img/Maps NIA-07.png');
});
$('.btn-nia2').click(function() {
  $('.map-img').attr('src', 'img/Maps NIA-08.png');
});


/* To be added for the result*/
$('.btn-submit').click(function() {
  var resultDiv = $('.result').css('display');
  if (resultDiv == "none") {
    $('.result').toggle('slow');
    $('#nov-gallery').toggle('fast');
    window.location.href = '#result';
    resultDiv = $('.result').css('display');
  }
});
