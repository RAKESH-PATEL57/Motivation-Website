//************************ [[ getting data from custom API ]] **********************************************
let deepMotv = "./Custom_Apis/deepMotv.json";
let personalMotv = "./Custom_Apis/personalMotv.json";
let successMotv = "./Custom_Apis/successMotv.json";
let workMotv = "./Custom_Apis/workMotv.json";

async function deepMotvGenerating()
{
    const MenuData = await fetch(deepMotv);
    const motivationLines = await MenuData.json();
    // console.log(MenuData);
    console.log(motivationLines[0].image);
}

async function personalMotvGenerating()
{
    const MenuData = await fetch(personalMotv);
    const motivationLines = await MenuData.json();
    // console.log(MenuData);
    console.log(motivationLines[0].image);
}

async function workMotvGenerating()
{
    const MenuData = await fetch(workMotv);
    const motivationLines = await MenuData.json();
    // console.log(MenuData);
    console.log(motivationLines[0].image);
}



// deepMotvGenerating();
// personalMotvGenerating();

// workMotvGenerating();


// let allCards = document.querySelectorAll('.card-details');

// for(i=0;i<allCards.length;i++)
// {
    
//     allCards[i].addEventListener('click',(e) => {
//         console.log(e.target.style.border="5px solid red");
//     });
// }


let homepage = document.querySelector('.home-page');
let secondPage = document.querySelector('.second-page');
let successMotvOpen = document.querySelector('#successMotvOpen');
let backToHomeBtn = document.querySelector('.backtohomebtn');

let motivationImg = document.querySelector('#motivation-img');
let motivationHeading = document.querySelector('#motivation-heading');
let motivationWriter = document.querySelector('#motivation-writer');

let nextMotvBtn = document.querySelector('#next-Motv');
let prevMotvBtn = document.querySelector('#prev-Motv');



successMotvOpen.addEventListener('click',(e) => {
    homepage.classList.add('homepage-OpenClose');
    secondPage.classList.add('secondpage-OpenClose');

    successMotvGenerating();

});

backToHomeBtn.addEventListener('click',(e) => {
    homepage.classList.remove('homepage-OpenClose');
    secondPage.classList.remove('secondpage-OpenClose');
});

async function successMotvGenerating()
{
    const MenuData = await fetch(successMotv);
    const motivationLines = await MenuData.json();
    console.log(motivationLines.length);
    motivationImg.src = motivationLines[0].image;
    motivationHeading.innerHTML = motivationLines[0].motivationLine;
    motivationWriter.innerHTML = motivationLines[0].writer;
  
    let mcount = 0;
    nextMotvBtn.addEventListener('click',() => {
        // console.log('click');
        if(mcount < motivationLines.length - 1)
        {

            mcount++;
            motivationImg.src = motivationLines[mcount].image;
            motivationHeading.innerHTML = motivationLines[mcount].motivationLine;
            motivationWriter.innerHTML = motivationLines[mcount].writer;
            console.log(mcount);
        }
        else
        {
            mcount = 0;
        }
    });

    prevMotvBtn.addEventListener('click',() => {

        if(mcount>0)
        {
            mcount--;
            // motivationImg.src = motivationLines[i--].image;
            motivationHeading.innerHTML = motivationLines[mcount].motivationLine;
            motivationWriter.innerHTML = motivationLines[mcount].writer;
        }
        else
        {
            mcount = motivationLines.length - 1;
        }
    });

  
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
