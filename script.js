$(document).ready(function(){

    //LINKS
    let scroll = $('.scroll')
    scroll.click(function(e){
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });

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

    // ON SCROLL
    // $(window).scroll(function(){
    //     let fadeOutElem = $('.fadeOut');
    //     let positionTop = $(document).scrollTop();
    //     let positionBottom = positionTop + $(window).height();
    //     fadeOutElem.each(function(){
    //         let element = $(this),
    //             offsetTop = element.offset().top;
    //             if(positionTop>offsetTop) element.css('opacity', 1 - (positionTop - offsetTop)/500);
    //     });
    // });








});