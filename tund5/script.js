$(document).ready(function(){
    $('img').css({'width':'20vw'});
    $('li').css({'list-style-type':'none', 'width':'200px'});

    let selectPic = $('.active').attr('src');
    $('#hide').click(hide);
    $('#next').click(forward);
    $('#prev').click(backward);

    let elementsArray = document.querySelectorAll("img");

    elementsArray.forEach(function(elem) {
        elem.addEventListener("img", function() {
            alert("a");
        });
    });

    $(document).keypress(function(event){
        console.log(event.keyCode);
    });

    console.log(selectPic);

    //$('.big-image').html('<img src="'+ selectPic + '">').hide().fadeIn(1500).fadeOut(1000).slideDown().slideUp().show();
    $('.big-image').html('<img src="'+ selectPic + '">').hide().fadeIn(1500);
    /*$('.big-image').html('<img src="'+ selectPic + '">').animate({
        'duration':'2000',
        'width':'10vw',
        'opacity': '0.5'
    });*/
    function hide(){
        $('.big-image').html('<img src="'+ selectPic + '">').slideToggle(1000);
    }
    function backward(){
        let currentPic = $('img.active');
        let selectedPic = $('img.active').prev();

        if(selectedPic.length){
            $('.big-image').html('<img src="'+ selectedPic.attr('src') + '">').hide().fadeIn(1500);
        } else{
            selectedPic = $('#picContainer img').siblings().last();
            $('.big-image').html('<img src="'+ selectedPic.attr('src') + '">').hide().fadeIn(1500);
            $('.big-image img').css({'width':'200px'});
        }

        selectedPic.addClass('active');
        currentPic.removeClass('active');

    }

    function forward(){
        let currentPic = $('img.active');
        let selectedPic = $('img.active').next();
        if(selectedPic.length){
            $('.big-image').html('<img src="'+ selectedPic.attr('src') + '">').hide().fadeIn(1500);
        } else{
            selectedPic = $('#picContainer img').siblings().first();
            $('.big-image').html('<img src="'+ selectedPic.attr('src') + '">').hide().fadeIn(1500);
            $('.big-image img').css({'width':'200px'});
        }
        selectedPic.addClass('active');
        currentPic.removeClass('active');

    }



});