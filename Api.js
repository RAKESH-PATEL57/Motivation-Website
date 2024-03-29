//************************ [[ getting data from custom API ]] **********************************************
let deepMotv = "./Custom_Apis/deepMotv.json";
let successMotv = "./Custom_Apis/successMotv.json";
let workMotv = "./Custom_Apis/workMotv.json";
let personalMotv = "./Custom_Apis/personalMotv.json";
let womenMotv = "./Custom_Apis/womenMotv.json";
let menMotv = "./Custom_Apis/menMotvQuotes.json";
let encMotv = "./Custom_Apis/EncMotv.json";
let newYearMotv = "./Custom_Apis/newyearMotv.json";
let studentMotv = "./Custom_Apis/studentMotv.json";
let teamMotv = "./Custom_Apis/teamMotv.json";
let funnyMotv = "./Custom_Apis/funnyMotv.json";

let homepage = document.querySelector('.home-page');
let secondPage = document.querySelector('.second-page');
let successMotvOpen = document.querySelector('#successMotvOpen');
let deepMotvOpen = document.querySelector('#deepMotvOpen');
let workMotvOpen = document.querySelector('#workMotvOpen');
let perLifeMotvOpen = document.querySelector('#perlifeMotvOpen');
let womenMotvOpen = document.querySelector('#womenMotvOpen');
let menMotvOpen = document.querySelector('#menMotvOpen');
let encMotvOpen = document.querySelector('#encMotvOpen');
let newYearMotvOpen = document.querySelector('#newYearMotvOpen');
let studentMotvOpen = document.querySelector('#studentMotvOpen');
let teamMotvOpen = document.querySelector('#teamMotvOpen');
let funnyMotvOpen = document.querySelector('#funnyMotvOpen');

let backToHomeBtn = document.querySelector('.backtohomebtn');

let motivationImg = document.querySelector('.left-side-img-container img');
let motivationHeading = document.querySelector('#motivation-heading');
let motivationWriter = document.querySelector('#motivation-writer');

let nextMotvBtn = document.querySelector('#next-Motv');
let prevMotvBtn = document.querySelector('#prev-Motv');
let speakerBtn = document.querySelector('#speak');

backToHomeBtn.addEventListener('click',() => {
    homepage.classList.remove('homepage-OpenClose');
    secondPage.classList.remove('secondpage-OpenClose');
});

function toggleHomePageAndSecondPage()
{
    homepage.classList.add('homepage-OpenClose');
    secondPage.classList.add('secondpage-OpenClose');
}

//[[[[[[[[[[[[[[[[[[[[************** Deep motivation section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

deepMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();
    // deepMotvGenerating();
    fetchData(deepMotv);

});

//[[[[[[[[[[[[[[[[[[[[************** Success motivation section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

successMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();
    
    fetchData(successMotv);

});

//[[[[[[[[[[[[[[[[[[[[************** Work motivation section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

workMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();

    fetchData(workMotv);

});

//[[[[[[[[[[[[[[[[[[[[************** Persional Life motivation section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

perLifeMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();

    fetchData(personalMotv);

});

//[[[[[[[[[[[[[[[[[[[[************** Women motivation section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

womenMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();
    
    fetchData(womenMotv);

});

//[[[[[[[[[[[[[[[[[[[[************************   Men motivation section ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

menMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();

    fetchData(menMotv);

});

//[[[[[[[[[[[[[[[[[[[[************************   Encoraging motivation section ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
encMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();
   
    fetchData(encMotv);

});

//[[[[[[[[[[[[[[[[[[[[************************   Encoraging motivation section ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
newYearMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();
    
    fetchData(newYearMotv);

});


//[[[[[[[[[[[[[[[[[[[[************************   Student motivation section ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
studentMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();
    
    fetchData(studentMotv);

});

//[[[[[[[[[[[[[[[[[[[[************************   Student motivation section ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
teamMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();
   
    fetchData(teamMotv);

});

//[[[[[[[[[[[[[[[[[[[[************************   Student motivation section ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
funnyMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();
   
    fetchData(funnyMotv);

});

//[[[[[[[[[[[[[[[[[[[[[[[[[**************** fetching the current motivation data   *************************************]]]]]]]]]]]]]]]]]]]]]

async function fetchData(motvData)
{
    loading();
    const currentMotvdata = await fetch(motvData);
    const motivationLines = await currentMotvdata.json();

    speakNow(motivationHeading);  //speaking the motivation line 

    allMotivations(motivationLines); //getting all motivations
}


//[[[[[[[[[[[[[[[[[[[[**********************    All Motivation Generating function  *************************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// function imageUpdate(srcImage) //for slicing the src
// {
//     motivationImg.src = srcImage.slice(1);
// }

function allMotivations(motivationLines)
{
    
    motivationImg.src = (motivationLines[0].image).slice(1);

    motivationHeading.innerHTML = motivationLines[0].motivationLine;
    motivationWriter.innerHTML = motivationLines[0].writer;


    nextMotvBtn.addEventListener('click',() => {
        // console.log('click');
        loading();
        nextMotv(motivationLines);
    });

    prevMotvBtn.addEventListener('click',() => {
        loading();
        prevMotv(motivationLines);
    });

     //[[[[[[[[[[[[[[[[[[[[************** Arrow detection section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
     document.onkeydown = (event) => {
        switch (event.keyCode) 
        {
            case 37:
                loading();
                prevMotv(motivationLines);
                break;
            case 39:
                loading();
                nextMotv(motivationLines);
                break;
        }
    }

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

//[[[[[[[[[[[[[[[[[******************* speaking section   ******************]]]]]]]]]]]]]]]]]]]]]]]]]]
let count = 0; // for speaker repeatedly speek
function speakNow()
{

    if(count == 0)
    {
        speakerBtn.addEventListener('click',() => {
            let voices = window.speechSynthesis.getVoices();
            var motivationLineSpeaker = new SpeechSynthesisUtterance();
            console.log(voices);
            // motivationLineSpeaker.voice = voices[27];
            motivationLineSpeaker.voice = voices[28];
            motivationLineSpeaker.lang = voices.lang;

            motivationLineSpeaker.text = motivationHeading.innerHTML;
            speechSynthesis.speak(motivationLineSpeaker);
            console.log("click");
        });
        count++;
    }

}

count = 0;

//*******************[[[[[[[[[[[[[[[[[[[[   loading section   ***********************]]]]]]]]]]]]]]]]]]]]
const scPgAllLoadingElmts = document.querySelectorAll('.scPage_skeleton');
function loading()
{
    scPgAllLoadingElmts.forEach(item=> {
        item.classList.add('scPage_skeleton')
      })
    // to stop loading after some time
     setTimeout(() => {
        scPgAllLoadingElmts.forEach((item) => {
           item.classList.remove('scPage_skeleton');
        })
     },1500)
    
}

// var msg = new SpeechSynthesisUtterance();
// var voices = window.speechSynthesis.getVoices();
// console.log(voices);
// msg.voice = voices[9];
// msg.text = "hello world";
// msg.lang = 'en-US';
// speechSynthesis.speak(msg);





// let generateTextBtn = document.querySelector('#generateTextbtn');
// let generateImageBtn = document.querySelector('#generateImagebtn');
// let result = document.querySelector('.motivation');
// const speakeBtn = document.querySelector('#Speakerbtn');
// let generateBtn = document.querySelector('#generatebtn');

// loading 
// const [loading, setLoading] = useState(false);

// var count = 1;  // speking ko ek se jyada baar rokne ke liye
// generateTextBtn.addEventListener('click', function(event)
// {
//     event.preventDefault();

    
//     // const loading = document.querySelector('.loading-text');
//     // const loadingbar = document.querySelector('.loading-bar');
  
//     // loadingbar.style.width='0px';

//     fetch("https://type.fit/api/quotes")
//     .then(function(response) {
//         return response.json();
//     })
   
//     .then(function(data) {
       
//         // result.innerHTML ='rakesh';
//         // console.log(data);
//         let randomValue = Math.floor((Math.random() * 1) + (Math.random() * 9));
//         result.innerHTML = data[randomValue].text;
//         // console.log(result.innerHTML.clientWidth);
//         console.log(data[randomValue].text);
//         console.log(data[randomValue].author);
//     })
//     .then(onload = () => {

//         speakeBtn.style.opacity=1;
//         speakeBtn.style.border = '2px solid aqua';
//         speakeBtn.style.pointerEvents='auto';
//         if(count == 1)
//         {

//             speakeBtn.addEventListener('click', function()
//             {
//                 voices = window.speechSynthesis.getVoices();
                
//                 var motivationLineSpeaker = new SpeechSynthesisUtterance();
                
//             motivationLineSpeaker.voice = voices[0];
//             motivationLineSpeaker.lang = voices.lang;
//             motivationLineSpeaker.text = result.innerHTML;
            
//             speechSynthesis.speak(motivationLineSpeaker);
//             console.log('click');
//             count++;
//         });
//         }
        
//     });
// //    loadingbar.classList.toggle('rakesh');
// //    loading.style.opacity = 0;
// });

// count = 1;







//**** method 2 to getting json data without using fetch 👇👇👇👇👇👇

// // import deepMotvJson from './Custom_Apis/deepMotv.json' assert {type:'json'};

// // let deepMotvOpen = document.querySelector('#deepMotvOpen');
// // let motivationImg = document.querySelector('.left-side-img-container img');
// // let motivationHeading = document.querySelector('#motivation-heading');
// // let motivationWriter = document.querySelector('#motivation-writer');

// // let nextMotvBtn = document.querySelector('#next-Motv');
// // let prevMotvBtn = document.querySelector('#prev-Motv');
// // let speakerBtn = document.querySelector('#speak');

// // deepMotvOpen.addEventListener('click',(e) => {
// //     homepage.classList.add('homepage-OpenClose');
// //     secondPage.classList.add('secondpage-OpenClose');

// //     // deepMotvGenerating();
// //     speakNow(motivationHeading);  //speaking the motivation line 

// //     allMotivations(deepMotvJson); //getting all motivations

// // });

// // function allMotivations(motivationLines)
// // {

// //     motivationImg.src = (motivationLines[0].image).slice(1);

// //     motivationHeading.innerHTML = motivationLines[0].motivationLine;
// //     motivationWriter.innerHTML = motivationLines[0].writer;
   
// //     let mcount = 0; //number of motivations lines

// //     nextMotvBtn.addEventListener('click',() => {
// //         // console.log('click');
// //         if(mcount < motivationLines.length - 1)
// //         {

// //             mcount++;
// //             motivationImg.src = (motivationLines[mcount].image).slice(1);
// //             motivationHeading.innerHTML = motivationLines[mcount].motivationLine;
// //             motivationWriter.innerHTML = motivationLines[mcount].writer;
            
// //         }
// //         else
// //         {
// //             mcount = 0;
// //         }
// //     });

// //     prevMotvBtn.addEventListener('click',() => {

// //         if(mcount>0)
// //         {
// //             mcount--;
// //             motivationImg.src = (motivationLines[mcount].image).slice(1);
// //             motivationHeading.innerHTML = motivationLines[mcount].motivationLine;
// //             motivationWriter.innerHTML = motivationLines[mcount].writer;
// //         }
// //         else
// //         {
// //             mcount = motivationLines.length - 1;
// //         }
// //     });

// // }


// // let count = 0; // for speaker repeatedly speek
// // function speakNow(motivationHeading)
// // {

// //     if(count == 0)
// //     {
// //         speakerBtn.addEventListener('click',() => {
// //             let voices = window.speechSynthesis.getVoices();
// //             var motivationLineSpeaker = new SpeechSynthesisUtterance();

// //             motivationLineSpeaker.voice = voices[0];
// //             motivationLineSpeaker.lang = voices.lang;

// //             motivationLineSpeaker.text = motivationHeading.innerHTML;
// //             speechSynthesis.speak(motivationLineSpeaker);
// //             console.log("click");
// //         });
// //         count++;
// //     }

// // }

// // count = 0;



