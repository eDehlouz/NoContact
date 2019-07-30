$('.btn-santos').click(function(){
    $('.map-img').attr('src', 'img/Maps D.Santos-01.png');
    });

$('.btn-nia').click(function(){
    $('.map-img').attr('src', 'img/Maps NIA-06.png');
    });







/* To be added for the result*/


$('.btn-submit').click(function(){
    $('.result').toggle('slow');
    window.location.href = '#result';
    });
