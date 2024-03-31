// creating dynamic datas or card from json file

let allMotivationNames = "./ApiList.json";

let cardContainer = document.querySelector(".cards-container");



async function gettingDataFromJson()
{
    const apiData = await fetch(allMotivationNames);
    const allMotivationNamesArray = await apiData.json();

    let length = allMotivationNamesArray.length;


    for(let i = 0 ; i < length ; i++ )
    {

        const dataFromLink = await fetch(allMotivationNamesArray[i].link);
        const allDataFromLink = await dataFromLink.json();
    
        console.log(allDataFromLink);

        const cards = `<div class="card-details">
        <div class="cdheading" id="womenMotvOpen">
            <h1>Women<br> Motivation</h1>
            <h2>Open</h2>
        </div>
        <img loading="lazy" src="${(allDataFromLink[0].image).slice(1)}" alt="MotivationImage">
        </div>`
        cardContainer.insertAdjacentHTML("beforeend", cards);
    }
}

gettingDataFromJson();




