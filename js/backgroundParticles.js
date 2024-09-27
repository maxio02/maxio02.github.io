var particles = [];
const particleCount = 40;
var canvas = document.querySelector('.background-canvas')
var ctx = canvas.getContext('2d');
canvas.width = canvas.getBoundingClientRect().width;
canvas.height = canvas.getBoundingClientRect().height;
var width = $(window).width(), height = $(window).height();
const fps = 30;

var dotsColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function particle() {
    this.radius = getRandomInt(canvas.width / 30, canvas.width / 20);
    this.x = getRandomInt(this.radius, canvas.width - this.radius);
    this.y = getRandomInt(this.radius, canvas.height - this.radius);

    this.velocity_x = -2 + Math.random() * 4;
    this.velocity_y = -2 + Math.random() * 4;

    this.colorMod = getRandomInt(20, 127).toString(16);

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = dotsColor + this.colorMod;
        ctx.fill();
        ctx.closePath();
    }


    this.update = function () {
        this.checkBoundry();
        this.x += this.velocity_x;
        this.y += this.velocity_y;
    }

    this.changeDir = function (axis) {
        switch (axis) {
            case 'x': this.velocity_x *= (-1);
                break;
            case 'y': this.velocity_y *= (-1);
                break;
        }

    }

    this.multCoordinateSystem = function (xMult, yMult) {
        this.x *= xMult;
        this.y *= yMult;
        this.radius *= xMult;
        if (this.x - this.radius < 0) {
            this.x = this.radius
        }
        if (this.x + this.radius > canvas.width) {
            this.x = canvas.width - this.radius
        }
        if (this.y - this.radius < 0) {
            this.y = this.radius
        }
        if (this.y + this.radius > canvas.height) {
            this.y = canvas.height - this.radius
        }
    }

    this.checkBoundry = function () {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.changeDir('x');
        }
        else if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.changeDir('y');
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

function updateCanvasSize() {
    clearCanvas();
    var prevCanaswidth = canvas.width;
    var prevCanasheight = canvas.height;
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;

    width = $(window).width(), height = $(window).height();

    xMult = canvas.width / prevCanaswidth;
    yMult = canvas.height / prevCanasheight;

    particles.forEach(particle => {
        particle.multCoordinateSystem(xMult, yMult);
    });

    drawParticles();
}

function updateColor() {
    dotsColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
}

function animate() {
    particles.forEach(particle => {
        particle.update();
        clearCanvas();
        drawParticles();
    });

    setTimeout(() => {
        requestAnimationFrame(animate);
    }, 1000 / fps);
}



createParticles();
drawParticles();
requestAnimationFrame(animate);


window.addEventListener('resize', updateCanvasSize)