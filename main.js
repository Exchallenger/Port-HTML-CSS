'use strict';


//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight= navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    const target = event.target;
    const link  = target.dataset.link;
    if(link == null){
        return;
    }
    scrollIntoViews(link);
});

const contactme = document.querySelector('.home__contact');
contactme.addEventListener('click', (sc)=>{
    scrollIntoViews('#contact');

})


//Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
     home.style.opacity=1-window.scrollY/homeHeight;
});

//Make arrow button when you click this button, we can go up
const arobtn = document.querySelector(".arrow__btn");
document.addEventListener('scroll',() =>{
    if(homeHeight/2<window.scrollY){
        // arobtn.style.display='inline-block';
        arobtn.classList.add('visible');
    }
    else{
        arobtn.classList.remove('visible');
    }
});
const arobtnHome = arobtn.addEventListener('click',()=>{
    scrollIntoViews("#home");
});





function scrollIntoViews(selector) {
    const scrollTo = document.querySelector(selector); 
    scrollTo.scrollIntoView({behavior:"smooth"});
}


