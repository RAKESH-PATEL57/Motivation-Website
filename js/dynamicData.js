// creating dynamic datas or card from json file
"use strict"
import test from "../ApiList.json" with {type: 'json'};
// console.log(test)

//******************* sercah section  [start] ****************************
let searchInput = document.querySelector('#searchInput');

let cardContainer = document.querySelector(".cards-container");

let alertMessageContainer = document.querySelector(".alertMessageContainer");
let alertBtn = document.querySelector("#alertBtn");
let userQuery = document.querySelector("#userQuery");

var forStyle = 1;

function creatingCards(dataDisplay, index)
{     
    // console.log(index);   
        
    const cards = `<div class="card-details" style="--i:${forStyle++}"></div>`
    cardContainer.insertAdjacentHTML("beforeend", cards);

    let cardDetails = document.querySelectorAll(".card-details");
    showLoader(cardDetails, index);

    gettingDataFromJson(dataDisplay[index],cardDetails,index);

}

function showAlertMessage()
{
    alertMessageContainer.classList.add('alertMsgToggle');
    searchInput.disabled = true;
    document.body.classList.add("disableScrolling");
    userQuery.innerHTML = `"${searchInput.value}"`; 
    alertBtn.addEventListener("click", () => {
        document.body.classList.remove("disableScrolling");
        searchInput.disabled = false;
        alertMessageContainer.classList.remove('alertMsgToggle');
        searchInput.value = ""; 
        filterData();
    });
}

function filterData()
{
    let query = searchInput.value;
    
    let dataDisplay = test.filter((eventData, index) => {
        if(query === "") {
            // console.log(eventData);

            return eventData,index;
        }
        else if(eventData.category.toUpperCase().includes(query.toUpperCase())) {
            return eventData;
        }
    })
           
    let ln = dataDisplay.length;
  
    if(ln == 0)
    {
        showAlertMessage();
    }
    // console.log(ln);
    else
    {
        cardContainer.innerHTML = "";
        for(let i = 0 ; i<ln ; i++)
        {
            creatingCards(dataDisplay, i);
        }
    }  

}

filterData();

searchInput.addEventListener("input", () => {
    cardContainer.innerHTML ='';
    filterData();
})

//******************* sercah section  [ end ] ****************************


// first page loader [start] ******************************
function showLoader(cardDetails, i)
{
    // console.log(i);
    cardDetails[i].classList.add("skelaton");
}
// first page loader [end] ******************************

function removeLoader(cardDetails, i)
{  
    cardDetails[i].classList.remove("skelaton");
}

// generating dynamic elements [start] ********************************************
async function gettingDataFromJson(allMotivationData, cardDetails, i)
{
showLoader(cardDetails , i);
    let link;
    fetch(allMotivationData.link)
    .then(res => {
        if (!res.ok) {
            throw new Error('Server returned ' + response.status);
          }
        else
        {
            link = res;
            return res.json();
        }  
    })
    .then(data => {
        removeLoader(cardDetails , i);
        const cards = `<div class="cdheading">
        <h1><span class="motivationTypeName">${allMotivationData.category}</span><br>Motivation</h1>
        <h2>Open</h2>
        </div>
        <img loading="lazy" class="imgLoad" src="${(data[0].image).slice(1)}" alt="MotivationImage">`
        cardDetails[i].insertAdjacentHTML("beforeend", cards);
        // let imgLoad = document.querySelectorAll(".imgLoad");
      
        // imgLoad[i].addEventListener("load", () => {
        //     // imgLoad[i].style.border= "2px solid red";
        // });

            cardDetails[i].addEventListener("click",() => {
                    allMotivations(link.url);
                    toggleHomePageAndSecondPage()
                
            });
    })
    .catch(error => {
        console.error('There was a problem with the Fetch operation:', error);
      });
 
}

// generating dynamic elements [ end ] ********************************************

let introPage = document.querySelector('.intropage');
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
    introPage.classList.add('intropage-OpenClose');
    homePage.classList.add('homepage-OpenClose');
    secondPage.classList.add('secondpage-OpenClose');
}

backToHomeBtn.addEventListener('click',(e) => {
    e.preventDefault();
    introPage.classList.remove('intropage-OpenClose');
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
    
       motivationImg.src = (data[0].image).slice(1);
       motivationHeading.innerHTML = data[0].motivationLine;
       motivationWriter.innerHTML = data[0].writer;
       motivationImg.addEventListener("load", () => {
        secondPageLoadingRemove();
       });

          
        nextMotvBtn.addEventListener('click',(e) => {
            e.preventDefault();
            secondPageLoadingAdd();
            nextMotv(data);
            secondPageLoadingRemove();
            // motivationImg.addEventListener("load", (ele) => {
            //      console.log(e);
            //    });
        });

        prevMotvBtn.addEventListener('click',(e) => {
            e.preventDefault();
            // secondPageLoadingAdd();
            prevMotv(data);
            // secondPageLoadingRemove();
            // motivationImg.addEventListener("load", () => {
            //    });
        });

             //[[[[[[[[[[[[[[[[[[[[************** Arrow detection section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
        document.onkeydown = (event) => {
            switch (event.keyCode) 
            {
                case 37:
                    secondPageLoadingAdd();
                    prevMotv(data);
                    secondPageLoadingRemove();
                    break;
                case 39:
                    secondPageLoadingAdd();
                    nextMotv(data);
                    secondPageLoadingRemove();
                    break;
            }
        } 
    
    });


let count = 0; // for speaker repeatedly speek

    if(count == 0)
    {
        speakerBtn.addEventListener('click',() => {
            let voices = window.speechSynthesis.getVoices();
            var motivationLineSpeaker = new SpeechSynthesisUtterance();
            
            motivationLineSpeaker.voice = voices[1];
            motivationLineSpeaker.lang = voices.lang;

            motivationLineSpeaker.text = motivationHeading.innerHTML;
            speechSynthesis.speak(motivationLineSpeaker);
        });
        count++;
    }

count = 0;
 
}

let mcount = 0; //number of motivations lines

function nextMotv(motivationLines)
{
  
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

function prevMotv(motivationLines)
{
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
    },500);
}
