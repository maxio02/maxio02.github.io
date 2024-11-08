"use strict"
const particles = [];
const particleCount = 40;
const canvas = document.querySelector('.background-canvas')
const ctx = canvas.getContext('2d');
const fps = 30;

let dotsColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.trunc(Math.random() * (max - min) + min);
}

class Particle {
    constructor() {
        this.radius = getRandomInt(canvas.width / 30, canvas.width / 20);
        this.x = getRandomInt(this.radius, canvas.width - this.radius);
        this.y = getRandomInt(this.radius, canvas.height - this.radius);

        this.velocity_x = -2 + Math.random() * 4;
        this.velocity_y = -2 + Math.random() * 4;

        this.colorMod = getRandomInt(20, 127).toString(16);

    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = dotsColor + this.colorMod;
        ctx.fill();
        ctx.closePath();
    }


    update() {
        this.checkBoundry();
        this.x += this.velocity_x;
        this.y += this.velocity_y;
    }

    changeDir(axis) {
        switch (axis) {
            case 'x': this.velocity_x *= (-1);
                break;
            case 'y': this.velocity_y *= (-1);
                break;
        }

    }

    multCoordinateSystem(xMult, yMult) {
        this.x *= xMult;
        this.y *= yMult;
        this.radius *= xMult;
        if (this.x - this.radius < 0) {
            this.x = this.radius;
        }
        if (this.x + this.radius > canvas.width) {
            this.x = canvas.width - this.radius;
        }
        if (this.y - this.radius < 0) {
            this.y = this.radius;
        }
        if (this.y + this.radius > canvas.height) {
            this.y = canvas.height - this.radius;
        }
    }

    checkBoundry() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.changeDir('x');
        }
        else if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.changeDir('y');
        }
    }
}

function createParticles() {
    for (let i = 0; i <= particleCount; i++) {
        particles.push(new Particle());
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

    const prevWidth = canvas.width;
    const prevHeight = canvas.height;
    const scale = window.devicePixelRatio ?? 1;
    const width = window.innerWidth * scale;
    const height = window.innerHeight * scale;

    canvas.width = width;
    canvas.height = height;

    particles.forEach(particle => {
        particle.multCoordinateSystem(width / prevWidth, height / prevHeight);
    });

    drawParticles();
}

function updateColor() {
    dotsColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
}

function animate() {

    particles.forEach(particle => {
        particle.update();
    });

    clearCanvas();
    drawParticles();

    setTimeout(() => {
        requestAnimationFrame(animate);
    }, 1000 / fps);
}



createParticles();
drawParticles();
requestAnimationFrame(animate);
updateCanvasSize();

window.addEventListener('resize', updateCanvasSize)