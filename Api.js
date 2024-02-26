//************************ [[ getting data from custom API ]] **********************************************
let deepMotv = "./Custom_Apis/deepMotv.json";
let successMotv = "./Custom_Apis/successMotv.json";
let workMotv = "./Custom_Apis/workMotv.json";
let personalMotv = "./Custom_Apis/personalMotv.json";
let womenMotv = "./Custom_Apis/womenMotv.json";
let menMotv = "./Custom_Apis/menMotvQuotes.json";
let encMotv = "./Custom_Apis/EncMotv.json";
let newYearMotv = "./Custom_Apis/newyearMotv.json";

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
    deepMotvGenerating();
});

async function deepMotvGenerating()
{
    loading();
    const deepmotvdata = await fetch(deepMotv);
    const motivationLines = await deepmotvdata.json();

    speakNow(motivationHeading);  //speaking the motivation line 

    allMotivations(motivationLines); //getting all motivations

}

//[[[[[[[[[[[[[[[[[[[[************** Success motivation section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

successMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();
    successMotvGenerating();

});

async function successMotvGenerating()
{
    const succmotvdata = await fetch(successMotv);
    const motivationLines = await succmotvdata.json();

    speakNow(motivationHeading);  //speaking the motivation line 

    allMotivations(motivationLines); //getting all motivations

}

//[[[[[[[[[[[[[[[[[[[[************** Work motivation section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

workMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();
    workMotvGenerating();

});

async function workMotvGenerating()
{
    const workmotvdata = await fetch(workMotv);
    const motivationLines = await workmotvdata.json();

    speakNow(motivationHeading);  //speaking the motivation line 

    allMotivations(motivationLines); //getting all motivations

}

//[[[[[[[[[[[[[[[[[[[[************** Persional Life motivation section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

perLifeMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();
    personalMotvGenerating();

});

async function personalMotvGenerating()
{
    const perLifeMotvData = await fetch(personalMotv);
    const motivationLines = await perLifeMotvData.json();

    speakNow(motivationHeading);  //speaking the motivation line 

    allMotivations(motivationLines); //getting all motivations

  
}

//[[[[[[[[[[[[[[[[[[[[************** Women motivation section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

womenMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();
    womenMotvGenerating();

});

async function womenMotvGenerating()
{
    const womenMotvData = await fetch(womenMotv);
    const motivationLines = await womenMotvData.json();

    speakNow(motivationHeading);  //speaking the motivation line 

    allMotivations(motivationLines); //getting all motivations
  
}

//[[[[[[[[[[[[[[[[[[[[************************   Men motivation section ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

menMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();
    menMotvGenerating();

});

async function menMotvGenerating()
{
    const menMotvData = await fetch(menMotv);
    const motivationLines = await menMotvData.json();

    speakNow(motivationHeading);  //speaking the motivation line 
    
    allMotivations(motivationLines); //getting all motivations
 
}

//[[[[[[[[[[[[[[[[[[[[************************   Encoraging motivation section ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
encMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();
    encMotvGenerating();

});

async function encMotvGenerating()
{
    const encMotvData = await fetch(encMotv);
    const motivationLines = await encMotvData.json();

    speakNow(motivationHeading);  //speaking the motivation line 
    
    allMotivations(motivationLines); //getting all motivations
 
}

//[[[[[[[[[[[[[[[[[[[[************************   Encoraging motivation section ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
newYearMotvOpen.addEventListener('click',(e) => {

    loading();
    toggleHomePageAndSecondPage();
    newYearMotvGenerating();

});

async function newYearMotvGenerating()
{
    const newYearMotvData = await fetch(newYearMotv);
    const motivationLines = await newYearMotvData.json();

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
   
    let mcount = 0; //number of motivations lines

    nextMotvBtn.addEventListener('click',() => {
        // console.log('click');
        loading();
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
    });

    prevMotvBtn.addEventListener('click',() => {
        loading();
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
    });

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

            motivationLineSpeaker.voice = voices[0];
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



