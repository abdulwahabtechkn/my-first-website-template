// few code to make the site responsive on mobile
// get item
var menue = document.querySelector("#menue"),
    cancelled = document.querySelector("#cancelled"),
    mainNav = document.querySelector(".main-nav");
    
//event handler
menue.addEventListener('click', () =>{
    mainNav.style.transition ='1s';
    mainNav.style.right = '0';
});

cancelled.addEventListener('click', () => {
    mainNav.style.transition = '1s';
    mainNav.style.right = "-200px";
});

//some effect
// head-title
let headTitle =document.querySelector('.head-title');
headTitle.addEventListener('mouseover',() =>{
    headTitle.firstElementChild.style.color = "#ccc";
});
headTitle.addEventListener('mouseout', () => {
    headTitle.firstElementChild.style.color = "white";
});

// scroll effect
// get element
/*
// nav item
let home = document.querySelector('#nav-home'),
    about = document.querySelector('#nav-about'),
    services = document.querySelector('nav-services'),
    contact = document.querySelector('nav-contact');
    
// general scroll function
let scroller = (target, timeTaken) => {
    let target = document.querySelector(target),
        targetPosition = target.getBoundingClientRect().top,
        startPosition = window.pageYOffset,
        distance = targetPosition - startPosition,
        startTime = null;
        
    let animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        
        var elapsedTime = currentTime - startTime;
        
        
        // ease function from gizma.com/easing
        // it calculate the distance between currentPostion and target position
        //gradually until the scroll reach target position
        function ease(t, b, c, d){
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        requestAnimationFrame(animation);
    }
}*/