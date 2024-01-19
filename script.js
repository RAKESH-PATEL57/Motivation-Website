
let generateBtn = document.querySelector('#generatebtn');
let result = document.querySelector('.motivation');
// let generateBtn = document.querySelector('#generatebtn');


generateBtn.addEventListener('click', function(event)
{
    event.preventDefault();

    fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
        let randomValue = Math.floor((Math.random() * 1) + (Math.random() * 9));
        result.innerHTML = data[randomValue].text;
    
        // console.log(data[randomValue].text);
    });


    // images 
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
})



});




// background  
var HTMLbody = document.querySelector('body');
var positionInfo = HTMLbody.getBoundingClientRect();
var bodyHeight =  document.body.clientHeight;
var bodyWidth =  document.body.clientWidth;
var width = positionInfo.width;
console.log(bodyHeight);
console.log(bodyWidth);


var canvas = document.querySelector('canvas');

canvas.width = bodyWidth;
canvas.height = bodyHeight;





var c = canvas.getContext("2d");

// c.fillRect(x,y,x-size,y-size)
// c.fillStyle = 'rgba(255, 0, 0, 0.5)';  // for changing the color of line
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';  // for changing the color of line
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';  // for changing the color of line
// c.fillRect(300, 300, 100, 100);


// Line  
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle ="#fa74aa";   // for changing the color of line
// c.stroke();



// arc / circle  
// for(var i = 0 ; i< 100; i++)
// {
//     var x = Math.random() * window.bodyWidth;
//     var y = Math.random() * window.bodyHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }

var mouse = {   // mouse object
    x: undefined, 
    y: undefined
}

var maxRadius = 10;
// var minRadius = 2;

var colorArray = [
    '#2c3e50',
    '#e74c3c',
    '#ecf0f1',
    '#3498db',
    '#298089',
];

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse);
});

window.addEventListener('resize', function(event) 
{
    canvas.width = bodyWidth;
    canvas.height = bodyHeight; 
    c.fillStyle = this.color;
    init();
});

function Circle(x, y, dx, dy, radius) {   // object name is always capital letter 😁 
    this.x = x;
    this.y = y;

    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke(); 
        // c.fillStyle = this.color;
        c.fill();   // it will give black background
    }

    this.update = function()
    {
        if( this.x + this.radius > bodyWidth || this.x - this.radius < 0)
        {
            this.dx = -this.dx;
            
        }
    
        if( this.y + this.radius > bodyHeight || this.y - this.radius < 0)
        {
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;


        // interactivity
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50
           && mouse.y - this.y < 50 && mouse.y - this.y > -50)
        {
            if(this.radius < maxRadius)
            {
                this.radius += 1;
            }
        }

        else if (this.radius > this.minRadius)
        {
            this.radius -=1 ;
        }

        this.draw();
    }

    
}

// var x = Math.random() * window.bodyWidth;
// var y = Math.random() * window.bodyHeight;
// var dx = Math.random() - 0.5 * 8;
// var dy = Math.random() - 0.5 * 8;
// var radius = 30;


var circleArray = [];
function init()
{
    circleArray = [];
    for( var i =0; i< 1200; i++)
    {
        var radius = Math.random() * .5 + 1;
        var x = Math.random() * (window.bodyWidth - radius * 2) + radius;
        var y = Math.random() * (window.bodyHeight - radius * 2) + radius;
        var dx = Math.random() - 0.5;
        var dy = Math.random() - 0.5;

        circleArray.push(new Circle(x, y, dx, dy, radius))
        // var circle = new Circle(200, 200, 3, 3, 30);
    }

}

function animate()
{
    requestAnimationFrame(animate);
    c.clearRect(0, 0, bodyWidth, bodyHeight);

    // circle.update();
    for( var i = 0; i< circleArray.length; i++)
    {
        circleArray[i].update();
    }

}

init();
animate();