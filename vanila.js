// var HTMLbody = document.querySelector('body');
// var positionInfo = HTMLbody.getBoundingClientRect();
var bodyHeight =  document.body.clientHeight;
var bodyWidth =  document.body.clientWidth;
// var width = positionInfo.width;
console.log(bodyHeight);
console.log(bodyWidth);


var canvas = document.querySelector('canvas');

canvas.width = bodyWidth;
canvas.height = bodyHeight;





var c = canvas.getContext("2d");

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



var circleArray = [];
function init()
{
    circleArray = [];
    for( var i =0; i< 500; i++)
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