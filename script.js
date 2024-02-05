//************************ [[ getting data from custom API ]] **********************************************
let url = "./Custom_Apis/successMotvQuotes.json";
async function rakesh()
{
    const MenuData = await fetch(url);
    const motivationLines = await MenuData.json();
    // console.log(MenuData);
    console.log(motivationLines[0].image);
}

rakesh();



























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
