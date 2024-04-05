// creating dynamic datas or card from json file
"use strict"
import test from "./ApiList.json" with {type: 'json'};
let cardContainer = document.querySelector(".cards-container");

for(let i = 0 ; i< test.length; i++)
{
    const cards = `<div class="card-details"></div>`
    cardContainer.insertAdjacentHTML("beforeend", cards);
    let cardDetails = document.querySelectorAll(".card-details");
    showLoader(cardDetails, i);

}

const dataInterval = setInterval(jsonData, 500)
let i = 0;
function jsonData()
{

       
        let cardDetails = document.querySelectorAll(".card-details");
        gettingDataFromJson(test[i],cardDetails,i);
      

        if(i > test.length-2)
        {
            clearInterval(dataInterval);
        }
        i++;
    

}



function showLoader(cardDetails, i)
{
    cardDetails[i].classList.add("skelaton");
}


function removeLoader(cardDetails, i)
{  
    cardDetails[i].classList.remove("skelaton");
}


async function gettingDataFromJson(allMotivationData, cardDetails, i)
{
    showLoader(cardDetails , i);

    fetch(allMotivationData.link)
    .then(res => {
       return res.json();
    })
    .then(data => {
        // console.log(data);
        const cards = `<div class="cdheading">
        <h1>${allMotivationData.catagory}<br> Motivation</h1>
        <h2>Open</h2>
        </div>
        <img loading="lazy" class="imgLoad" src="${(data[0].image).slice(0)}" alt="MotivationImage">`
        cardDetails[i].insertAdjacentHTML("beforeend", cards);

        let imgLoad = document.querySelectorAll(".imgLoad");
        
        imgLoad[i].addEventListener("load", () => {
            // imgLoad[i].style.border= "2px solid red";
            removeLoader(cardDetails , i);
        });

        for(let j = 0; j<data.length;j++)
        {

            cardDetails[i].addEventListener("click",() => {
                console.log(data[j]);
                toggleHomePageAndSecondPage()
            });
        }
    })
 
}

let homePage = document.querySelector('.home-page');
let secondPage = document.querySelector('.second-page');


let motivationImg = document.querySelector('.left-side-img-container img');
let motivationHeading = document.querySelector('#motivation-heading');
let motivationWriter = document.querySelector('#motivation-writer');

let nextMotvBtn = document.querySelector('#next-Motv');
let prevMotvBtn = document.querySelector('#prev-Motv');
let speakerBtn = document.querySelector('#speak');

function toggleHomePageAndSecondPage()
{
    homePage.classList.add('homepage-OpenClose');
    secondPage.classList.add('secondpage-OpenClose');
}






