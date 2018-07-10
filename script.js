// POP-UP OBJECTS

let popUps = $.getJSON('data.json', (data) => data);
console.log(popUps);


$(document).ready(function(){
    let scrollTarget = 0;
    $('.box, .wide-box, .free-box').on('click', function(){
        let id = this.id;
        if(this.className == 'box') scrollTarget = popUp('box', id);
        else if(this.className == 'wide-box') scrollTarget = popUp('wideBox', id);
        else scrollTarget = popUp('freeBox', id);
    });
    $('#hide').on('click', function(){
        hidePopUp();
        $('html').scrollTop(scrollTarget);
    });

    // SHOW Pop-up Window
    function popUp(boxType, id){
        let scrollTarget = $('html').scrollTop();
        $('#main').css('display', 'none');
        $('#pop-up').css('display', 'flex').hide().fadeIn(500);
        $('html').scrollTop(0);
        createElements(boxType, id);
        return scrollTarget;
    }

    // Hide Pop-up Window
    function hidePopUp(){
        $('#pop-up').css('display', 'none');
        $('#main').css('display', 'flex').hide().fadeIn(500);
        $('.pop-up-head').remove();
        $('.more-img').remove();
    }

    // Add appropriate html
    function createElements(boxType, id){

        // CREATE HTML STATIC ELEMENTS
        let popUpHead = $('<section />', { class: 'pop-up-head'}),
        moreImg = $('<div />', {class: 'more-img'}),
        headImg = $('<div />', {class: 'head-image'}),
        headText = $('<div />', {class: 'head-text flex-column'}),
        tinyFont = $('<p />', {class: 'tiny-font'}),
        boldSpan = $('<span />', {class: 'bold'}),
        line = '<hr>',
        title = $('<h1 />', {class: 'title-text'}),
        info = $('<p />', {class: 'info sm-margin flex-column'}),
        infoText = $('<span />'),
        technologies = $('<span />', {class: 'bold sm-margin-top'}),
        tech1 = $('<span />'),
        tech2 = $('<span />'),
        tech3 = $('<span />'),
        btnSpan = $('<span />', {class: 'btns sm-margin-top flex-column'}),
        anchorBlk = $('<a />', {
            class: 'btn black-btn',
            href: '',
            target: '_blank',
            text: 'VIEW SITE'
        }),
        anchorWht = $('<a />', {
            class: 'btn white-btn',
            href: '',
            target: '_blank',
            text: 'VIEW GITHUB'
        });
        $('#pop-up').append(popUpHead);
        $(popUpHead).append(headImg, headText);
        $(headText).append(tinyFont, line, title, info);
        $(tinyFont).append(boldSpan);
        $(info).append(infoText, technologies, tech1, tech2, tech3);
        $(technologies).append('Technologies Used:');
        if(boxType == 'freeBox') {
            $(info).append(btnSpan);
            $(boldSpan).html('FREELANCE');
            $(tinyFont).append(' PROJECTS');
            $(btnSpan).append(anchorBlk);
        }
        if(boxType == 'box') {
            $(info).append(btnSpan);
            $(boldSpan).html('JAVASCRIPT');
            $(tinyFont).append(' APPLICATIONS');
            $(btnSpan).append(anchorBlk, anchorWht);
        }
        else if(boxType == 'wideBox'){
            $(boldSpan).html('DESIGN');
            $(tinyFont).append(' TEMPLATES');
            $('#pop-up').append(moreImg);
        }
        
        
        // FILL IN ELEMENTS WITH TEXT AND IMAGES
        for(let object of popUps){
            if(id == object.id){
                $(title).html(object.name);
                $(infoText).html(object.info);
                $('.head-image').css({
                    'background': `url('${object.sideImage}')no-repeat`,
                    'background-size': 'contain'
                });
                $(tech1).html(object.technologies[0]);
                $(tech2).html(object.technologies[1]);
                $(tech3).html(object.technologies[2]);
                if(boxType == 'box' || boxType == 'freeBox'){
                    $(anchorBlk).attr('href', object.site);
                    if(boxType == 'box') $(anchorWht).attr('href', object.github);
                }
                else if(boxType == 'wideBox'){
                    $('.more-img').css({
                        'padding-top': object.source[1],
                        'background': `url('${object.source[0]}') no-repeat`,
                        'background-size': 'contain'
                    });
                }
            }
        }
    }
});




    // ON SCROLL
    // $(window).scroll(function(){
    //     let fadeOutElem = $('.fadeOut');
    //     let positionTop = $(document).scrollTop();
    //     let positionBottom = positionTop + $(window).height();
    //     fadeOutElem.each(function(){
    //         let element = $(this),
    //             offsetTop = element.offset().top;
    //             if(positionTop>offsetTop) element.css('opacity', 1 - (positionTop - offsetTop)/200);
    //     });
    // });