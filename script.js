
let generateTextBtn = document.querySelector('#generateTextbtn');
let generateImageBtn = document.querySelector('#generateImagebtn');
let result = document.querySelector('.motivation');
// let generateBtn = document.querySelector('#generatebtn');


generateTextBtn.addEventListener('click', function(event)
{
    event.preventDefault();

    fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
        // console.log(data);
        let randomValue = Math.floor((Math.random() * 1) + (Math.random() * 9));
        result.innerHTML = data[randomValue].text;
    
        console.log(data[randomValue].text);
        console.log(data[randomValue].author);
    });
});

// generateImageBtn.addEventListener('click', function(event){

//     var image = '';


// $(document).ready(function(){
//     var apiKey = "ZjAcPEQaP92mxu2K0dR8H9jMoi3HWFu8t54ev8WJjCSikFfOKoazGgI4";

//     imageSearch();
//     $(".img").remove();
//     function imageSearch()
//     {
        
//         $("#images").innerHTML = '';
//         // var search = $('#search').val();
//         let search ='fire';
//         let motivationPhoto = Math.round((Math.random() * 1) + (Math.random() * 70));

//         $.ajax({
//             method: 'GET',
//             beforeSend: function (xhr){
//                 xhr.setRequestHeader("Authorization", apiKey);
//             },

//             url: `https://api.pexels.com/v1/search?query="+${search}+"&per_page=1000&page=1`,
//             success: function(data)
//             {
//                 console.log(data);
//                 // data.photos.forEach(photo => {
//                 //     image = `

//                 //     <img src="${photo.src.original}" width="400" class="img" height = "300"/>
                    
//                 //     `;
//                 //     $("#images").append(image);

//                 // });
//                 let r = data.photos[motivationPhoto];
                
//                 // image =`<img src="${r.src.original}" width="1920" class="img" height = "1080" background-size="cover" position="absolute"/>`
//                 // $("#images").append(image);
//                 // $("#images").src= r.src.original;
//                 $("#images").attr("src",r.src.original);
//                 console.log(r);
//             },
//             error:function(error){
//                 console.log(error);
//             }
//             // url:"https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/"
//         })
       
        
//     }
// });


// });




//************************ [[ background canvas ]] **********************************************