// creating dynamic datas or card from json file
"use strict"
import test from "./ApiList.json" assert {type: 'json'};
for(let i = 0 ; i< test.length; i++)
{
    // console.log(test[i]);
    gettingDataFromJson(test[i].link);
}

let cardContainer = document.querySelector(".cards-container");



async function gettingDataFromJson(allMotivationData)
{
    const apiData = await fetch(allMotivationData);
    const allMotivationNamesArray = await apiData.json();

    // console.log(allMotivationNamesArray);


    let length = allMotivationNamesArray.length;


    
        // console.log(allDataFromLink);

        const cards = `<div class="card-details skelaton">
        <div class="cdheading" id="womenMotvOpen">
            <h1>Women<br> Motivation</h1>
            <h2>Open</h2>
        </div>
        <img loading="lazy" src="${(allMotivationNamesArray[0].image).slice(0)}" alt="MotivationImage">
        </div>`
        cardContainer.insertAdjacentHTML("beforeend", cards);
    
}





