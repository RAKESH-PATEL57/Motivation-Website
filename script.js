//************************ [[ getting data from custom API ]] **********************************************
let deepMotv = "./Custom_Apis/deepMotv.json";
let successMotv = "./Custom_Apis/successMotv.json";
let workMotv = "./Custom_Apis/workMotv.json";
let personalMotv = "./Custom_Apis/personalMotv.json";
let womenMotv = "./Custom_Apis/womenMotv.json";
let menMotv = "./Custom_Apis/menMotvQuotes.json";

let homepage = document.querySelector('.home-page');
let secondPage = document.querySelector('.second-page');
let successMotvOpen = document.querySelector('#successMotvOpen');
let deepMotvOpen = document.querySelector('#deepMotvOpen');
let workMotvOpen = document.querySelector('#workMotvOpen');
let perLifeMotvOpen = document.querySelector('#perlifeMotvOpen');
let womenMotvOpen = document.querySelector('#womenMotvOpen');
let menMotvOpen = document.querySelector('#menMotvOpen');
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

//[[[[[[[[[[[[[[[[[[[[************** Deep motivation section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

deepMotvOpen.addEventListener('click',(e) => {
    homepage.classList.add('homepage-OpenClose');
    secondPage.classList.add('secondpage-OpenClose');

    deepMotvGenerating();

});

function imageUpdate(srcImage) //for slicing the src
{
    motivationImg.src = srcImage.slice(1);
}

async function deepMotvGenerating()
{
    
    const deepmotvdata = await fetch(deepMotv);
    const motivationLines = await deepmotvdata.json();

    imageUpdate(motivationLines[0].image);


    motivationHeading.innerHTML = motivationLines[0].motivationLine;
    motivationWriter.innerHTML = motivationLines[0].writer;

      
    let mcount = 0; //number of motivations lines

    speakNow(motivationHeading);  //speaking the motivation line 

    nextMotvBtn.addEventListener('click',() => {
        // console.log('click');
        if(mcount < motivationLines.length - 1)
        {

            mcount++;
            imageUpdate(motivationLines[mcount].image);
            motivationHeading.innerHTML = motivationLines[mcount].motivationLine;
            motivationWriter.innerHTML = motivationLines[mcount].writer;
            
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
            imageUpdate(motivationLines[mcount].image);
            motivationHeading.innerHTML = motivationLines[mcount].motivationLine;
            motivationWriter.innerHTML = motivationLines[mcount].writer;
        }
        else
        {
            mcount = motivationLines.length - 1;
        }
    });

   

}

//[[[[[[[[[[[[[[[[[[[[************** Success motivation section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

successMotvOpen.addEventListener('click',(e) => {
    homepage.classList.add('homepage-OpenClose');
    secondPage.classList.add('secondpage-OpenClose');

    successMotvGenerating();

});

async function successMotvGenerating()
{
    const succmotvdata = await fetch(successMotv);
    const motivationLines = await succmotvdata.json();

    imageUpdate(motivationLines[0].image); //for slicing the src

    motivationHeading.innerHTML = motivationLines[0].motivationLine;
    motivationWriter.innerHTML = motivationLines[0].writer;
  
    let mcount = 0; //number of motivations lines

    speakNow(motivationHeading);  //speaking the motivation line 

    nextMotvBtn.addEventListener('click',() => {
        // console.log('click');
        if(mcount < motivationLines.length - 1)
        {

            mcount++;
            imageUpdate(motivationLines[mcount].image);//for slicing the src
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
            imageUpdate(motivationLines[mcount].image);
            motivationHeading.innerHTML = motivationLines[mcount].motivationLine;
            motivationWriter.innerHTML = motivationLines[mcount].writer;
        }
        else
        {
            mcount = motivationLines.length - 1;
        }
    });

  
}

//[[[[[[[[[[[[[[[[[[[[************** Work motivation section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

workMotvOpen.addEventListener('click',(e) => {
    homepage.classList.add('homepage-OpenClose');
    secondPage.classList.add('secondpage-OpenClose');

    workMotvGenerating();

});

async function workMotvGenerating()
{
    const workmotvdata = await fetch(workMotv);
    const motivationLines = await workmotvdata.json();

    imageUpdate(motivationLines[0].image); //for slicing the src

    motivationHeading.innerHTML = motivationLines[0].motivationLine;
    motivationWriter.innerHTML = motivationLines[0].writer;
  
    let mcount = 0; //number of motivations lines

    speakNow(motivationHeading);  //speaking the motivation line 

    nextMotvBtn.addEventListener('click',() => {
        // console.log('click');
        if(mcount < motivationLines.length - 1)
        {

            mcount++;
            imageUpdate(motivationLines[mcount].image);
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
            imageUpdate(motivationLines[mcount].image);
            motivationHeading.innerHTML = motivationLines[mcount].motivationLine;
            motivationWriter.innerHTML = motivationLines[mcount].writer;
        }
        else
        {
            mcount = motivationLines.length - 1;
        }
    });

  
}

//[[[[[[[[[[[[[[[[[[[[************** Persional Life motivation section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

perLifeMotvOpen.addEventListener('click',(e) => {
    homepage.classList.add('homepage-OpenClose');
    secondPage.classList.add('secondpage-OpenClose');

    personalMotvGenerating();

});

async function personalMotvGenerating()
{
    const perLifeMotvData = await fetch(personalMotv);
    const motivationLines = await perLifeMotvData.json();

    imageUpdate(motivationLines[0].image); //for slicing the src

    motivationHeading.innerHTML = motivationLines[0].motivationLine;
    motivationWriter.innerHTML = motivationLines[0].writer;
  
    let mcount = 0; //number of motivations lines

    speakNow(motivationHeading);  //speaking the motivation line 

    nextMotvBtn.addEventListener('click',() => {
        // console.log('click');
        if(mcount < motivationLines.length - 1)
        {

            mcount++;
            imageUpdate(motivationLines[mcount].image);
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
            imageUpdate(motivationLines[mcount].image);
            motivationHeading.innerHTML = motivationLines[mcount].motivationLine;
            motivationWriter.innerHTML = motivationLines[mcount].writer;
        }
        else
        {
            mcount = motivationLines.length - 1;
        }
    });

  
}

//[[[[[[[[[[[[[[[[[[[[************** Women motivation section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

womenMotvOpen.addEventListener('click',(e) => {
    homepage.classList.add('homepage-OpenClose');
    secondPage.classList.add('secondpage-OpenClose');

    womenMotvGenerating();

});

async function womenMotvGenerating()
{
    const womenMotvData = await fetch(womenMotv);
    const motivationLines = await womenMotvData.json();

    imageUpdate(motivationLines[0].image); //for slicing the src

    motivationHeading.innerHTML = motivationLines[0].motivationLine;
    motivationWriter.innerHTML = motivationLines[0].writer;
  
    let mcount = 0; //number of motivations lines

    speakNow(motivationHeading);  //speaking the motivation line 

    nextMotvBtn.addEventListener('click',() => {
        // console.log('click');
        if(mcount < motivationLines.length - 1)
        {

            mcount++;
            imageUpdate(motivationLines[mcount].image);
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
            imageUpdate(motivationLines[mcount].image);
            motivationHeading.innerHTML = motivationLines[mcount].motivationLine;
            motivationWriter.innerHTML = motivationLines[mcount].writer;
        }
        else
        {
            mcount = motivationLines.length - 1;
        }
    });

  
}

//[[[[[[[[[[[[[[[[[[[[************** Men motivation section   ***********************]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

menMotvOpen.addEventListener('click',(e) => {
    homepage.classList.add('homepage-OpenClose');
    secondPage.classList.add('secondpage-OpenClose');

    menMotvGenerating();

});

async function menMotvGenerating()
{
    const menMotvData = await fetch(menMotv);
    const motivationLines = await menMotvData.json();

    imageUpdate(motivationLines[0].image); //for slicing the src

    motivationHeading.innerHTML = motivationLines[0].motivationLine;
    motivationWriter.innerHTML = motivationLines[0].writer;
  
    let mcount = 0; //number of motivations lines

    speakNow(motivationHeading);  //speaking the motivation line 

    nextMotvBtn.addEventListener('click',() => {
        // console.log('click');
        if(mcount < motivationLines.length - 1)
        {

            mcount++;
            imageUpdate(motivationLines[mcount].image);
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
            imageUpdate(motivationLines[mcount].image);
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
            voices = window.speechSynthesis.getVoices();
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
