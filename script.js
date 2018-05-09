$(document).ready(function(){

    // BURGER MENU
    let isBurger = false
    $('.burger').on('click', function(){
        if (!isBurger){
            $('ul').css('width', '15em');
            $('li').css('display', 'block');
            $('.burger').children().css('margin', '0');
            isBurger = true;
        }
        else{
            $('ul').css('width', '0');
            $('li').css('display', 'none');
            $('.burger').children().css('margin', '5% 0');
            isBurger = false;
        }
    });

    ['.content', 'header'].forEach(item => {
        $(item).on('click', function(){
            if (isBurger){
                $('ul').css('width', '0');
                $('li').css('display', 'none');
                $('.burger').children().css('margin', '5% 0');
                isBurger = false;
            }
        });
    });









});