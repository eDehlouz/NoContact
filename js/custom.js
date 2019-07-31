


$('.btn-santos').click(function(){
    $('.map-img').attr('src', 'img/Maps D.Santos-01.png');
    });

$('.btn-nia').click(function(){
    $('.map-img').attr('src', 'img/Maps NIA-06.png');
    });


/* To be added for the result*/
$('.btn-submit').click(function(){
  var resultDiv = $('.result').css('display');
  if (resultDiv == "none"){
    $('.result').toggle('slow');
    window.location.href = '#result';
    resultDiv = $('.result').css('display');
  }
});
