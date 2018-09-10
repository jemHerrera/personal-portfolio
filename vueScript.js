new Vue({
    el: '#vueApp',
    data: {
        staticContent:{
            intro:{
                title: "JEM HERRERA",
                info: [
                    "Greetings! I’m a web developer based on Calgary, AB, Canada who enjoys creating cool stuff! My immediate goal is to specialize in all aspects of web-development (web design, front and back-end development). My ultimate goal though, is to create something cool that's never been done before! Something crazy where I can throw all my skills and imagination into.",
                    "Click here to show another boring paragraph about this website.",
                    "This website is the compilation of all the skills and knowledge I've learned about web-development. As I gain experience and learn new concepts, I often overhaul this website to apply the new features that I learn. The latest version is made using VueJs, a progressive javaScript framework specifically used for creating dynamic web applications."
                ]
            },
            freelance:{
                title: "Freelance Projects",
                info: "These are the project websites I've created for clients. Most of them are made with content management systems like Wordpress.",
                tags: ["Wordpress", "CSS3"],
                items: [
                    {
                    id: "jamiesriverviewcafe",
	                name: "Jamie's Riverview Cafe",
                    title:"JAMIE'S RIVERVIEW CAFE",
                    category: "FREELANCE PROJECTS",
                    sideImage: "images/cafe.png",
                    info: "A website for a family-owned cafe located at Red Deer, Alberta, Canada. This is my first freelancing project. I used this project as a good opportunity to learn Content Management Sytems like Wordpress and at the same time improve my graphic designing skills. I learned how to customize a blank theme, use a few plug-ins and touch a little bit of PHP and mySQL.",
                    technologies: ["Wordpress", "Javascript", "CSS3"],
                    site: "http://jamiesriverviewcafe.com/"
                    }
                ]
            },
            javascript:{
                title: "Javascript Apps",
                info: "These projects are web applications that I created while fiddling and playing around with javascript. They are all useless though, but cool nonetheless.",
                tags: ["HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap", "SCSS", "Angular", "Vue"],
                items:[
                    {
                        id: "riddleBox",
                        name: "RiddleBox",
                        title: "RIDDLEBOX",
                        skills: ["AngularJs", "SCSS"],
                        category: "JAVASCRIPT APPS",
	                    sideImage: "images/riddleBox.png",
	                    info: "A collection of brain teasers and mind-buggling riddles. I worked on this project while still learning AngularJS and Sass to apply what I learned to an actual web-page and boost my learning process. Here I learned front-end framework basics ie. modules, controllers, views, scopes and directives. This is the first time I ever tried a front-end framework and I was amazed of how organized and maintainable the code has become.",
	                    site: "https://jemherrera.github.io/riddle-box/#!/intro",
	                    github: "https://github.com/jemHerrera/riddle-box"
                    },{
                        id: "tictactoe",
                        name: "Tic-Tac-Toe",
                        title: "TIC-TAC-TOE",
                        skills: ["VueJS", "VanillaJs"],
                        category: "JAVASCRIPT APPS",
                        sideImage: "images/tictac.png",
                        info: "A page where the users battle against the computer in the game of Tic-Tac-Toe.  I programmed the robot to be smart so that the player only gets draws or losses. Creating even a simple artificial intelligence was a daunting task for me as a beginner, but the challenge made me so excited and so fired-up.",
                        site: "https://jemherrera.github.io/Scribblish-Tic-Tac-Toe/",
                        github: "https://github.com/jemHerrera/Scribblish-Tic-Tac-Toe"
                    },{
                        id: "weather-app",
                        name: "Weather App",
                        title: "WEATHER APP",
                        skills: ["JQuery", "JSON", "API"],
                        category: "JAVASCRIPT APPS",
                        sideImage: "images/weather.png",
                        info: "A dynamic webpage powered by Apixu  API displaying the current weather information. The page features a big weather icon consisting of objects i.e. the stars, clouds, trees, rain that dynamically evolves depending on the weather condition. The current temperature is also displayed, and can be toggled between Celsius and Farenheit. This is one of FreeCodeCamp's course projects, where I learned using APIs in general. Essentially, this project is where I learned how to call and manipulate JSON data from an external source, and create dynamic content from it.",
                        technologies: ["JQuery", "CSS3", "JSON"],
                        site: "https://jemherrera.github.io/scribblish-weather/",
                        github: "https://github.com/jemHerrera/scribblish-weather"
                    },{
                        id:"calculator",
                        name: "Simple Calculator",
                        title: "CALCULATOR",
                        skills: ["VanillaJs, Bootstrap"],
                        category: "JAVASCRIPT APPS",
                        sideImage: "images/calc.png",
                        info: "A calculator programmed using JavaScript and designed with Bootstrap.  It has the basic calculator functionalites, i.e. simple arithmetic,  decimals, percentage, and clear. I did not use JQuery on this project, that's because at that time I wanted to learn VanillaJs, and I wanted to gain more experience on traversing through the DOM without using any frameworks. Aditionally, at that time I have no solid grasp on Bootstrap, so I challenged myself to use Bootstrap in styling this project.",
                        site: "https://jemherrera.github.io/Scribblish-Calculator/",
                        github: "https://github.com/jemHerrera/Scribblish-Calculator"
                    },{
                        id: "pomodoro",
                        name: "Pomodoro Timer",
                        title: "POMODORO",
                        skills: ["VanillaJs"],
                        category: "JAVASCRIPT APPS",
                        sideImage: "images/pomodoro.png",
                        info: "A pomodoro clock is a timer used to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Like the Calculator project, I used VanillaJS here to go deeper with Javascript and utilize Javascript's time counting functions.",
                        site: "https://jemherrera.github.io/Scribblish-Pomodoro/",
                        github: "https://github.com/jemHerrera/Scribblish-Pomodoro"
                    },{
                        id: "simon",
                        name: "The Simon Game",
                        title: "SIMON GAME",
                        skills: ["JQuery"],
                        category: "JAVASCRIPT APPS",
                        sideImage: "images/simon.png",
                        info: "An interactive memory game where the user repeats sequence of steps that becomes progressively longer and more complex. Original simon toys were traditionally circular or pie shaped, but slight modifications were made for the purpose of experimenting with css animations. In my opinion this is one of the most challenging projects that I have done, solely because it required me to go deep in learning asynchonous javascript to successfully create in-game timings.",
                        site: "https://jemherrera.github.io/Scribblish-Simon/",
                        github: "https://github.com/jemHerrera/Scribblish-Simon"
                    }
                ]
            },
            design:{
                title: "Design Templates",
                info: "This section is more of a graphic/web design portfolio that shows the processes I went through in designing some of my projects.",
                tags: ["Adobe Illustrator", "Adobe Photoshop"],
                items:[
                    {
                        id : "portfolio-design",
                        name: "Portfolio Design",
                        title : ["PORTFOLIO", "DESIGN"],
                        background : "image-box-1",
                        category: "DESIGN TEMPLATES",
                        sideImage: "images/portfolio.png",
                        info: "Here are the design concepts, models, themes and specific elements made for this portfolio, including the previous dark version of the website. The current design is inspired by the video game Detroit: Become Human. I have always been a fan of minimalist looks and technologist theme and this is what I came up with",
                        skills: ["Adobe Photoshop", "Adobe Illustrator"],
                        source: ["images/portfolio-design.png", "363.9%"]
                    },{
                        id : "cafe-design",
                        name: "Cafe Design",
                        title : ["CAFE", "DESIGN"],
                        background : "image-box-2",
                        category: "DESIGN TEMPLATES",
                        sideImage: "images/cafe.png",
                        info: "A design template for Jamie's Riverview Cafe. The goal is to create an abstract, black board menu look. I had to do a lot of research about good cafe menu designs and draw a lot of hand-drawn sketches in order to design the website. It was challenging to design the website using a Wordpress blank theme, but persistence did the job.",
                        skills: ["Adobe Photoshop", "Adobe Illustrator"],
                        source: ["images/jamie-design.png", "758.1%"]
                    },{
                        id : "weather-design",
                        name: "Weather App Design",
                        title : ["WEATHER", "APPLICATION"],
                        background : "image-box-3",
                        category: "DESIGN TEMPLATES",
                        sideImage: "images/weather.png",
                        info: "A design template for the Weather Application project. The design involves a weather icon that changes based on the current time of the day (day time or night time), the weather condition (cloudy, rain, clear, snow, fog etc.)  and the month of the year (four seasons). I had to create specific object for every typical weather condition, therefore the process of creating different instances has to be done by creating multiple layers in Adobe Illustrator.",
                        skills: ["Adobe Illustrator"],
                        source: ["images/weather-design.png", "282.4%"]
                    }
                ]
            },
            soon:{
                title: "Coming Soon",
                info: "These are the languages that I'm aiming to learn in the near future. My immediate goal is to learn back-end development.",
                tags: ["Php", "MySQL", "NodeJs"]
            }
        },
        lineEffect: true,
        introDrawer: false,
        showPopUp: false,
        path: {},
        pathImage: {}
    },
    computed:{
        setDesignImage: function(){
            return{
                "padding-top": this.path.source[1],
                background: `url(${this.path.source[0]})no-repeat`,
                "background-size": "cover",
                "background-position": "center"
            }
        }
    },
    methods:{
        openPopUp: function($event){
            let id = event.target.id;
			this.showPopUp = true;
            document.body.classList.add("modal-open");
            let vm = this;
            Object.keys(this.staticContent).forEach(function(key){
                if(vm.staticContent[key].hasOwnProperty("items")) {
                    for(var item of vm.staticContent[key].items){
                        if (id == item.id) {
                            vm.path = item;
                            vm.pathImage = {
                                background: `url(${vm.path.sideImage}) no-repeat`
                            }
                        }
                    }
                }
            });
        },
        closePopUp: function(){
            this.showPopUp = false;
            document.body.classList.remove("modal-open");
        },
    },
    beforeMount: function(){
        let vm = this;
        setInterval(function(){
            vm.lineEffect = !vm.lineEffect;
        },5000);
    }
});