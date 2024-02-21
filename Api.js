import deepMotvJson from './Custom_Apis/deepMotv.json' assert {type:'json'};

let deepMotvOpen = document.querySelector('#deepMotvOpen');
let motivationImg = document.querySelector('.left-side-img-container img');
let motivationHeading = document.querySelector('#motivation-heading');
let motivationWriter = document.querySelector('#motivation-writer');

let nextMotvBtn = document.querySelector('#next-Motv');
let prevMotvBtn = document.querySelector('#prev-Motv');
let speakerBtn = document.querySelector('#speak');

deepMotvOpen.addEventListener('click',(e) => {
    homepage.classList.add('homepage-OpenClose');
    secondPage.classList.add('secondpage-OpenClose');

    // deepMotvGenerating();
    speakNow(motivationHeading);  //speaking the motivation line 

    allMotivations(deepMotvJson); //getting all motivations

});




function allMotivations(motivationLines)
{

    motivationImg.src = (motivationLines[0].image).slice(1);

    motivationHeading.innerHTML = motivationLines[0].motivationLine;
    motivationWriter.innerHTML = motivationLines[0].writer;
   
    let mcount = 0; //number of motivations lines

    nextMotvBtn.addEventListener('click',() => {
        // console.log('click');
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


let count = 0; // for speaker repeatedly speek
function speakNow(motivationHeading)
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



