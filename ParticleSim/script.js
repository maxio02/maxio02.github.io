/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Drawer.ts":
/*!***********************!*\
  !*** ./src/Drawer.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawArrow: () => (/* binding */ drawArrow),
/* harmony export */   drawGrid: () => (/* binding */ drawGrid),
/* harmony export */   drawLasso: () => (/* binding */ drawLasso),
/* harmony export */   drawParticles: () => (/* binding */ drawParticles)
/* harmony export */ });
/* harmony import */ var _Vec2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec2D */ "./src/Vec2D.ts");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script */ "./src/script.ts");


function drawParticles() {
    _script__WEBPACK_IMPORTED_MODULE_1__.particles.forEach(function (particle) {
        particle.draw();
    });
}
function drawGrid() {
    _script__WEBPACK_IMPORTED_MODULE_1__.back_ctx.clearRect(0, 0, _script__WEBPACK_IMPORTED_MODULE_1__.foreground_canvas.width, _script__WEBPACK_IMPORTED_MODULE_1__.foreground_canvas.height);
    _script__WEBPACK_IMPORTED_MODULE_1__.back_ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    _script__WEBPACK_IMPORTED_MODULE_1__.back_ctx.lineWidth = 1;
    for (var x = _script__WEBPACK_IMPORTED_MODULE_1__.gridSize; x < _script__WEBPACK_IMPORTED_MODULE_1__.foreground_canvas.width; x += _script__WEBPACK_IMPORTED_MODULE_1__.gridSize) {
        _script__WEBPACK_IMPORTED_MODULE_1__.back_ctx.beginPath();
        _script__WEBPACK_IMPORTED_MODULE_1__.back_ctx.moveTo(x, 0);
        _script__WEBPACK_IMPORTED_MODULE_1__.back_ctx.lineTo(x, _script__WEBPACK_IMPORTED_MODULE_1__.foreground_canvas.height);
        _script__WEBPACK_IMPORTED_MODULE_1__.back_ctx.stroke();
    }
    for (var y = _script__WEBPACK_IMPORTED_MODULE_1__.gridSize; y < _script__WEBPACK_IMPORTED_MODULE_1__.foreground_canvas.height; y += _script__WEBPACK_IMPORTED_MODULE_1__.gridSize) {
        _script__WEBPACK_IMPORTED_MODULE_1__.back_ctx.beginPath();
        _script__WEBPACK_IMPORTED_MODULE_1__.back_ctx.moveTo(0, y);
        _script__WEBPACK_IMPORTED_MODULE_1__.back_ctx.lineTo(_script__WEBPACK_IMPORTED_MODULE_1__.foreground_canvas.width, y);
        _script__WEBPACK_IMPORTED_MODULE_1__.back_ctx.stroke();
    }
}
function drawLasso() {
    if (_script__WEBPACK_IMPORTED_MODULE_1__.clicked) {
        var lineWidth = 3;
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.arc(_script__WEBPACK_IMPORTED_MODULE_1__.pointerPosition.x, _script__WEBPACK_IMPORTED_MODULE_1__.pointerPosition.y, _script__WEBPACK_IMPORTED_MODULE_1__.fieldSize, 0, 2 * Math.PI);
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.lineWidth = lineWidth;
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.stroke();
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.closePath();
    }
}
function drawArrow(from, to) {
    if (_script__WEBPACK_IMPORTED_MODULE_1__.clicked && from.x != to.x && from.y != to.y) {
        var angle = Math.atan2(to.y - from.y, to.x - from.x);
        var width = 10;
        var headlen = 10;
        var new_to = new _Vec2D__WEBPACK_IMPORTED_MODULE_0__["default"](to.x, to.y);
        // This makes it so the end of the arrow head is located at tox, toy, don't ask where 1.15 comes from
        new_to.x -= Math.cos(angle) * ((width * 1.15));
        new_to.y -= Math.sin(angle) * ((width * 1.15));
        //starting path of the arrow from the start square to the end square and drawing the stroke
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.moveTo(from.x, from.y);
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.lineTo(new_to.x, new_to.y);
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.strokeStyle = "#000000";
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.lineWidth = width;
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.stroke();
        //starting a new path from the head of the arrow to one of the sides of the point
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.moveTo(new_to.x, new_to.y);
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.lineTo(new_to.x - headlen * Math.cos(angle - Math.PI / 7), new_to.y - headlen * Math.sin(angle - Math.PI / 7));
        //path from the side point of the arrow, to the other side point
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.lineTo(new_to.x - headlen * Math.cos(angle + Math.PI / 7), new_to.y - headlen * Math.sin(angle + Math.PI / 7));
        //path from the side point back to the tip of the arrow, and then again to the opposite side point
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.lineTo(new_to.x, new_to.y);
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.lineTo(new_to.x - headlen * Math.cos(angle - Math.PI / 7), new_to.y - headlen * Math.sin(angle - Math.PI / 7));
        //draws the paths created above
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.strokeStyle = "#000000";
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.lineWidth = width;
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.stroke();
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = "#000000";
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.fill();
        _script__WEBPACK_IMPORTED_MODULE_1__.ctx.closePath();
    }
}


/***/ }),

/***/ "./src/MenuManager.ts":
/*!****************************!*\
  !*** ./src/MenuManager.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeMenu: () => (/* binding */ closeMenu),
/* harmony export */   openMenu: () => (/* binding */ openMenu)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/script.ts");

var menu_button = document.getElementById("menu-button");
var menu_elements = document.querySelectorAll(".menu-element");
menu_button.addEventListener('click', function (event) {
    event.stopPropagation();
    openMenu();
});
function openMenu() {
    if (menu_button.getAttribute("open") == "false") {
        // menu_button.removeEventListener('click', openMenu)
        menu_button.setAttribute("open", "true");
        menu_button.style.cursor = "auto";
        // setTimeout(function () {
        //     menu_elements.item(0).style.display= "inline-block";
        // }, 300);
        menu_elements.forEach(function (element) {
            setTimeout(function () {
                element.style.display = "inline-block";
            }, 300);
        });
    }
    else {
    }
}
function closeMenu() {
    menu_button.setAttribute("open", "false");
    menu_button.style.cursor = "pointer";
    menu_elements.forEach(function (element) {
        element.style.display = "none";
    });
}
var field_size_slider = document.getElementById("field-size-slider");
var field_strength_slider = document.getElementById("field-strength-slider");
var gravity_strength_slider = document.getElementById("gravity-strength-slider");
var substeps_amount_entry = document.getElementById("substeps-amount-entry");
var particles_amount_entry = document.getElementById("particles-amount-entry");
field_size_slider.oninput = function () {
    (0,_script__WEBPACK_IMPORTED_MODULE_0__.setFieldSize)(parseInt(field_size_slider.value));
};
field_strength_slider.oninput = function () {
    (0,_script__WEBPACK_IMPORTED_MODULE_0__.setFieldStrength)(parseInt(field_strength_slider.value));
};
gravity_strength_slider.oninput = function () {
    (0,_script__WEBPACK_IMPORTED_MODULE_0__.setGravityStrength)(parseInt(gravity_strength_slider.value));
};
substeps_amount_entry.addEventListener('change', function () {
    (0,_script__WEBPACK_IMPORTED_MODULE_0__.setSubsteps)(parseInt(substeps_amount_entry.value));
});
particles_amount_entry.addEventListener('change', function () {
    (0,_script__WEBPACK_IMPORTED_MODULE_0__.setParticlesNum)(parseInt(particles_amount_entry.value));
});


/***/ }),

/***/ "./src/Particle.ts":
/*!*************************!*\
  !*** ./src/Particle.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Vec2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec2D */ "./src/Vec2D.ts");

// back button
// Numbers in menu
// gravity direction
// grid size adj
// ball randomness
var Particle = /** @class */ (function () {
    function Particle(pos, radius, acc, color) {
        this.pos_curr = pos;
        this.pos_prev = this.pos_curr;
        this.radius = radius;
        this.acceleration = acc;
        this.color = color;
    }
    Particle.prototype.draw = function () {
        var xpos = this.pos_curr.x;
        var ypos = this.pos_curr.y;
        Particle.ctx.beginPath();
        Particle.ctx.arc(xpos, ypos, this.radius, 0, 2 * Math.PI, false);
        Particle.ctx.fillStyle = this.color;
        Particle.ctx.fill();
        Particle.ctx.lineWidth = 2;
        Particle.ctx.strokeStyle = "black";
        Particle.ctx.stroke();
        Particle.ctx.closePath();
    };
    Particle.prototype.updatePosition = function (dt) {
        var velocity = this.pos_curr.subtract(this.pos_prev);
        this.pos_prev = this.pos_curr;
        this.pos_curr = this.pos_curr.add(velocity);
        this.pos_curr = this.pos_curr.add(this.acceleration.multiply(dt * dt));
        this.acceleration = new _Vec2D__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
    };
    Particle.prototype.accelerate = function (acc) {
        this.acceleration = this.acceleration.add(acc);
    };
    Particle.canvas = document.getElementById('foreground-canvas');
    Particle.ctx = Particle.canvas.getContext('2d');
    return Particle;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Particle);


/***/ }),

/***/ "./src/Vec2D.ts":
/*!**********************!*\
  !*** ./src/Vec2D.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Vec2D = /** @class */ (function () {
    function Vec2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Vec2D.prototype.add = function (vec) {
        return new Vec2D(this.x + vec.x, this.y + vec.y);
    };
    Vec2D.prototype.subtract = function (vec) {
        return new Vec2D(this.x - vec.x, this.y - vec.y);
    };
    Vec2D.prototype.multiply = function (scalar) {
        return new Vec2D(this.x * scalar, this.y * scalar);
    };
    Vec2D.prototype.divide = function (scalar) {
        return new Vec2D(this.x / scalar, this.y / scalar);
    };
    Vec2D.prototype.dot = function (vec) {
        return this.x * vec.x + this.y * vec.y;
    };
    Vec2D.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    return Vec2D;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vec2D);


/***/ }),

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   back_ctx: () => (/* binding */ back_ctx),
/* harmony export */   clicked: () => (/* binding */ clicked),
/* harmony export */   ctx: () => (/* binding */ ctx),
/* harmony export */   fieldSize: () => (/* binding */ fieldSize),
/* harmony export */   foreground_canvas: () => (/* binding */ foreground_canvas),
/* harmony export */   gravity: () => (/* binding */ gravity),
/* harmony export */   grid: () => (/* binding */ grid),
/* harmony export */   gridSize: () => (/* binding */ gridSize),
/* harmony export */   particles: () => (/* binding */ particles),
/* harmony export */   pointerPosition: () => (/* binding */ pointerPosition),
/* harmony export */   setFieldSize: () => (/* binding */ setFieldSize),
/* harmony export */   setFieldStrength: () => (/* binding */ setFieldStrength),
/* harmony export */   setGravityStrength: () => (/* binding */ setGravityStrength),
/* harmony export */   setParticlesNum: () => (/* binding */ setParticlesNum),
/* harmony export */   setSubsteps: () => (/* binding */ setSubsteps)
/* harmony export */ });
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawer */ "./src/Drawer.ts");
/* harmony import */ var _MenuManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuManager */ "./src/MenuManager.ts");
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Particle */ "./src/Particle.ts");
/* harmony import */ var _Vec2D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vec2D */ "./src/Vec2D.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var gridSize = 30;
var grid = [];
var particles = [];
var particleCount = 100;
var pointerPosition = new _Vec2D__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0);
var click_start_position = new _Vec2D__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0);
var pointer_function = 'field';
var gravity = new _Vec2D__WEBPACK_IMPORTED_MODULE_3__["default"](0, 1);
var foreground_canvas = document.getElementById('foreground-canvas');
var background_canvas = document.getElementById('background-canvas');
var fieldSize = 100;
var fieldStrenght = 10;
var substeps_amount = 4;
foreground_canvas.width = foreground_canvas.getBoundingClientRect().width;
foreground_canvas.height = foreground_canvas.getBoundingClientRect().height;
background_canvas.width = background_canvas.getBoundingClientRect().width;
background_canvas.height = background_canvas.getBoundingClientRect().height;
var ctx = _Particle__WEBPACK_IMPORTED_MODULE_2__["default"].canvas.getContext('2d');
var back_ctx = background_canvas.getContext('2d');
var fps = 60;
var clicked = false;
var fpsCounter = document.createElement('div');
fpsCounter.style.position = 'absolute';
fpsCounter.style.top = '10px';
fpsCounter.style.left = '10px';
fpsCounter.style.color = 'black';
var particleCounter = document.createElement('div');
particleCounter.style.position = 'absolute';
particleCounter.style.top = '30px';
particleCounter.style.left = '10px';
particleCounter.style.color = 'black';
document.body.appendChild(fpsCounter);
document.body.appendChild(particleCounter);
function setFieldStrength(value) {
    fieldStrenght = value;
}
function setFieldSize(value) {
    fieldSize = value;
}
function setGravityStrength(value) {
    gravity = new _Vec2D__WEBPACK_IMPORTED_MODULE_3__["default"](0, value / 10);
}
function setSubsteps(value) {
    substeps_amount = value;
}
function setParticlesNum(value) {
    particleCount = value;
}
function initializeGrid() {
    var columns = Math.ceil(foreground_canvas.width / gridSize);
    var rows = Math.ceil(foreground_canvas.height / gridSize);
    for (var i_1 = 0; i_1 < columns; i_1++) {
        grid[i_1] = [];
        for (var j = 0; j < rows; j++) {
            grid[i_1][j] = [];
        }
    }
}
function removeFromGrid(particle) {
    var column = Math.floor(particle.pos_curr.x / gridSize);
    var row = Math.floor(particle.pos_curr.y / gridSize);
    if (column >= 0 && column < grid.length && row >= 0 && row < grid[column].length) {
        var particlesInCell = grid[column][row];
        var index = particlesInCell.indexOf(particle);
        if (index !== -1) {
            particlesInCell.splice(index, 1);
        }
    }
}
function addToGrid(particle) {
    var column = Math.floor(particle.pos_curr.x / gridSize);
    var row = Math.floor(particle.pos_curr.y / gridSize);
    if (column >= 0 && column < grid.length && row >= 0 && row < grid[column].length) {
        grid[column][row].push(particle);
    }
}
function getNeighboringParticles(particle) {
    var column = Math.floor(particle.pos_curr.x / gridSize);
    var row = Math.floor(particle.pos_curr.y / gridSize);
    var neighboringParticles = [];
    for (var i_2 = column - 1; i_2 <= column + 1; i_2++) {
        for (var j = row - 1; j <= row + 1; j++) {
            if (i_2 >= 0 && i_2 < grid.length && j >= 0 && j < grid[i_2].length) {
                neighboringParticles.push.apply(neighboringParticles, grid[i_2][j]);
            }
        }
    }
    return neighboringParticles;
}
function tick(dt) {
    var sub_steps = substeps_amount;
    var sub_dt = dt / sub_steps;
    for (var i_3 = 0; i_3 < sub_steps; i_3++) {
        if (gravity.y != 0) {
            applyGravity();
        }
        if (clicked) {
            switch (pointer_function) {
                case 'field':
                    applyField(pointerPosition);
                    break;
                case 'gravity':
                    break;
                case 'throw':
                    break;
            }
        }
        applyConstraint();
        solveCollisions();
        updatePositions(sub_dt);
    }
}
function updatePositions(dt) {
    particles.forEach(function (particle) {
        removeFromGrid(particle);
        particle.updatePosition(dt);
        addToGrid(particle);
    });
}
function applyGravity() {
    particles.forEach(function (particle) {
        particle.accelerate(gravity);
    });
}
function applyField(fieldPos) {
    particles.forEach(function (particle) {
        var pullDirection = fieldPos.subtract(particle.pos_curr);
        var distance = pullDirection.length();
        if (distance < fieldSize) {
            var n = pullDirection;
            n = n.multiply(fieldStrenght / 100);
            // n = n.divide(distance*distance)
            particle.accelerate(n);
        }
    });
}
function solveCollisions() {
    particles.forEach(function (particle1) {
        var neighboringParticles = getNeighboringParticles(particle1);
        neighboringParticles.forEach(function (particle2) {
            var collision_direction = particle1.pos_curr.subtract(particle2.pos_curr);
            var distance = collision_direction.length();
            if (distance != 0) {
                if (distance < particle1.radius + particle2.radius) {
                    var n = collision_direction.divide(distance);
                    var delta = particle1.radius + particle2.radius - distance;
                    particle1.pos_curr = particle1.pos_curr.add(n.multiply(delta * 0.5));
                    particle2.pos_curr = particle2.pos_curr.subtract(n.multiply(delta * 0.5));
                }
            }
        });
    });
}
function applyConstraint() {
    particles.forEach(function (particle) {
        // Apply floor constraint
        if (particle.pos_curr.y + particle.radius > foreground_canvas.height) {
            particle.pos_curr.y = foreground_canvas.height - particle.radius;
            particle.pos_prev.y = particle.pos_curr.y + particle.pos_curr.y - particle.pos_prev.y;
        }
        // Apply Ceiling constraint
        if (particle.pos_curr.y - particle.radius < 0) {
            particle.pos_curr.y = particle.radius;
            particle.pos_prev.y = particle.pos_curr.y + particle.pos_curr.y - particle.pos_prev.y;
        }
        // Apply left wall constraint
        if (particle.pos_curr.x - particle.radius < 0) {
            particle.pos_curr.x = particle.radius;
            particle.pos_prev.x = particle.pos_curr.x + particle.pos_curr.x - particle.pos_prev.x;
        }
        // Apply right wall constraint
        if (particle.pos_curr.x + particle.radius > foreground_canvas.width) {
            particle.pos_curr.x = foreground_canvas.width - particle.radius;
            particle.pos_prev.x = particle.pos_curr.x + particle.pos_curr.x - particle.pos_prev.x;
        }
    });
}
function clearCanvas() {
    ctx.clearRect(0, 0, foreground_canvas.width, foreground_canvas.height);
}
function updateCanvasSize() {
    foreground_canvas.width = foreground_canvas.getBoundingClientRect().width;
    foreground_canvas.height = foreground_canvas.getBoundingClientRect().height;
    background_canvas.width = background_canvas.getBoundingClientRect().width;
    background_canvas.height = background_canvas.getBoundingClientRect().height;
    initializeGrid();
    (0,_Drawer__WEBPACK_IMPORTED_MODULE_0__.drawGrid)();
}
var frameCount = 0;
var lastTime = performance.now() / 10;
function calculateFPS() {
    var currentTime = performance.now() / 10;
    var timeDiff = currentTime - lastTime;
    var fps = Math.round(1000 / timeDiff);
    lastTime = currentTime;
    return fps;
}
function getPointerFunction() {
    var radioButtons = document.getElementsByName('cursor-function');
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return radioButtons[i].value;
        }
    }
}
function handleMouseDown(event) {
    event.stopPropagation();
    clicked = true;
    pointer_function = getPointerFunction();
    if (event instanceof MouseEvent) {
        pointerPosition.x = event.clientX;
        pointerPosition.y = event.clientY;
    }
    else if (event instanceof TouchEvent) {
        pointerPosition.x = event.touches[0].clientX;
        pointerPosition.y = event.touches[0].clientY;
    }
    click_start_position.x = pointerPosition.x;
    click_start_position.y = pointerPosition.y;
}
function handleMouseUp(event) {
    event.stopPropagation();
    clicked = false;
}
function handleMoveEvent(event) {
    event.stopPropagation();
    if (clicked) {
        if (event instanceof MouseEvent) {
            pointerPosition.x = event.clientX;
            pointerPosition.y = event.clientY;
        }
        else if (event instanceof TouchEvent) {
            pointerPosition.x = event.touches[0].clientX;
            pointerPosition.y = event.touches[0].clientY;
        }
    }
}
function animate() {
    return __awaiter(this, void 0, void 0, function () {
        var red, green, blue, color, mult;
        return __generator(this, function (_a) {
            tick(0.5 / fps * 60);
            clearCanvas();
            (0,_Drawer__WEBPACK_IMPORTED_MODULE_0__.drawParticles)();
            switch (pointer_function) {
                case 'field':
                    (0,_Drawer__WEBPACK_IMPORTED_MODULE_0__.drawLasso)();
                    break;
                case 'gravity':
                    (0,_Drawer__WEBPACK_IMPORTED_MODULE_0__.drawArrow)(click_start_position, pointerPosition);
                    gravity = pointerPosition.subtract(click_start_position).divide(500);
                    break;
                case 'throw':
                    break;
            }
            red = Math.floor(Math.random() * 256);
            green = Math.floor(Math.random() * 256);
            blue = Math.floor(Math.random() * 256);
            color = "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
            mult = fps / 60;
            if (i % 5 == 0 && particles.length < particleCount) {
                particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_2__["default"](new _Vec2D__WEBPACK_IMPORTED_MODULE_3__["default"](200, 200), 15, new _Vec2D__WEBPACK_IMPORTED_MODULE_3__["default"](100 * mult, -150 * mult), color));
                particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_2__["default"](new _Vec2D__WEBPACK_IMPORTED_MODULE_3__["default"](200, 260), 15, new _Vec2D__WEBPACK_IMPORTED_MODULE_3__["default"](90 * mult, -150 * mult), color));
                particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_2__["default"](new _Vec2D__WEBPACK_IMPORTED_MODULE_3__["default"](200, 320), 15, new _Vec2D__WEBPACK_IMPORTED_MODULE_3__["default"](85 * mult, -150 * mult), color));
                particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_2__["default"](new _Vec2D__WEBPACK_IMPORTED_MODULE_3__["default"](200, 380), 15, new _Vec2D__WEBPACK_IMPORTED_MODULE_3__["default"](90 * mult, -150 * mult), color));
                particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_2__["default"](new _Vec2D__WEBPACK_IMPORTED_MODULE_3__["default"](200, 440), 15, new _Vec2D__WEBPACK_IMPORTED_MODULE_3__["default"](85 * mult, -150 * mult), color));
            }
            i++;
            frameCount++;
            if (frameCount % 10 === 0) {
                fps = calculateFPS();
                fpsCounter.innerText = "FPS: ".concat(fps);
                particleCounter.innerText = "Particles: ".concat(particles.length);
            }
            requestAnimationFrame(animate);
            return [2 /*return*/];
        });
    });
}
var i = 0;
var main_body = document.getElementById('main_container');
window.addEventListener("resize", updateCanvasSize);
main_body.addEventListener("mousedown", handleMouseDown);
main_body.addEventListener("mouseup", handleMouseUp);
main_body.addEventListener("mousemove", handleMoveEvent);
main_body.addEventListener("touchstart", handleMouseDown);
main_body.addEventListener("touchend", handleMouseUp);
main_body.addEventListener("touchmove", handleMoveEvent);
main_body.addEventListener("click", function (event) {
    event.stopPropagation();
    (0,_MenuManager__WEBPACK_IMPORTED_MODULE_1__.closeMenu)();
});
initializeGrid();
(0,_Drawer__WEBPACK_IMPORTED_MODULE_0__.drawGrid)();
requestAnimationFrame(animate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/script.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/MenuManager.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBZ0IsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDekQsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNyRCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3pELFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDMUQsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUN0RCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3pELFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFLO0lBQ25ELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4Qix1REFBUyxFQUFFLENBQUM7QUFDWixDQUFDLENBQUMsQ0FBQztBQUVILGNBQWMsRUFBRSxDQUFDO0FBQ2pCLGlEQUFRLEVBQUUsQ0FBQztBQUNYLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7O1VDMVYvQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFydGljbGVzaW12Mi8uL3NyYy9EcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vcGFydGljbGVzaW12Mi8uL3NyYy9NZW51TWFuYWdlci50cyIsIndlYnBhY2s6Ly9wYXJ0aWNsZXNpbXYyLy4vc3JjL1BhcnRpY2xlLnRzIiwid2VicGFjazovL3BhcnRpY2xlc2ltdjIvLi9zcmMvVmVjMkQudHMiLCJ3ZWJwYWNrOi8vcGFydGljbGVzaW12Mi8uL3NyYy9zY3JpcHQudHMiLCJ3ZWJwYWNrOi8vcGFydGljbGVzaW12Mi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYXJ0aWNsZXNpbXYyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wYXJ0aWNsZXNpbXYyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFydGljbGVzaW12Mi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BhcnRpY2xlc2ltdjIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wYXJ0aWNsZXNpbXYyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wYXJ0aWNsZXNpbXYyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmVjMkQgZnJvbSBcIi4vVmVjMkRcIjtcclxuaW1wb3J0IHsgYmFja19jdHgsIGN0eCAsIGZvcmVncm91bmRfY2FudmFzLCBwYXJ0aWNsZXMsIGdyaWRTaXplLCBwb2ludGVyUG9zaXRpb24sIGZpZWxkU2l6ZSwgY2xpY2tlZH0gZnJvbSBcIi4vc2NyaXB0XCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdQYXJ0aWNsZXMoKSB7XHJcbiAgICBwYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGUpID0+IHtcclxuICAgICAgcGFydGljbGUuZHJhdygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd0dyaWQoKXtcclxuICAgIGJhY2tfY3R4LmNsZWFyUmVjdCgwLCAwLCBmb3JlZ3JvdW5kX2NhbnZhcy53aWR0aCwgZm9yZWdyb3VuZF9jYW52YXMuaGVpZ2h0KVxyXG4gICAgYmFja19jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjEpJztcclxuICAgIGJhY2tfY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgICBmb3IgKGxldCB4ID0gZ3JpZFNpemU7IHggPCBmb3JlZ3JvdW5kX2NhbnZhcy53aWR0aDsgeCArPSBncmlkU2l6ZSkge1xyXG4gICAgICBiYWNrX2N0eC5iZWdpblBhdGgoKTtcclxuICAgICAgYmFja19jdHgubW92ZVRvKHgsIDApO1xyXG4gICAgICBiYWNrX2N0eC5saW5lVG8oeCwgZm9yZWdyb3VuZF9jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgYmFja19jdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCB5ID0gZ3JpZFNpemU7IHkgPCBmb3JlZ3JvdW5kX2NhbnZhcy5oZWlnaHQ7IHkgKz0gZ3JpZFNpemUpIHtcclxuICAgICAgYmFja19jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGJhY2tfY3R4Lm1vdmVUbygwLCB5KTtcclxuICAgICAgYmFja19jdHgubGluZVRvKGZvcmVncm91bmRfY2FudmFzLndpZHRoLCB5KTtcclxuICAgICAgYmFja19jdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd0xhc3NvKCl7XHJcbiAgICBpZiAoY2xpY2tlZCkge1xyXG4gICAgICBjb25zdCBsaW5lV2lkdGggPSAzO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMocG9pbnRlclBvc2l0aW9uLngsIHBvaW50ZXJQb3NpdGlvbi55LCBmaWVsZFNpemUsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC4yKSc7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGRyYXdBcnJvdyhmcm9tOiBWZWMyRCwgdG86IFZlYzJEKXtcclxuICAgIGlmIChjbGlja2VkICYmIGZyb20ueCAhPSB0by54ICYmIGZyb20ueSAhPSB0by55KSB7XHJcbiAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMih0by55LWZyb20ueSx0by54LWZyb20ueCk7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSAxMDtcclxuICAgICAgICB2YXIgaGVhZGxlbiA9IDEwO1xyXG4gICAgICAgIHZhciBuZXdfdG8gPSBuZXcgVmVjMkQodG8ueCwgdG8ueSk7XHJcbiAgICAgICAgLy8gVGhpcyBtYWtlcyBpdCBzbyB0aGUgZW5kIG9mIHRoZSBhcnJvdyBoZWFkIGlzIGxvY2F0ZWQgYXQgdG94LCB0b3ksIGRvbid0IGFzayB3aGVyZSAxLjE1IGNvbWVzIGZyb21cclxuICAgICAgICBuZXdfdG8ueCAtPSBNYXRoLmNvcyhhbmdsZSkgKiAoKHdpZHRoKjEuMTUpKTtcclxuICAgICAgICBuZXdfdG8ueSAtPSBNYXRoLnNpbihhbmdsZSkgKiAoKHdpZHRoKjEuMTUpKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9zdGFydGluZyBwYXRoIG9mIHRoZSBhcnJvdyBmcm9tIHRoZSBzdGFydCBzcXVhcmUgdG8gdGhlIGVuZCBzcXVhcmUgYW5kIGRyYXdpbmcgdGhlIHN0cm9rZVxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKGZyb20ueCwgZnJvbS55KTtcclxuICAgICAgICBjdHgubGluZVRvKG5ld190by54LCBuZXdfdG8ueSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3N0YXJ0aW5nIGEgbmV3IHBhdGggZnJvbSB0aGUgaGVhZCBvZiB0aGUgYXJyb3cgdG8gb25lIG9mIHRoZSBzaWRlcyBvZiB0aGUgcG9pbnRcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyhuZXdfdG8ueCwgbmV3X3RvLnkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8obmV3X3RvLngtaGVhZGxlbipNYXRoLmNvcyhhbmdsZS1NYXRoLlBJLzcpLG5ld190by55LWhlYWRsZW4qTWF0aC5zaW4oYW5nbGUtTWF0aC5QSS83KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9wYXRoIGZyb20gdGhlIHNpZGUgcG9pbnQgb2YgdGhlIGFycm93LCB0byB0aGUgb3RoZXIgc2lkZSBwb2ludFxyXG4gICAgICAgIGN0eC5saW5lVG8obmV3X3RvLngtaGVhZGxlbipNYXRoLmNvcyhhbmdsZStNYXRoLlBJLzcpLG5ld190by55LWhlYWRsZW4qTWF0aC5zaW4oYW5nbGUrTWF0aC5QSS83KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9wYXRoIGZyb20gdGhlIHNpZGUgcG9pbnQgYmFjayB0byB0aGUgdGlwIG9mIHRoZSBhcnJvdywgYW5kIHRoZW4gYWdhaW4gdG8gdGhlIG9wcG9zaXRlIHNpZGUgcG9pbnRcclxuICAgICAgICBjdHgubGluZVRvKG5ld190by54LCBuZXdfdG8ueSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyhuZXdfdG8ueC1oZWFkbGVuKk1hdGguY29zKGFuZ2xlLU1hdGguUEkvNyksbmV3X3RvLnktaGVhZGxlbipNYXRoLnNpbihhbmdsZS1NYXRoLlBJLzcpKTtcclxuXHJcbiAgICAgICAgLy9kcmF3cyB0aGUgcGF0aHMgY3JlYXRlZCBhYm92ZVxyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzAwMDAwMFwiO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB3aWR0aDtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgc2V0RmllbGRTaXplLCBzZXRGaWVsZFN0cmVuZ3RoLCBzZXRHcmF2aXR5U3RyZW5ndGgsIHNldFN1YnN0ZXBzLCBzZXRQYXJ0aWNsZXNOdW19IGZyb20gXCIuL3NjcmlwdFwiO1xyXG5cclxuY29uc3QgbWVudV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnV0dG9uXCIpO1xyXG5jb25zdCBtZW51X2VsZW1lbnRzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtZWxlbWVudFwiKTtcclxuXHJcbm1lbnVfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBvcGVuTWVudSgpO1xyXG59KTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XHJcbiAgICBpZiAobWVudV9idXR0b24uZ2V0QXR0cmlidXRlKFwib3BlblwiKSA9PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAvLyBtZW51X2J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5NZW51KVxyXG4gICAgICAgIG1lbnVfYnV0dG9uLnNldEF0dHJpYnV0ZShcIm9wZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIG1lbnVfYnV0dG9uLnN0eWxlLmN1cnNvciA9IFwiYXV0b1wiO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICBtZW51X2VsZW1lbnRzLml0ZW0oMCkuc3R5bGUuZGlzcGxheT0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAvLyB9LCAzMDApO1xyXG5cclxuICAgICAgICBtZW51X2VsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcclxuICAgIG1lbnVfYnV0dG9uLnNldEF0dHJpYnV0ZShcIm9wZW5cIiwgXCJmYWxzZVwiKTtcclxuICAgIG1lbnVfYnV0dG9uLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgbWVudV9lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG52YXIgZmllbGRfc2l6ZV9zbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkLXNpemUtc2xpZGVyXCIpICBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG52YXIgZmllbGRfc3RyZW5ndGhfc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZC1zdHJlbmd0aC1zbGlkZXJcIikgIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbnZhciBncmF2aXR5X3N0cmVuZ3RoX3NsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3Jhdml0eS1zdHJlbmd0aC1zbGlkZXJcIikgIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbnZhciBzdWJzdGVwc19hbW91bnRfZW50cnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YnN0ZXBzLWFtb3VudC1lbnRyeVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG52YXIgcGFydGljbGVzX2Ftb3VudF9lbnRyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFydGljbGVzLWFtb3VudC1lbnRyeVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuZmllbGRfc2l6ZV9zbGlkZXIub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgc2V0RmllbGRTaXplKHBhcnNlSW50KGZpZWxkX3NpemVfc2xpZGVyLnZhbHVlKSk7XHJcbiAgfVxyXG5cclxuZmllbGRfc3RyZW5ndGhfc2xpZGVyLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHNldEZpZWxkU3RyZW5ndGgocGFyc2VJbnQoZmllbGRfc3RyZW5ndGhfc2xpZGVyLnZhbHVlKSk7XHJcbiAgfVxyXG5cclxuZ3Jhdml0eV9zdHJlbmd0aF9zbGlkZXIub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgc2V0R3Jhdml0eVN0cmVuZ3RoKHBhcnNlSW50KGdyYXZpdHlfc3RyZW5ndGhfc2xpZGVyLnZhbHVlKSk7XHJcbiAgfVxyXG5cclxuc3Vic3RlcHNfYW1vdW50X2VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgc2V0U3Vic3RlcHMocGFyc2VJbnQoc3Vic3RlcHNfYW1vdW50X2VudHJ5LnZhbHVlKSk7XHJcbn0pO1xyXG5wYXJ0aWNsZXNfYW1vdW50X2VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgc2V0UGFydGljbGVzTnVtKHBhcnNlSW50KHBhcnRpY2xlc19hbW91bnRfZW50cnkudmFsdWUpKTtcclxufSk7XHJcblxyXG4iLCJpbXBvcnQgVmVjMkQgZnJvbSBcIi4vVmVjMkRcIlxyXG4vLyBiYWNrIGJ1dHRvblxyXG4vLyBOdW1iZXJzIGluIG1lbnVcclxuLy8gZ3Jhdml0eSBkaXJlY3Rpb25cclxuLy8gZ3JpZCBzaXplIGFkalxyXG4vLyBiYWxsIHJhbmRvbW5lc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljbGUge1xyXG4gICAgc3RhdGljIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JlZ3JvdW5kLWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgc3RhdGljIGN0eCA9IFBhcnRpY2xlLmNhbnZhcyEuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHBvc19jdXJyOiBWZWMyRFxyXG4gICAgcG9zX3ByZXY6IFZlYzJEXHJcbiAgICBhY2NlbGVyYXRpb246IFZlYzJEXHJcbiAgICByYWRpdXM6IG51bWJlclxyXG4gICAgY29sb3I6IHN0cmluZ1xyXG4gICAgXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvczogVmVjMkQsIHJhZGl1czogbnVtYmVyLCBhY2M6IFZlYzJELCBjb2xvcjogc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMucG9zX2N1cnIgPSBwb3NcclxuICAgICAgdGhpcy5wb3NfcHJldiA9IHRoaXMucG9zX2N1cnJcclxuICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gYWNjXHJcbiAgICAgIHRoaXMuY29sb3IgPSBjb2xvclxyXG4gICAgfVxyXG4gIFxyXG4gICAgZHJhdygpIHtcclxuICAgICAgbGV0IHhwb3M6IG51bWJlciA9IHRoaXMucG9zX2N1cnIueFxyXG4gICAgICBsZXQgeXBvczogbnVtYmVyID0gdGhpcy5wb3NfY3Vyci55XHJcbiAgICAgIFBhcnRpY2xlLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgUGFydGljbGUuY3R4LmFyYyhcclxuICAgICAgICB4cG9zLFxyXG4gICAgICAgIHlwb3MsXHJcbiAgICAgICAgdGhpcy5yYWRpdXMsXHJcbiAgICAgICAgMCxcclxuICAgICAgICAyICogTWF0aC5QSSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgICApO1xyXG4gICAgICBQYXJ0aWNsZS5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgUGFydGljbGUuY3R4LmZpbGwoKTtcclxuXHJcbiAgICAgIFBhcnRpY2xlLmN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICBQYXJ0aWNsZS5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgIFBhcnRpY2xlLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgIFBhcnRpY2xlLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQb3NpdGlvbihkdDogbnVtYmVyKXtcclxuICAgICAgbGV0IHZlbG9jaXR5OiBWZWMyRCA9IHRoaXMucG9zX2N1cnIuc3VidHJhY3QodGhpcy5wb3NfcHJldilcclxuICAgICAgdGhpcy5wb3NfcHJldiA9IHRoaXMucG9zX2N1cnJcclxuXHJcbiAgICAgIHRoaXMucG9zX2N1cnIgPSB0aGlzLnBvc19jdXJyLmFkZCh2ZWxvY2l0eSlcclxuICAgICAgdGhpcy5wb3NfY3VyciA9IHRoaXMucG9zX2N1cnIuYWRkKHRoaXMuYWNjZWxlcmF0aW9uLm11bHRpcGx5KGR0KmR0KSlcclxuXHJcbiAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gbmV3IFZlYzJEKDAsMClcclxuICAgIH1cclxuXHJcbiAgICBhY2NlbGVyYXRlKGFjYzpWZWMyRCl7XHJcbiAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gdGhpcy5hY2NlbGVyYXRpb24uYWRkKGFjYylcclxuICAgIH1cclxuXHJcbiAgICBcclxuICB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjMkQge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gIFxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgdGhpcy54ID0geDtcclxuICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICBcclxuICAgIGFkZCh2ZWM6IFZlYzJEKTogVmVjMkQge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzJEKHRoaXMueCArIHZlYy54LCB0aGlzLnkgKyB2ZWMueSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzdWJ0cmFjdCh2ZWM6IFZlYzJEKTogVmVjMkQge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzJEKHRoaXMueCAtIHZlYy54LCB0aGlzLnkgLSB2ZWMueSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBtdWx0aXBseShzY2FsYXI6IG51bWJlcik6IFZlYzJEIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMyRCh0aGlzLnggKiBzY2FsYXIsIHRoaXMueSAqIHNjYWxhcik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBkaXZpZGUoc2NhbGFyOiBudW1iZXIpOiBWZWMyRCB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMkQodGhpcy54IC8gc2NhbGFyLCB0aGlzLnkgLyBzY2FsYXIpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZG90KHZlYzogVmVjMkQpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy54ICogdmVjLnggKyB0aGlzLnkgKiB2ZWMueTtcclxuICAgIH1cclxuXHJcbiAgICBsZW5ndGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IGRyYXdBcnJvdywgZHJhd0dyaWQsIGRyYXdMYXNzbywgZHJhd1BhcnRpY2xlcyB9IGZyb20gXCIuL0RyYXdlclwiO1xyXG5pbXBvcnQgeyBjbG9zZU1lbnUgfSBmcm9tIFwiLi9NZW51TWFuYWdlclwiO1xyXG5pbXBvcnQgUGFydGljbGUgZnJvbSBcIi4vUGFydGljbGVcIjtcclxuaW1wb3J0IFZlYzJEIGZyb20gXCIuL1ZlYzJEXCI7XHJcbmV4cG9ydCBjb25zdCBncmlkU2l6ZSA9IDMwO1xyXG5leHBvcnQgY29uc3QgZ3JpZDogUGFydGljbGVbXVtdW10gPSBbXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwYXJ0aWNsZXM6IFBhcnRpY2xlW10gPSBbXTtcclxudmFyIHBhcnRpY2xlQ291bnQgPSAxMDA7XHJcbmV4cG9ydCBjb25zdCBwb2ludGVyUG9zaXRpb24gPSBuZXcgVmVjMkQoMCwwKVxyXG52YXIgY2xpY2tfc3RhcnRfcG9zaXRpb24gPSBuZXcgVmVjMkQoMCwwKVxyXG52YXIgcG9pbnRlcl9mdW5jdGlvbiA9ICdmaWVsZCdcclxuZXhwb3J0IHZhciBncmF2aXR5ID0gbmV3IFZlYzJEKDAsIDEpXHJcbmV4cG9ydCBjb25zdCBmb3JlZ3JvdW5kX2NhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JlZ3JvdW5kLWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5jb25zdCBiYWNrZ3JvdW5kX2NhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kLWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5leHBvcnQgdmFyIGZpZWxkU2l6ZSA9IDEwMFxyXG52YXIgZmllbGRTdHJlbmdodCA9IDEwXHJcbnZhciBzdWJzdGVwc19hbW91bnQgPSA0XHJcbmZvcmVncm91bmRfY2FudmFzIS53aWR0aCA9IGZvcmVncm91bmRfY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG5mb3JlZ3JvdW5kX2NhbnZhcyEuaGVpZ2h0ID0gZm9yZWdyb3VuZF9jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG5iYWNrZ3JvdW5kX2NhbnZhcyEud2lkdGggPSBiYWNrZ3JvdW5kX2NhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuYmFja2dyb3VuZF9jYW52YXMhLmhlaWdodCA9IGJhY2tncm91bmRfY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuZXhwb3J0IGNvbnN0IGN0eCA9IFBhcnRpY2xlLmNhbnZhcyEuZ2V0Q29udGV4dCgnMmQnKTtcclxuZXhwb3J0IGNvbnN0IGJhY2tfY3R4ID0gYmFja2dyb3VuZF9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxudmFyIGZwcyA9IDYwO1xyXG5leHBvcnQgbGV0IGNsaWNrZWQ9IGZhbHNlXHJcbmxldCBmcHNDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmZwc0NvdW50ZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5mcHNDb3VudGVyLnN0eWxlLnRvcCA9ICcxMHB4JztcclxuZnBzQ291bnRlci5zdHlsZS5sZWZ0ID0gJzEwcHgnO1xyXG5mcHNDb3VudGVyLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcclxuXHJcbmxldCBwYXJ0aWNsZUNvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxucGFydGljbGVDb3VudGVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxucGFydGljbGVDb3VudGVyLnN0eWxlLnRvcCA9ICczMHB4JztcclxucGFydGljbGVDb3VudGVyLnN0eWxlLmxlZnQgPSAnMTBweCc7XHJcbnBhcnRpY2xlQ291bnRlci5zdHlsZS5jb2xvciA9ICdibGFjayc7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZwc0NvdW50ZXIpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhcnRpY2xlQ291bnRlcik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RmllbGRTdHJlbmd0aCh2YWx1ZTogbnVtYmVyKXtcclxuICBmaWVsZFN0cmVuZ2h0ID0gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWVsZFNpemUodmFsdWU6IG51bWJlcil7XHJcbiAgZmllbGRTaXplID0gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRHcmF2aXR5U3RyZW5ndGgodmFsdWU6IG51bWJlcil7XHJcbiAgZ3Jhdml0eSA9IG5ldyBWZWMyRCgwLCB2YWx1ZS8xMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdWJzdGVwcyh2YWx1ZTogbnVtYmVyKXtcclxuICBzdWJzdGVwc19hbW91bnQgPSB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBhcnRpY2xlc051bSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgcGFydGljbGVDb3VudCA9IHZhbHVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVHcmlkKCkge1xyXG4gIGNvbnN0IGNvbHVtbnMgPSBNYXRoLmNlaWwoZm9yZWdyb3VuZF9jYW52YXMud2lkdGggLyBncmlkU2l6ZSk7XHJcbiAgY29uc3Qgcm93cyA9IE1hdGguY2VpbChmb3JlZ3JvdW5kX2NhbnZhcy5oZWlnaHQgLyBncmlkU2l6ZSk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uczsgaSsrKSB7XHJcbiAgICBncmlkW2ldID0gW107XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd3M7IGorKykge1xyXG4gICAgICBncmlkW2ldW2pdID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGcm9tR3JpZChwYXJ0aWNsZTogUGFydGljbGUpIHtcclxuICBjb25zdCBjb2x1bW4gPSBNYXRoLmZsb29yKHBhcnRpY2xlLnBvc19jdXJyLnggLyBncmlkU2l6ZSk7XHJcbiAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihwYXJ0aWNsZS5wb3NfY3Vyci55IC8gZ3JpZFNpemUpO1xyXG5cclxuICBpZiAoY29sdW1uID49IDAgJiYgY29sdW1uIDwgZ3JpZC5sZW5ndGggJiYgcm93ID49IDAgJiYgcm93IDwgZ3JpZFtjb2x1bW5dLmxlbmd0aCkge1xyXG4gICAgY29uc3QgcGFydGljbGVzSW5DZWxsID0gZ3JpZFtjb2x1bW5dW3Jvd107XHJcbiAgICBjb25zdCBpbmRleCA9IHBhcnRpY2xlc0luQ2VsbC5pbmRleE9mKHBhcnRpY2xlKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgcGFydGljbGVzSW5DZWxsLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb0dyaWQocGFydGljbGU6IFBhcnRpY2xlKSB7XHJcbiAgY29uc3QgY29sdW1uID0gTWF0aC5mbG9vcihwYXJ0aWNsZS5wb3NfY3Vyci54IC8gZ3JpZFNpemUpO1xyXG4gIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IocGFydGljbGUucG9zX2N1cnIueSAvIGdyaWRTaXplKTtcclxuXHJcbiAgaWYgKGNvbHVtbiA+PSAwICYmIGNvbHVtbiA8IGdyaWQubGVuZ3RoICYmIHJvdyA+PSAwICYmIHJvdyA8IGdyaWRbY29sdW1uXS5sZW5ndGgpIHtcclxuICAgIGdyaWRbY29sdW1uXVtyb3ddLnB1c2gocGFydGljbGUpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TmVpZ2hib3JpbmdQYXJ0aWNsZXMocGFydGljbGU6IFBhcnRpY2xlKTogUGFydGljbGVbXSB7XHJcbiAgY29uc3QgY29sdW1uID0gTWF0aC5mbG9vcihwYXJ0aWNsZS5wb3NfY3Vyci54IC8gZ3JpZFNpemUpO1xyXG4gIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IocGFydGljbGUucG9zX2N1cnIueSAvIGdyaWRTaXplKTtcclxuICBjb25zdCBuZWlnaGJvcmluZ1BhcnRpY2xlczogUGFydGljbGVbXSA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gY29sdW1uIC0gMTsgaSA8PSBjb2x1bW4gKyAxOyBpKyspIHtcclxuICAgIGZvciAobGV0IGogPSByb3cgLSAxOyBqIDw9IHJvdyArIDE7IGorKykge1xyXG4gICAgICBpZiAoaSA+PSAwICYmIGkgPCBncmlkLmxlbmd0aCAmJiBqID49IDAgJiYgaiA8IGdyaWRbaV0ubGVuZ3RoKSB7XHJcbiAgICAgICAgbmVpZ2hib3JpbmdQYXJ0aWNsZXMucHVzaCguLi5ncmlkW2ldW2pdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbmVpZ2hib3JpbmdQYXJ0aWNsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRpY2soZHQ6IG51bWJlcikge1xyXG4gIGxldCBzdWJfc3RlcHMgPSBzdWJzdGVwc19hbW91bnQ7XHJcbiAgbGV0IHN1Yl9kdCA9IGR0L3N1Yl9zdGVwcztcclxuICBmb3IobGV0IGkgPSAwOyBpIDwgc3ViX3N0ZXBzOyBpKyspe1xyXG4gICAgaWYoZ3Jhdml0eS55ICE9IDApe1xyXG4gICAgYXBwbHlHcmF2aXR5KCk7XHJcbiAgICB9XHJcbiAgICBpZihjbGlja2VkKXtcclxuICAgICAgc3dpdGNoIChwb2ludGVyX2Z1bmN0aW9uKXtcclxuICAgICAgICBjYXNlICdmaWVsZCc6XHJcbiAgICAgICAgICBhcHBseUZpZWxkKHBvaW50ZXJQb3NpdGlvbik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdncmF2aXR5JzpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3Rocm93JzpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBhcHBseUNvbnN0cmFpbnQoKTtcclxuICAgIHNvbHZlQ29sbGlzaW9ucygpO1xyXG4gICAgdXBkYXRlUG9zaXRpb25zKHN1Yl9kdCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQb3NpdGlvbnMoZHQ6IG51bWJlcikge1xyXG4gIHBhcnRpY2xlcy5mb3JFYWNoKChwYXJ0aWNsZSkgPT4ge1xyXG4gICAgcmVtb3ZlRnJvbUdyaWQocGFydGljbGUpO1xyXG4gICAgcGFydGljbGUudXBkYXRlUG9zaXRpb24oZHQpO1xyXG4gICAgYWRkVG9HcmlkKHBhcnRpY2xlKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlHcmF2aXR5KCkge1xyXG4gIHBhcnRpY2xlcy5mb3JFYWNoKChwYXJ0aWNsZSkgPT4ge1xyXG4gICAgcGFydGljbGUuYWNjZWxlcmF0ZShncmF2aXR5KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlGaWVsZChmaWVsZFBvczogVmVjMkQpIHtcclxuICBwYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGUpID0+IHtcclxuICBjb25zdCBwdWxsRGlyZWN0aW9uID0gZmllbGRQb3Muc3VidHJhY3QocGFydGljbGUucG9zX2N1cnIpO1xyXG4gIGNvbnN0IGRpc3RhbmNlID0gcHVsbERpcmVjdGlvbi5sZW5ndGgoKTtcclxuXHJcbiAgICBpZihkaXN0YW5jZSA8IGZpZWxkU2l6ZSl7XHJcbiAgICAgIGxldCBuID0gcHVsbERpcmVjdGlvbjtcclxuICAgICAgbiA9IG4ubXVsdGlwbHkoZmllbGRTdHJlbmdodC8xMDApO1xyXG4gICAgICAvLyBuID0gbi5kaXZpZGUoZGlzdGFuY2UqZGlzdGFuY2UpXHJcbiAgICAgIHBhcnRpY2xlLmFjY2VsZXJhdGUobik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvbHZlQ29sbGlzaW9ucygpIHtcclxuICBwYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGUxKSA9PiB7XHJcbiAgICBjb25zdCBuZWlnaGJvcmluZ1BhcnRpY2xlcyA9IGdldE5laWdoYm9yaW5nUGFydGljbGVzKHBhcnRpY2xlMSk7XHJcblxyXG4gICAgbmVpZ2hib3JpbmdQYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGUyKSA9PiB7XHJcbiAgICAgIGxldCBjb2xsaXNpb25fZGlyZWN0aW9uID0gcGFydGljbGUxLnBvc19jdXJyLnN1YnRyYWN0KHBhcnRpY2xlMi5wb3NfY3Vycik7XHJcbiAgICAgIGxldCBkaXN0YW5jZSA9IGNvbGxpc2lvbl9kaXJlY3Rpb24ubGVuZ3RoKCk7XHJcbiAgICAgIGlmIChkaXN0YW5jZSAhPSAwKSB7XHJcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgcGFydGljbGUxLnJhZGl1cyArIHBhcnRpY2xlMi5yYWRpdXMpIHtcclxuICAgICAgICAgIGxldCBuID0gY29sbGlzaW9uX2RpcmVjdGlvbi5kaXZpZGUoZGlzdGFuY2UpO1xyXG4gICAgICAgICAgbGV0IGRlbHRhID0gcGFydGljbGUxLnJhZGl1cyArIHBhcnRpY2xlMi5yYWRpdXMgLSBkaXN0YW5jZTtcclxuICAgICAgICAgIHBhcnRpY2xlMS5wb3NfY3VyciA9IHBhcnRpY2xlMS5wb3NfY3Vyci5hZGQobi5tdWx0aXBseShkZWx0YSAqIDAuNSkpO1xyXG4gICAgICAgICAgcGFydGljbGUyLnBvc19jdXJyID0gcGFydGljbGUyLnBvc19jdXJyLnN1YnRyYWN0KG4ubXVsdGlwbHkoZGVsdGEgKiAwLjUpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUNvbnN0cmFpbnQoKSB7XHJcbiAgcGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlKSA9PiB7XHJcbiAgICAvLyBBcHBseSBmbG9vciBjb25zdHJhaW50XHJcbiAgICBpZiAocGFydGljbGUucG9zX2N1cnIueSArIHBhcnRpY2xlLnJhZGl1cyA+IGZvcmVncm91bmRfY2FudmFzLmhlaWdodCkge1xyXG4gICAgICBwYXJ0aWNsZS5wb3NfY3Vyci55ID0gZm9yZWdyb3VuZF9jYW52YXMuaGVpZ2h0IC0gcGFydGljbGUucmFkaXVzO1xyXG4gICAgICBwYXJ0aWNsZS5wb3NfcHJldi55ID0gcGFydGljbGUucG9zX2N1cnIueSArIHBhcnRpY2xlLnBvc19jdXJyLnkgLSBwYXJ0aWNsZS5wb3NfcHJldi55O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGx5IENlaWxpbmcgY29uc3RyYWludFxyXG4gICAgaWYgKHBhcnRpY2xlLnBvc19jdXJyLnkgLSBwYXJ0aWNsZS5yYWRpdXMgPCAwKSB7XHJcbiAgICAgIHBhcnRpY2xlLnBvc19jdXJyLnkgPSBwYXJ0aWNsZS5yYWRpdXM7XHJcbiAgICAgIHBhcnRpY2xlLnBvc19wcmV2LnkgPSBwYXJ0aWNsZS5wb3NfY3Vyci55ICsgcGFydGljbGUucG9zX2N1cnIueSAtIHBhcnRpY2xlLnBvc19wcmV2Lnk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIEFwcGx5IGxlZnQgd2FsbCBjb25zdHJhaW50XHJcbiAgICBpZiAocGFydGljbGUucG9zX2N1cnIueCAtIHBhcnRpY2xlLnJhZGl1cyA8IDApIHtcclxuICAgICAgcGFydGljbGUucG9zX2N1cnIueCA9IHBhcnRpY2xlLnJhZGl1cztcclxuICAgICAgcGFydGljbGUucG9zX3ByZXYueCA9IHBhcnRpY2xlLnBvc19jdXJyLnggKyBwYXJ0aWNsZS5wb3NfY3Vyci54IC0gcGFydGljbGUucG9zX3ByZXYueDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBseSByaWdodCB3YWxsIGNvbnN0cmFpbnRcclxuICAgIGlmIChwYXJ0aWNsZS5wb3NfY3Vyci54ICsgcGFydGljbGUucmFkaXVzID4gZm9yZWdyb3VuZF9jYW52YXMud2lkdGgpIHtcclxuICAgICAgcGFydGljbGUucG9zX2N1cnIueCA9IGZvcmVncm91bmRfY2FudmFzLndpZHRoIC0gcGFydGljbGUucmFkaXVzO1xyXG4gICAgICBwYXJ0aWNsZS5wb3NfcHJldi54ID0gcGFydGljbGUucG9zX2N1cnIueCArIHBhcnRpY2xlLnBvc19jdXJyLnggLSBwYXJ0aWNsZS5wb3NfcHJldi54O1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckNhbnZhcygpIHtcclxuICBjdHguY2xlYXJSZWN0KDAsIDAsIGZvcmVncm91bmRfY2FudmFzLndpZHRoLCBmb3JlZ3JvdW5kX2NhbnZhcy5oZWlnaHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDYW52YXNTaXplKCkge1xyXG4gIGZvcmVncm91bmRfY2FudmFzLndpZHRoID0gZm9yZWdyb3VuZF9jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgZm9yZWdyb3VuZF9jYW52YXMuaGVpZ2h0ID0gZm9yZWdyb3VuZF9jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gIGJhY2tncm91bmRfY2FudmFzLndpZHRoID0gYmFja2dyb3VuZF9jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgYmFja2dyb3VuZF9jYW52YXMuaGVpZ2h0ID0gYmFja2dyb3VuZF9jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gIGluaXRpYWxpemVHcmlkKCk7XHJcbiAgZHJhd0dyaWQoKTtcclxufVxyXG5cclxubGV0IGZyYW1lQ291bnQgPSAwO1xyXG5sZXQgbGFzdFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKS8xMDtcclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUZQUygpIHtcclxuICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpLzEwO1xyXG4gIGNvbnN0IHRpbWVEaWZmID0gY3VycmVudFRpbWUgLSBsYXN0VGltZTtcclxuICBjb25zdCBmcHMgPSBNYXRoLnJvdW5kKDEwMDAgLyB0aW1lRGlmZik7XHJcbiAgbGFzdFRpbWUgPSBjdXJyZW50VGltZTtcclxuICByZXR1cm4gZnBzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQb2ludGVyRnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdjdXJzb3ItZnVuY3Rpb24nKSBhcyBOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmFkaW9CdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocmFkaW9CdXR0b25zW2ldLmNoZWNrZWQpIHtcclxuICAgICAgcmV0dXJuIHJhZGlvQnV0dG9uc1tpXS52YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpe1xyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgY2xpY2tlZCA9IHRydWU7XHJcbiAgcG9pbnRlcl9mdW5jdGlvbiA9IGdldFBvaW50ZXJGdW5jdGlvbigpXHJcblxyXG4gIGlmKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCl7XHJcbiAgICBwb2ludGVyUG9zaXRpb24ueCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICBwb2ludGVyUG9zaXRpb24ueSA9IGV2ZW50LmNsaWVudFk7XHJcblxyXG4gIH1cclxuICBlbHNlIGlmIChldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpe1xyXG4gICAgcG9pbnRlclBvc2l0aW9uLnggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICBwb2ludGVyUG9zaXRpb24ueSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcclxuICB9XHJcblxyXG4gIGNsaWNrX3N0YXJ0X3Bvc2l0aW9uLnggPSBwb2ludGVyUG9zaXRpb24ueDtcclxuICBjbGlja19zdGFydF9wb3NpdGlvbi55ID0gcG9pbnRlclBvc2l0aW9uLnk7XHJcbiAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KXtcclxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gIGNsaWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTW92ZUV2ZW50KGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkge1xyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgaWYgKGNsaWNrZWQpIHtcclxuICAgIGlmKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCl7XHJcbiAgICAgIHBvaW50ZXJQb3NpdGlvbi54ID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgcG9pbnRlclBvc2l0aW9uLnkgPSBldmVudC5jbGllbnRZO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KXtcclxuICAgICAgcG9pbnRlclBvc2l0aW9uLnggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgIHBvaW50ZXJQb3NpdGlvbi55ID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcbiAgdGljaygwLjUvZnBzKjYwKTtcclxuICBjbGVhckNhbnZhcygpO1xyXG4gIGRyYXdQYXJ0aWNsZXMoKTtcclxuICBzd2l0Y2ggKHBvaW50ZXJfZnVuY3Rpb24pe1xyXG4gICAgY2FzZSAnZmllbGQnOlxyXG4gICAgICBkcmF3TGFzc28oKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdncmF2aXR5JzpcclxuXHJcbiAgICAgIGRyYXdBcnJvdyhjbGlja19zdGFydF9wb3NpdGlvbiwgcG9pbnRlclBvc2l0aW9uKVxyXG4gICAgICBncmF2aXR5ID0gcG9pbnRlclBvc2l0aW9uLnN1YnRyYWN0KGNsaWNrX3N0YXJ0X3Bvc2l0aW9uKS5kaXZpZGUoNTAwKVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ3Rocm93JzpcclxuICAgICAgYnJlYWs7XHJcblxyXG4gIH1cclxuICBcclxuXHJcbiAgbGV0IHJlZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XHJcbiAgbGV0IGdyZWVuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KTtcclxuICBsZXQgYmx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XHJcbiAgbGV0IGNvbG9yID0gYHJnYigke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9KWA7XHJcbiAgY29uc3QgbXVsdCA9IGZwcy82MFxyXG4gIGlmIChpICUgNSA9PSAwICYmIHBhcnRpY2xlcy5sZW5ndGggPCBwYXJ0aWNsZUNvdW50KSB7XHJcbiAgICBwYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUobmV3IFZlYzJEKDIwMCwgMjAwKSwgICAxNSwgbmV3IFZlYzJEKDEwMCptdWx0LCAtMTUwKm11bHQpLCBjb2xvcikpO1xyXG4gICAgcGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKG5ldyBWZWMyRCgyMDAsIDI2MCksICAgMTUsIG5ldyBWZWMyRCg5MCptdWx0LCAtMTUwKm11bHQpLCBjb2xvcikpO1xyXG4gICAgcGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKG5ldyBWZWMyRCgyMDAsIDMyMCksICAgMTUsIG5ldyBWZWMyRCg4NSptdWx0LCAtMTUwKm11bHQpLCBjb2xvcikpO1xyXG4gICAgcGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKG5ldyBWZWMyRCgyMDAsIDM4MCksICAgMTUsIG5ldyBWZWMyRCg5MCptdWx0LCAtMTUwKm11bHQpLCBjb2xvcikpO1xyXG4gICAgcGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKG5ldyBWZWMyRCgyMDAsIDQ0MCksICAgMTUsIG5ldyBWZWMyRCg4NSptdWx0LCAtMTUwKm11bHQpLCBjb2xvcikpO1xyXG4gIH1cclxuXHJcbiAgaSsrO1xyXG5cclxuICBcclxuICBmcmFtZUNvdW50Kys7XHJcbiAgaWYgKGZyYW1lQ291bnQgJSAxMCA9PT0gMCkge1xyXG4gICAgZnBzID0gY2FsY3VsYXRlRlBTKCk7XHJcbiAgICBmcHNDb3VudGVyLmlubmVyVGV4dCA9IGBGUFM6ICR7ZnBzfWA7XHJcbiAgICBwYXJ0aWNsZUNvdW50ZXIuaW5uZXJUZXh0ID0gYFBhcnRpY2xlczogJHtwYXJ0aWNsZXMubGVuZ3RofWA7XHJcbiAgfVxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxufVxyXG5cclxubGV0IGkgPSAwO1xyXG5jb25zdCBtYWluX2JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbl9jb250YWluZXInKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlQ2FudmFzU2l6ZSk7XHJcbm1haW5fYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XHJcbm1haW5fYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcclxubWFpbl9ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW92ZUV2ZW50KTtcclxubWFpbl9ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZU1vdXNlRG93bik7XHJcbm1haW5fYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgaGFuZGxlTW91c2VVcCk7XHJcbm1haW5fYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGhhbmRsZU1vdmVFdmVudCk7XHJcbm1haW5fYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5jbG9zZU1lbnUoKTtcclxufSk7XHJcblxyXG5pbml0aWFsaXplR3JpZCgpO1xyXG5kcmF3R3JpZCgpO1xyXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0LnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvTWVudU1hbmFnZXIudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=