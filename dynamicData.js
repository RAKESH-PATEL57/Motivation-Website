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
    // let str = allMotivationData.link;
    // console.log(str);
    let link;
    fetch(allMotivationData.link)
    .then(res => {
        link = res;
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

      


            cardDetails[i].addEventListener("click",() => {
                // allMotivations(data[j])
                
         
                    // console.log(data[j].image);
                    // console.log(link.url);
                    allMotivations(link.url);
                    toggleHomePageAndSecondPage()
                
            });
    })
 
}

// test.forEach(item =>{

//     test[item].addEventListener("click", () => {
//         console.log(item);
// })
    
// });

let homePage = document.querySelector('.home-page');
let secondPage = document.querySelector('.second-page');
let backToHomeBtn = document.querySelector('.backtohomebtn');

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

backToHomeBtn.addEventListener('click',() => {
    homePage.classList.remove('homepage-OpenClose');
    secondPage.classList.remove('secondpage-OpenClose');
});

function allMotivations(userChoosedMotivationLink)
{
    secondPageLoadingAdd();
    fetch(userChoosedMotivationLink)
    .then(res =>{

        return res.json();
    })
    .then(data => {
    //    secondPageLoadingRemove();
       console.log(data);
    
       motivationImg.src = (data[0].image).slice(1);
       motivationHeading.innerHTML = data[0].motivationLine;
       motivationWriter.innerHTML = data[0].writer;
       motivationImg.addEventListener("load", () => {
        secondPageLoadingRemove();
       });

          
        nextMotvBtn.addEventListener('click',() => {
            secondPageLoadingAdd();
            motivationImg.addEventListener("load", () => {
                secondPageLoadingRemove();
               });
            nextMotv(data);
        });

        prevMotvBtn.addEventListener('click',() => {
            secondPageLoadingAdd();
            secondPageLoadingRemove();
            prevMotv(data);
        });
    
    
    });


let count = 0; // for speaker repeatedly speek

    if(count == 0)
    {
        speakerBtn.addEventListener('click',() => {
            let voices = window.speechSynthesis.getVoices();
            var motivationLineSpeaker = new SpeechSynthesisUtterance();
            // console.log(voices);
            // motivationLineSpeaker.voice = voices[27];
            motivationLineSpeaker.voice = voices[0];
            motivationLineSpeaker.lang = voices.lang;

            motivationLineSpeaker.text = motivationHeading.innerHTML;
            speechSynthesis.speak(motivationLineSpeaker);
            // console.log("click");
        });
        count++;
    }

count = 0;
 

   

    


  


    //  //[[[[[[[[[[[[[[[[[[[[************** Arrow detection section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
    //  document.onkeydown = (event) => {
    //     switch (event.keyCode) 
    //     {
    //         case 37:
    //             loading();
    //             prevMotv(motivationLines);
    //             break;
    //         case 39:
    //             loading();
    //             nextMotv(motivationLines);
    //             break;
    //     }
    // }

}

let mcount = 0; //number of motivations lines

function nextMotv(motivationLines)
{
    console.log(mcount);
    console.log( motivationLines[mcount].motivationLine);
  
    if(mcount < motivationLines.length - 1)
    {

        mcount++;
        motivationImg.src = (motivationLines[mcount].image).slice(1);
        motivationHeading.innerHTML = motivationLines[mcount].motivationLine;
        motivationWriter.innerHTML = motivationLines[mcount].writer;
        
    }
    else
    {
        mcount = 0;
    }
}

function  prevMotv(motivationLines)
{
    let mcount = 0; //number of motivations lines
    if(mcount>0)
    {
        mcount--;
        motivationImg.src = (motivationLines[mcount].image).slice(1);
        motivationHeading.innerHTML = motivationLines[mcount].motivationLine;
        motivationWriter.innerHTML = motivationLines[mcount].writer;
    }
    else
    {
        mcount = motivationLines.length - 1;
    }
}

const scPgAllLoadingElmts = document.querySelectorAll('.scPage_skeleton');

function secondPageLoadingAdd()
{
    scPgAllLoadingElmts.forEach((item) => {
        item.classList.add('scPage_skeleton');
     });
}

function secondPageLoadingRemove()
{
    setTimeout(() => {

        scPgAllLoadingElmts.forEach(item=> {
            item.classList.remove('scPage_skeleton')
        });
    },1000)
}
