var particles = [];
var particleCount = 60;
var canvas = document.getElementById('background-canvas');
var ctx = canvas.getContext('2d');

canvas.width = canvas.getBoundingClientRect().width;
canvas.height = canvas.getBoundingClientRect().height;

var color = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
console.log(color)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function particle() {
    this.x = getRandomInt(0, canvas.width);
    this.y = getRandomInt(0, canvas.height);

    this.direction = {
        "x": -1 + Math.random() * 2,
        "y": -1 + Math.random() * 2
    };

    this.velocity_x = Math.random() * 4
    this.velocity_y = Math.random() * 4

    this.color = color + getRandomInt(20, 128).toString(16);
    this.radius = getRandomInt(20, 2);
    this.blur = getRandomInt(10, 40);

    this.draw = function () {
        ctx.filter = "blur(16px)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    this.update = function(){
        this
    }

    this
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
    color = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
    particles = [];
    createParticles();
    drawParticles();
}

function nextFrame() {
    particles.forEach(particle => {
        
    });
}

addEventListener("resize", (event) => redrawBg());
createParticles();
drawParticles();
requestAnimationFrame(nextFrame);
