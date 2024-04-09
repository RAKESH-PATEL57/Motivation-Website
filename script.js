let loadingIntro = document.querySelector(".starting-loading");
let leftTop = document.querySelector(".leftTop");
let leftBottom = document.querySelector(".leftBottom");
let rightTop = document.querySelector(".rightTop");
let rightBottom = document.querySelector(".rightBottom");

let headerContainer = document.querySelector("header");
let introPage = document.querySelector(".intropage");
let mainContainer = document.querySelector("main");
let footer = document.querySelector("footer");

// window.addEventListener('load', () => {
//     loadingIntro.style.height = "100vh";    
//     loadingIntro.style.width = "100vw";  
//     // loadingIntro.style.display = "none";  
//     loadingIntro.style.zIndex = 0;  
//     loadingIntro.style.transition = ".4s";  
    
//     leftTop.style.animation = "none";
//     leftTop.style.opacity = 0;
//     leftBottom.style.animation = "none";
//     leftBottom.style.opacity = 0;
//     rightTop.style.animation = "none";
//     rightTop.style.opacity = 0;
//     rightBottom.style.animation = "none";
//     rightBottom.style.opacity = 0;
    
//     headerContainer.style.display = "flex";
//     introPage.style.opacity = 1;
//     mainContainer.style.display = "flex";
//     footer.style.display = "flex";

// })

setTimeout( () =>{
    loadingIntro.style.height = "100vh";    
    loadingIntro.style.width = "100vw";  
    // loadingIntro.style.display = "none";  
    loadingIntro.style.zIndex = 0;  
    loadingIntro.style.transition = ".4s";  
    
    leftTop.style.animation = "none";
    leftTop.style.opacity = 0;
    leftBottom.style.animation = "none";
    leftBottom.style.opacity = 0;
    rightTop.style.animation = "none";
    rightTop.style.opacity = 0;
    rightBottom.style.animation = "none";
    rightBottom.style.opacity = 0;
    
    headerContainer.style.display = "flex";
    introPage.style.opacity = 1;
    mainContainer.style.display = "flex";
    footer.style.display = "flex";

},0);
