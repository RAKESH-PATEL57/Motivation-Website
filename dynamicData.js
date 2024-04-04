// creating dynamic datas or card from json file
"use strict"
import apiList from "./ApiList.json" with {type: 'json'};
let nextBtn = document.querySelector("#nextBtn");
let prevBtn = document.querySelector("#prevBtn");

let firstbrd = document.querySelector(".motivationCardContainer .firstbrd");
let secondbrd = document.querySelector(".motivationCardContainer .secondbrd");
let thirdbrd = document.querySelector(".motivationCardContainer .thirdbrd");
let fourthbrd = document.querySelector(".motivationCardContainer .fourthbrd");

var apiLength = apiList.length;

let motivationCardContainer = document.querySelector(".motivationCardContainer");

gettingDataFromJson(apiList[0]);  // for showing the first motivation
var count = 1;

nextBtn.addEventListener("click", () => {
    if(count == apiLength-1)
    {
        gettingDataFromJson(apiList[count]);
        count = 0;
    }
    else
    {
        gettingDataFromJson(apiList[count]);
        count++;
    }
});

prevBtn.addEventListener("click", () => {
    if(count == 0)
    {
        gettingDataFromJson(apiList[count]);
        count = apiLength-1;
    }
    else
    {
        gettingDataFromJson(apiList[count]);
        count--;
    }
});

var test = 0;

async function gettingDataFromJson(allMotivationData)
{
    const apiData = await fetch(allMotivationData.link);
    const allMotivationNamesArray = await apiData.json();


    let length = allMotivationNamesArray.length;  
    let imageSource = (allMotivationNamesArray[0].image).slice(1);

    loadingMotv(length, allMotivationData);
        
    }


function loadingMotv(length, allMotivationData)
{
    firstbrd.classList.add("loadFirstbrd");
    secondbrd.classList.add("loadSecondbrd");
    thirdbrd.classList.add("loadThirdbrd");
    fourthbrd.classList.add("loadFourthbrd");

    setTimeout(() => {
        const cards = `<div class="motivationCard">
        <div class="mName">
        <h1 class="changeName">${allMotivationData.catagory}</h1>
        <h1>Motivation</h1>
        </div>
        <button class="openBtn">Open</button>
        </div>`
        motivationCardContainer.insertAdjacentHTML("beforeend", cards);  //added dynamic data

        let motivationCards = document.querySelectorAll(".motivationCard");
        let motivationName = document.querySelectorAll(".mName");

        console.log(motivationCards.length);
        console.log(test);
        if(test > 0)
        {
            let data = motivationCards[test-1];
            console.log(data);
            data.style.display = 'none';
            console.log('rakesh');
        }
        
        test++;
        firstbrd.classList.remove("loadFirstbrd");
        secondbrd.classList.remove("loadSecondbrd");
        thirdbrd.classList.remove("loadThirdbrd");
        fourthbrd.classList.remove("loadFourthbrd");

    },500);
}

// function cardChangeAnimation(motvName) 
// { 
//     console.log(motvName);

//     firstbrd.classList.add("loadFirstbrd");
//     secondbrd.classList.add("loadSecondbrd");
//     thirdbrd.classList.add("loadThirdbrd");
//     fourthbrd.classList.add("loadFourthbrd");
//     // openBtn[changeCard].style.bottom = "50%";
//     // openBtn[changeCard].style.translate = "0%, -50%";
//     // openBtn[changeCard].style.scale = 0;
//     // motvName.style.border = '2px solid aqua';
//     // images[changeCard].style.scale = 0;
//     // images[changeCard].style.opacity = 0;
//     // allCardslist[changeCard].style.rotate = "360deg";
//     setTimeout(() => {
//         firstbrd.classList.remove("loadFirstbrd");
//         secondbrd.classList.remove("loadSecondbrd");
//         thirdbrd.classList.remove("loadThirdbrd");
//         fourthbrd.classList.remove("loadFourthbrd");
//         // openBtn[changeCard].style.bottom = "1%";
//         // openBtn[changeCard].style.translate = "0%, 0%";
//         // openBtn[changeCard].style.scale = 1;
//         // motvName.style.scale = 0;
//         // images[changeCard].style.scale = 1;
//         // images[changeCard].style.opacity = ".3";
//         // allCardslist[changeCard].style.rotate = "0deg";
//     },300);
// }
    
    // <h1>${allMotivationNamesArray[0].category}</h1>
    
    // <img class="image" src="${imageSource}" alt="">
    
    
    
    
