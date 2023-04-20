var particles = [];
var particleCount = 20;
var canvas = document.getElementById('background-canvas');
var ctx = canvas.getContext('2d');
var image = document.getElementById('shrek');
canvas.width = canvas.getBoundingClientRect().width;
canvas.height = canvas.getBoundingClientRect().height;

var dotsColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function particle() {
    this.radius = getRandomInt(20, 40);
    this.x = getRandomInt(this.radius, canvas.width - this.radius);
    this.y = getRandomInt(this.radius, canvas.height - this.radius);

    this.direction = {
        "x": -1 + Math.random() * 2,
        "y": -1 + Math.random() * 2
    };

    this.velocity_x = -2 + Math.random() * 4
    this.velocity_y = -2 + Math.random() * 4

    this.color = dotsColor + getRandomInt(20, 128).toString(16);
    
    this.blur = getRandomInt(10, 40);

    this.draw = function () {
        //ctx.filter = "blur(16px)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    this.drawImage = function () {
        ctx.drawImage(image, this.x, this.y)
    }

    this.update = function(){
        this.checkBoundry();
        this.x += this.velocity_x;
        this.y += this.velocity_y;
    }

    this.changeDir = function (axis){
        switch (axis){
        case 'x': this.velocity_x*=(-1);
        break;
        case 'y': this.velocity_y*=(-1);
        break;
        }

    }

    this.checkBoundry = function (){
        if (this.x+this.radius > canvas.width  || this.x - this.radius < 0){
            this.changeDir('x')
        }
        else if(this.y+ this.radius > canvas.height  || this.y - this.radius < 0){
            this.changeDir('y')
        }
    }
}


function createParticles() {
    for (i = 0; i <= particleCount; i++) {
        particles.push(new particle());
    }
}

function drawParticles() {
    particles.forEach(particle => {
        particle.draw();
    });
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function redrawBg() {
    clearCanvas();
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    dotsColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
    particles = [];
    drawParticles();
}

function nextFrame() {
    particles.forEach(particle => {
        particle.update();
        clearCanvas();
        drawParticles();
    });
    requestAnimationFrame(nextFrame);
}

addEventListener("resize", (event) => function(){
    createParticles();
    redrawBg();
    
});
createParticles();
drawParticles();
requestAnimationFrame(nextFrame);
