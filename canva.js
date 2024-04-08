const intropage = document.querySelector(".intropage");
window.addEventListener('load', function(){
    
    const canvas = document.getElementById("canvas");
    console.log(intropage.offsetHeight);
    const ctx = canvas.getContext('2d', {
        willReadFrequently: true
    });
    canvas.width = intropage.offsetWidth;
    canvas.height = intropage.offsetHeight;
    // console.log(ctx);

    class Particle {
        constructor(effect, x, y, color)
        {
            this.effect = effect;
            this.x = Math.random() * this.effect.canvasWidth;
            // this.y = 0;
            this.y = this.effect.canvasHeight;
            this.color = color;
            this.originX = x;
            this.originY = y;
            this.size = this.effect.gap;
            // this.size = this.effect.gap - 1;
            this.dx = -20;  //mouse distance between cursor and particle horizontally
            this.dy = 0;  //mouse distance between cursor and particle vertically
            this.vx = 0;  // horizontal speed valocity
            this.vy = 0;  // vertical speed valocity
            this.force = 0;
            this.angle = 0;
            this.distance = 0;
            this.friction = Math.random() * 0.6 + 0.15;
            this.ease = Math.random() * 0.1 + 0.005;
        }

        draw()
        {
            this.effect.context.fillStyle = this.color;
            this.effect.context.fillRect(this.x, this.y, this.size, this.size);
        }

        update()
        {
            // for mouse interaction 
            this.dx = this.effect.mouse.x - this.x;
            this.dy = this.effect.mouse.y - this.y;
            this.distance =(this.dx * this.dx) + (this.dy * this.dy);
            this.force = -this.effect.mouse.radius / this.distance;

            if( this.distance < this.effect.mouse.radius)
            {
                this.angle = Math.atan2(this.dy, this.dx);
                this.vx += this.force * Math.cos(this.angle);
                this.vy += this.force * Math.sin(this.angle);
            }

            // for only animation 
            this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
            this.y += (this.vy *= this.friction) +(this.originY - this.y) * this.ease;
        }
    }

    class Effect {
        constructor(context, canvasWidth, canvasHeight)
        {
              this.context = context;
              this.canvasWidth = canvasWidth;
              this.canvasHeight = canvasHeight;
              this.textX = this.canvasWidth / 2;
              this.textY = this.canvasHeight / 2;
              this.fontSize = 120;
              this.lineHeight = this.fontSize *  1.1;
              this.maxTextWidth = this.canvasWidth * 0.8;
              this.textInput = document.getElementById('introtext');
            //   this.verticalOffset = -360;  // for manualy handle the size vertically
            //   this.textInput.addEventListener('keyup', (event) => {
            //       if(event.key !== ' ')
            //       {
            //         this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            //         this.wrapText(event.target.value);
            //       }
            //   });

              //particle text
              this.particles = [];
              this.gap = 5;
              this.mouse = {
                radius: 10000,
                x: 0,
                y: 0
              }
              intropage.addEventListener('mousemove', (e) =>{
                this.mouse.x = e.clientX;
                this.mouse.y = e.clientY;
                // console.log(this.mouse.x, this.mouse.y);
              });
        }

        wrapText(text)
        {
            // canvas Settings 
            const gradient = this.context.createLinearGradient(0, 0, this.canvasWidth, this.canvasHeight);
            gradient.addColorStop(0.3, 'white');
            gradient.addColorStop(0.5, 'pink');
            gradient.addColorStop(0.7, 'red');
            this.context.fillStyle = gradient;
            // this.context.font = this.fontSize + 'px Helvetica'
            this.context.font = this.fontSize + 'px Impact'
            this.context.textAlign = 'center';
            this.context.textBaseline = 'middle';

            this.context.lineWidth = 3;
            this.context.strokeStyle = 'white';
            this.context.letterSpacing = '10px';

            // break multiple lines  
            let linesArray = [];
            let words = text.split(' ');
            let lineCounter = 0;
            let line = '';
     
              
            for (let i = 0; i < words.length; i++) {
              let testLine = line + words[i] + ' ';

              if (this.context.measureText(testLine).width > this.maxTextWidth) {
                line = words[i] + ' ';
                lineCounter++;
              } else {
                line = testLine;
              }
              linesArray[lineCounter] = line;
            }
            let textHeight = this.lineHeight * lineCounter;
            this.textY = this.canvasHeight / 2 - textHeight / 2;
            // this.textY = this.canvasHeight / 2 - textHeight / 2 + this.verticalOffset;
            linesArray.forEach((el, index) => {
                this.context.fillText(el, this.textX, this.textY + (index * this.lineHeight));
                // this.context.strokeText(el, this.textX, this.textY + (index * this.lineHeight));
            });
            this.convertToParticles();
        }

        convertToParticles()
        {
            this.particles = [];
            const pixels = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
            // console.log(pixels);
            this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            for(let y = 0; y < this.canvasHeight; y += this.gap)
            {
                for(let x = 0; x < this.canvasWidth; x += this.gap)
                {
                    const index = (y * this.canvasWidth + x) * 4;// multiply 4 ( red, green, blue, alpha value)
                    const alpha = pixels[index + 3];
                    // console.log(alpha);
                    if(alpha > 0)
                    {
                        const red = pixels[index];
                        const green = pixels[index + 1];
                        const blue = pixels[index + 2];
                        const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
                        // console.log(color);
                        this.particles.push(new Particle(this, x, y, color));
                    }
                }
            }
            // console.log(this.particles);
        }

        render()
        {
            this.particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
        }

        // for responssive canva  
        resize(width, height){
            this.canvasWidth = width;
            this.canvasHeight = height;
            this.textX = this.canvasWidth / 2;
            this.textY = this.canvasHeight / 2;
            this.maxTextWidth = this.canvasWidth * 0.8;
        }
    }

    const effect = new Effect(ctx, canvas.width, canvas.height);
    // effect.wrapText(effect.textImg);
    // effect.wrapText(effect.textInput.innerText);
    effect.wrapText('Motivation World');
    effect.render();
    function animate()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.render();
        requestAnimationFrame(animate);
    }
    animate();   
    
    
    // for responssive canva  
    window.addEventListener('resize', function(){
        canvas.width = intropage.offsetWidth;
        canvas.height = intropage.offsetHeight;
        effect.resize(canvas.width, canvas.height); 
        effect.wrapText('Motivation World');
    });
    
});