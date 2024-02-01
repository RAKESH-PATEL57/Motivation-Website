
let generateTextBtn = document.querySelector('#generateTextbtn');
let generateImageBtn = document.querySelector('#generateImagebtn');
let result = document.querySelector('.motivation');
const speakeBtn = document.querySelector('#Speakerbtn');
// let generateBtn = document.querySelector('#generatebtn');

// loading 
// const [loading, setLoading] = useState(false);

var count = 1;  // speking ko ek se jyada baar rokne ke liye
generateTextBtn.addEventListener('click', function(event)
{
    event.preventDefault();

    
    // const loading = document.querySelector('.loading-text');
    // const loadingbar = document.querySelector('.loading-bar');
  
    // loadingbar.style.width='0px';

    fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
   
    .then(function(data) {
       
        // result.innerHTML ='rakesh';
        // console.log(data);
        let randomValue = Math.floor((Math.random() * 1) + (Math.random() * 9));
        result.innerHTML = data[randomValue].text;
        // console.log(result.innerHTML.clientWidth);
        console.log(data[randomValue].text);
        console.log(data[randomValue].author);
    })
    .then(onload = () => {
        // loading.innerHTML = 'loading succesful';
        // loading.style.width='8rem';
        // loadingbar.style.width='512px';
        // loading.innerHTML = 'loading succesful';
        
        // *
        // loading.classList.toggle('loading-progress');
        // loading.style.opacity = 0;
        // *

        // loadingbar.classList.toggle('rakesh');

        speakeBtn.style.opacity=1;
        speakeBtn.style.border = '2px solid aqua';
        speakeBtn.style.pointerEvents='auto';
        if(count == 1)
        {

            speakeBtn.addEventListener('click', function()
            {
                voices = window.speechSynthesis.getVoices();
                
                var motivationLineSpeaker = new SpeechSynthesisUtterance();
                
            motivationLineSpeaker.voice = voices[0];
            motivationLineSpeaker.lang = voices.lang;
            // utterance.lang = voices[23].lang;
            motivationLineSpeaker.text = result.innerHTML;
            
            speechSynthesis.speak(motivationLineSpeaker);
            console.log('click');
            count++;
        });
        }
        
    });
//    loadingbar.classList.toggle('rakesh');
//    loading.style.opacity = 0;
});

count = 1;


generateImageBtn.addEventListener('click', function(event){

    var image = '';


$(document).ready(function(){
    var apiKey = "ZjAcPEQaP92mxu2K0dR8H9jMoi3HWFu8t54ev8WJjCSikFfOKoazGgI4";

    imageSearch();
    $(".img").remove();
    function imageSearch()
    {
        
        $("#images").innerHTML = '';
        // var search = $('#search').val();
        let search ='fire';
        let motivationPhoto = Math.round((Math.random() * 1) + (Math.random() * 70));

        $.ajax({
            method: 'GET',
            beforeSend: function (xhr){
                xhr.setRequestHeader("Authorization", apiKey);
            },

            url: `https://api.pexels.com/v1/search?query="+${search}+"&per_page=1000&page=1`,
            success: function(data)
            {
                console.log(data);
                // data.photos.forEach(photo => {
                //     image = `

                //     <img src="${photo.src.original}" width="400" class="img" height = "300"/>
                    
                //     `;
                //     $("#images").append(image);

                // });
                let r = data.photos[motivationPhoto];
                
                // image =`<img src="${r.src.original}" width="1920" class="img" height = "1080" background-size="cover" position="absolute"/>`
                // $("#images").append(image);
                // $("#images").src= r.src.original;
                $("#images").attr("src",r.src.original);
                console.log(r);
            },
            error:function(error){
                console.log(error);
            }
            // url:"https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/"
        })
       
        
    }
});


});




//************************ [[ getting data from custom API ]] **********************************************
// async function rakesh ()
// {
//     const MenuData = await fetch('motivation.json');
//     const motivationLines = await MenuData.json();
//     console.log(MenuData);
//     console.log(motivationLines.included[2]);
// }

// rakesh();