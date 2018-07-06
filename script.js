// POP-UP OBJECTS
let popUps = [
    {
        name: "Jamie's Riverview Cafe",
        id: 'jamiesriverviewcafe',
        category: 'FREELANCE PROJECTS',
        sideImage: 'images/cafe.png',
        info: 'A website for a family-owned cafe located at Red Deer, Alberta, Canada',
        technologies: ['Wordpress', 'Javascript', 'CSS3'],
        site: 'http://jamiesriverviewcafe.com/',
    },
    {
        name: 'Tic-Tac-Toe',
        id: 'tictactoe',
        category: 'JAVASCRIPT APPS',
        sideImage: 'images/tictac.png',
        info: 'A page where the users battle against the computer in the game of Tic-Tac-Toe.  The robot was programmed to be smart so that the player only gets draws or losses. Be sure enable javascript when playing on mobile devices.',
        technologies: ['JQuery', 'CSS3'],
        site: 'https://jemherrera.github.io/Scribblish-Tic-Tac-Toe/',
        github: 'https://github.com/jemHerrera/Scribblish-Tic-Tac-Toe'
    },
    {
        name: 'Weather App',
        id: 'weather-app',
        category: 'JAVASCRIPT APPS',
        sideImage: 'images/weather.png',
        info: 'A dynamic webpage powered by Apixu  API displaying the current weather information. The page features a big weather icon consisting of objects i.e. the stars, clouds, trees, rain that dynamically evolves depending on the weather condition. The current temperature is also displayed, and can be toggled between Celsius and Farenheit. If a pop-up displays on the screen asking for your current location, please choose allow.',
        technologies: ['JQuery', 'CSS3', 'JSON'],
        site: 'https://jemherrera.github.io/scribblish-weather/',
        github: 'https://github.com/jemHerrera/scribblish-weather'
    },
    {
        name: 'Simple Calculator',
        id: 'calculator',
        category: 'JAVASCRIPT APPS',
        sideImage: 'images/calc.png',
        info: 'A calculator programmed using JavaScript and designed with Bootstrap.  It has the basic calculator functionalites, i.e. simple arithmetic,  decimals, percentage, and clear. The design is influenced by the iphone8 calculator app.',
        technologies: ['Vanilla JavaScript', 'Bootstrap'],
        site: 'https://jemherrera.github.io/Scribblish-Calculator/',
        github: 'https://github.com/jemHerrera/Scribblish-Calculator'
    },
    {
        name: 'Pomodoro Timer',
        id: 'pomodoro',
        category: 'JAVASCRIPT APPS',
        sideImage: 'images/pomodoro.png',
        info: 'A pomodoro clock is a timer used to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.',
        technologies: ['Vanilla JavaScript', 'CSS3'],
        site: 'https://jemherrera.github.io/Scribblish-Pomodoro/',
        github: 'https://github.com/jemHerrera/Scribblish-Pomodoro'
    },
    {
        name: 'The Simon Game',
        id: 'simon',
        category: 'JAVASCRIPT APPS',
        sideImage: 'images/simon.png',
        info: 'An interactive memory game where the user repeats sequence of steps that becomes progressively longer and more complex. Original simon toys were traditionally circular or pie shaped, but slight modifications were made for the purpose of experimenting with css animations.',
        technologies: ['JQuery', 'CSS3 Animations'],
        site: 'https://jemherrera.github.io/Scribblish-Simon/',
        github: 'https://github.com/jemHerrera/Scribblish-Simon'
    },
    {
        name: 'Portfolio Design',
        id: 'portfolio-design',
        category: 'DESIGN TEMPLATES',
        sideImage: 'images/portfolio.png',
        info: 'Here are the design concepts, models, themes and specific elements made for this portfolio, including the previous version of the website. The current design is inspired by the video game Detroit: Become Human.',
        technologies: ['Adobe Photoshop', 'Adobe Illustrator'],
        source: ['images/portfolio-design.png', '363.9%'],
    },
    {
        name: 'Cafe Design',
        id: 'cafe-design',
        category: 'DESIGN TEMPLATES',
        sideImage: 'images/cafe.png',
        info: "A design template for Jamie's Riverview Cafe. The goal is to create an abstract,  black board menu look. Sketches were hand-drawn and traced in Adobe Illustrator.",
        technologies: ['Adobe Photoshop', 'Adobe Illustrator'],
        source: ['images/jamie-design.png', '758.1%']
    },
    {
        name: 'Weather App Design',
        id: 'weather-design',
        category: 'DESIGN TEMPLATES',
        sideImage: 'images/weather.png',
        info: 'A design template for the Weather Application project. The design involves a weather icon that changes based on the current time of the day (day time or night time), the weather condition (cloudy, rain, clear, snow, fog etc.)  and the month of the year (four seasons).   Specific icon for almost every situation has to be created, therefore the process of creating different instances has to be done by creating multiple layers in Adobe Illustrator.',
        technologies: ['Adobe Illustrator'],
        source: ['images/weather-design.png', '282.4%']
    },
]

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