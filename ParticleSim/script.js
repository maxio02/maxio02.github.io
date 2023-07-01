/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        // Particle.ctx.lineWidth = 2;
        // Particle.ctx.strokeStyle = "black";
        // Particle.ctx.stroke();
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
    Particle.canvas = document.getElementById('background-canvas');
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
/* harmony export */   setFieldSize: () => (/* binding */ setFieldSize),
/* harmony export */   setFieldStrength: () => (/* binding */ setFieldStrength),
/* harmony export */   setGravityStrength: () => (/* binding */ setGravityStrength),
/* harmony export */   setParticlesNum: () => (/* binding */ setParticlesNum),
/* harmony export */   setSubsteps: () => (/* binding */ setSubsteps)
/* harmony export */ });
/* harmony import */ var _MenuManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuManager */ "./src/MenuManager.ts");
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Particle */ "./src/Particle.ts");
/* harmony import */ var _Vec2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vec2D */ "./src/Vec2D.ts");
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
var pointerPosition = new _Vec2D__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0);
var gravity = new _Vec2D__WEBPACK_IMPORTED_MODULE_2__["default"](0, 1);
var canvas = document.getElementById('background-canvas');
var fieldSize = 100;
var fieldStrenght = 10;
var substeps_amount = 4;
canvas.width = canvas.getBoundingClientRect().width;
canvas.height = canvas.getBoundingClientRect().height;
var ctx = _Particle__WEBPACK_IMPORTED_MODULE_1__["default"].canvas.getContext('2d');
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
    gravity = new _Vec2D__WEBPACK_IMPORTED_MODULE_2__["default"](0, value / 10);
}
function setSubsteps(value) {
    substeps_amount = value;
}
function setParticlesNum(value) {
    particleCount = value;
}
function initializeGrid() {
    var columns = Math.ceil(canvas.width / gridSize);
    var rows = Math.ceil(canvas.height / gridSize);
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
function drawParticles() {
    particles.forEach(function (particle) {
        particle.draw();
    });
}
function drawGrid() {
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;
    for (var x = gridSize; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (var y = gridSize; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}
function drawLasso() {
    if (clicked) {
        var lineWidth = 3;
        ctx.beginPath();
        ctx.arc(pointerPosition.x, pointerPosition.y, fieldSize, 0, 2 * Math.PI);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.stroke();
        ctx.closePath();
    }
}
function tick(dt) {
    var sub_steps = substeps_amount;
    var sub_dt = dt / sub_steps;
    for (var i_3 = 0; i_3 < sub_steps; i_3++) {
        if (gravity.y != 0) {
            applyGravity();
        }
        if (clicked) {
            applyField(pointerPosition);
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
        if (particle.pos_curr.y + particle.radius > canvas.height) {
            particle.pos_curr.y = canvas.height - particle.radius;
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
        if (particle.pos_curr.x + particle.radius > canvas.width) {
            particle.pos_curr.x = canvas.width - particle.radius;
            particle.pos_prev.x = particle.pos_curr.x + particle.pos_curr.x - particle.pos_prev.x;
        }
    });
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function updateCanvasSize() {
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    initializeGrid();
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
function handleMouseDown(event) {
    event.stopPropagation();
    clicked = true;
    if (event instanceof MouseEvent) {
        pointerPosition.x = event.clientX;
        pointerPosition.y = event.clientY;
    }
    else if (event instanceof TouchEvent) {
        pointerPosition.x = event.touches[0].clientX;
        pointerPosition.y = event.touches[0].clientY;
    }
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
        var red, green, blue, color, currentFps;
        return __generator(this, function (_a) {
            tick(0.5);
            clearCanvas();
            drawGrid();
            drawParticles();
            drawLasso();
            red = Math.floor(Math.random() * 256);
            green = Math.floor(Math.random() * 256);
            blue = Math.floor(Math.random() * 256);
            color = "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
            if (i % 5 == 0 && particles.length < particleCount) {
                particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_1__["default"](new _Vec2D__WEBPACK_IMPORTED_MODULE_2__["default"](200, 200), 15, new _Vec2D__WEBPACK_IMPORTED_MODULE_2__["default"](100, -150), color));
                particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_1__["default"](new _Vec2D__WEBPACK_IMPORTED_MODULE_2__["default"](200, 260), 15, new _Vec2D__WEBPACK_IMPORTED_MODULE_2__["default"](90, -150), color));
                particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_1__["default"](new _Vec2D__WEBPACK_IMPORTED_MODULE_2__["default"](200, 320), 15, new _Vec2D__WEBPACK_IMPORTED_MODULE_2__["default"](85, -150), color));
                particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_1__["default"](new _Vec2D__WEBPACK_IMPORTED_MODULE_2__["default"](200, 380), 15, new _Vec2D__WEBPACK_IMPORTED_MODULE_2__["default"](90, -150), color));
                particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_1__["default"](new _Vec2D__WEBPACK_IMPORTED_MODULE_2__["default"](200, 440), 15, new _Vec2D__WEBPACK_IMPORTED_MODULE_2__["default"](85, -150), color));
            }
            i++;
            frameCount++;
            if (frameCount % 10 === 0) {
                currentFps = calculateFPS();
                fpsCounter.innerText = "FPS: ".concat(currentFps);
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
    (0,_MenuManager__WEBPACK_IMPORTED_MODULE_0__.closeMenu)();
});
initializeGrid();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztBQUMxRCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3RELFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDekQsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQUs7SUFDbkQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLHVEQUFTLEVBQUUsQ0FBQztBQUNaLENBQUMsQ0FBQyxDQUFDO0FBRUgsY0FBYyxFQUFFLENBQUM7QUFDakIscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7VUMzVS9CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXJ0aWNsZXNpbXYyLy4vc3JjL01lbnVNYW5hZ2VyLnRzIiwid2VicGFjazovL3BhcnRpY2xlc2ltdjIvLi9zcmMvUGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vcGFydGljbGVzaW12Mi8uL3NyYy9WZWMyRC50cyIsIndlYnBhY2s6Ly9wYXJ0aWNsZXNpbXYyLy4vc3JjL3NjcmlwdC50cyIsIndlYnBhY2s6Ly9wYXJ0aWNsZXNpbXYyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BhcnRpY2xlc2ltdjIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BhcnRpY2xlc2ltdjIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYXJ0aWNsZXNpbXYyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGFydGljbGVzaW12Mi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BhcnRpY2xlc2ltdjIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BhcnRpY2xlc2ltdjIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldEZpZWxkU2l6ZSwgc2V0RmllbGRTdHJlbmd0aCwgc2V0R3Jhdml0eVN0cmVuZ3RoLCBzZXRTdWJzdGVwcywgc2V0UGFydGljbGVzTnVtfSBmcm9tIFwiLi9zY3JpcHRcIjtcclxuXHJcbmNvbnN0IG1lbnVfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ1dHRvblwiKTtcclxuY29uc3QgbWVudV9lbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWVsZW1lbnRcIik7XHJcblxyXG5tZW51X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgb3Blbk1lbnUoKTtcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG4gICAgaWYgKG1lbnVfYnV0dG9uLmdldEF0dHJpYnV0ZShcIm9wZW5cIikgPT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgLy8gbWVudV9idXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSlcclxuICAgICAgICBtZW51X2J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJvcGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBtZW51X2J1dHRvbi5zdHlsZS5jdXJzb3IgPSBcImF1dG9cIjtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgbWVudV9lbGVtZW50cy5pdGVtKDApLnN0eWxlLmRpc3BsYXk9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgLy8gfSwgMzAwKTtcclxuXHJcbiAgICAgICAgbWVudV9lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XHJcbiAgICBtZW51X2J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJvcGVuXCIsIFwiZmFsc2VcIik7XHJcbiAgICBtZW51X2J1dHRvbi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgIG1lbnVfZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxudmFyIGZpZWxkX3NpemVfc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZC1zaXplLXNsaWRlclwiKSAgYXMgSFRNTElucHV0RWxlbWVudDtcclxudmFyIGZpZWxkX3N0cmVuZ3RoX3NsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGQtc3RyZW5ndGgtc2xpZGVyXCIpICBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG52YXIgZ3Jhdml0eV9zdHJlbmd0aF9zbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyYXZpdHktc3RyZW5ndGgtc2xpZGVyXCIpICBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG52YXIgc3Vic3RlcHNfYW1vdW50X2VudHJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJzdGVwcy1hbW91bnQtZW50cnlcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxudmFyIHBhcnRpY2xlc19hbW91bnRfZW50cnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhcnRpY2xlcy1hbW91bnQtZW50cnlcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbmZpZWxkX3NpemVfc2xpZGVyLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHNldEZpZWxkU2l6ZShwYXJzZUludChmaWVsZF9zaXplX3NsaWRlci52YWx1ZSkpO1xyXG4gIH1cclxuXHJcbmZpZWxkX3N0cmVuZ3RoX3NsaWRlci5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBzZXRGaWVsZFN0cmVuZ3RoKHBhcnNlSW50KGZpZWxkX3N0cmVuZ3RoX3NsaWRlci52YWx1ZSkpO1xyXG4gIH1cclxuXHJcbmdyYXZpdHlfc3RyZW5ndGhfc2xpZGVyLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHNldEdyYXZpdHlTdHJlbmd0aChwYXJzZUludChncmF2aXR5X3N0cmVuZ3RoX3NsaWRlci52YWx1ZSkpO1xyXG4gIH1cclxuXHJcbnN1YnN0ZXBzX2Ftb3VudF9lbnRyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgIHNldFN1YnN0ZXBzKHBhcnNlSW50KHN1YnN0ZXBzX2Ftb3VudF9lbnRyeS52YWx1ZSkpO1xyXG59KTtcclxucGFydGljbGVzX2Ftb3VudF9lbnRyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgIHNldFBhcnRpY2xlc051bShwYXJzZUludChwYXJ0aWNsZXNfYW1vdW50X2VudHJ5LnZhbHVlKSk7XHJcbn0pO1xyXG5cclxuIiwiaW1wb3J0IFZlYzJEIGZyb20gXCIuL1ZlYzJEXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2xlIHtcclxuICAgIHN0YXRpYyBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZC1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHN0YXRpYyBjdHggPSBQYXJ0aWNsZS5jYW52YXMhLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBwb3NfY3VycjogVmVjMkRcclxuICAgIHBvc19wcmV2OiBWZWMyRFxyXG4gICAgYWNjZWxlcmF0aW9uOiBWZWMyRFxyXG4gICAgcmFkaXVzOiBudW1iZXJcclxuICAgIGNvbG9yOiBzdHJpbmdcclxuICAgIFxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3M6IFZlYzJELCByYWRpdXM6IG51bWJlciwgYWNjOiBWZWMyRCwgY29sb3I6IHN0cmluZykge1xyXG4gICAgICB0aGlzLnBvc19jdXJyID0gcG9zXHJcbiAgICAgIHRoaXMucG9zX3ByZXYgPSB0aGlzLnBvc19jdXJyXHJcbiAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IGFjY1xyXG4gICAgICB0aGlzLmNvbG9yID0gY29sb3JcclxuICAgIH1cclxuICBcclxuICAgIGRyYXcoKSB7XHJcbiAgICAgIGxldCB4cG9zOiBudW1iZXIgPSB0aGlzLnBvc19jdXJyLnhcclxuICAgICAgbGV0IHlwb3M6IG51bWJlciA9IHRoaXMucG9zX2N1cnIueVxyXG4gICAgICBQYXJ0aWNsZS5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIFBhcnRpY2xlLmN0eC5hcmMoXHJcbiAgICAgICAgeHBvcyxcclxuICAgICAgICB5cG9zLFxyXG4gICAgICAgIHRoaXMucmFkaXVzLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMiAqIE1hdGguUEksXHJcbiAgICAgICAgZmFsc2VcclxuICAgICAgKTtcclxuICAgICAgUGFydGljbGUuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgIFBhcnRpY2xlLmN0eC5maWxsKCk7XHJcblxyXG4gICAgICAvLyBQYXJ0aWNsZS5jdHgubGluZVdpZHRoID0gMjtcclxuICAgICAgLy8gUGFydGljbGUuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAvLyBQYXJ0aWNsZS5jdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICBQYXJ0aWNsZS5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUG9zaXRpb24oZHQ6IG51bWJlcil7XHJcbiAgICAgIGxldCB2ZWxvY2l0eTogVmVjMkQgPSB0aGlzLnBvc19jdXJyLnN1YnRyYWN0KHRoaXMucG9zX3ByZXYpXHJcbiAgICAgIHRoaXMucG9zX3ByZXYgPSB0aGlzLnBvc19jdXJyXHJcblxyXG4gICAgICB0aGlzLnBvc19jdXJyID0gdGhpcy5wb3NfY3Vyci5hZGQodmVsb2NpdHkpXHJcbiAgICAgIHRoaXMucG9zX2N1cnIgPSB0aGlzLnBvc19jdXJyLmFkZCh0aGlzLmFjY2VsZXJhdGlvbi5tdWx0aXBseShkdCpkdCkpXHJcblxyXG4gICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBWZWMyRCgwLDApXHJcbiAgICB9XHJcblxyXG4gICAgYWNjZWxlcmF0ZShhY2M6VmVjMkQpe1xyXG4gICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IHRoaXMuYWNjZWxlcmF0aW9uLmFkZChhY2MpXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlYzJEIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICBcclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhZGQodmVjOiBWZWMyRCk6IFZlYzJEIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMyRCh0aGlzLnggKyB2ZWMueCwgdGhpcy55ICsgdmVjLnkpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc3VidHJhY3QodmVjOiBWZWMyRCk6IFZlYzJEIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMyRCh0aGlzLnggLSB2ZWMueCwgdGhpcy55IC0gdmVjLnkpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgbXVsdGlwbHkoc2NhbGFyOiBudW1iZXIpOiBWZWMyRCB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMkQodGhpcy54ICogc2NhbGFyLCB0aGlzLnkgKiBzY2FsYXIpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2aWRlKHNjYWxhcjogbnVtYmVyKTogVmVjMkQge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzJEKHRoaXMueCAvIHNjYWxhciwgdGhpcy55IC8gc2NhbGFyKTtcclxuICAgIH1cclxuICBcclxuICAgIGRvdCh2ZWM6IFZlYzJEKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMueCAqIHZlYy54ICsgdGhpcy55ICogdmVjLnk7XHJcbiAgICB9XHJcblxyXG4gICAgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBjbG9zZU1lbnUgfSBmcm9tIFwiLi9NZW51TWFuYWdlclwiO1xyXG5pbXBvcnQgUGFydGljbGUgZnJvbSBcIi4vUGFydGljbGVcIjtcclxuaW1wb3J0IFZlYzJEIGZyb20gXCIuL1ZlYzJEXCI7XHJcbmNvbnN0IGdyaWRTaXplID0gMzA7XHJcbmNvbnN0IGdyaWQ6IFBhcnRpY2xlW11bXVtdID0gW107XHJcblxyXG5jb25zdCBwYXJ0aWNsZXM6IFBhcnRpY2xlW10gPSBbXTtcclxudmFyIHBhcnRpY2xlQ291bnQgPSAxMDA7XHJcbmNvbnN0IHBvaW50ZXJQb3NpdGlvbiA9IG5ldyBWZWMyRCgwLDApXHJcbnZhciBncmF2aXR5ID0gbmV3IFZlYzJEKDAsIDEpXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kLWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG52YXIgZmllbGRTaXplID0gMTAwXHJcbnZhciBmaWVsZFN0cmVuZ2h0ID0gMTBcclxudmFyIHN1YnN0ZXBzX2Ftb3VudCA9IDRcclxuY2FudmFzIS53aWR0aCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuY2FudmFzIS5oZWlnaHQgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG5jb25zdCBjdHggPSBQYXJ0aWNsZS5jYW52YXMhLmdldENvbnRleHQoJzJkJyk7XHJcbmNvbnN0IGZwcyA9IDYwO1xyXG5sZXQgY2xpY2tlZD0gZmFsc2VcclxubGV0IGZwc0NvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZnBzQ291bnRlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbmZwc0NvdW50ZXIuc3R5bGUudG9wID0gJzEwcHgnO1xyXG5mcHNDb3VudGVyLnN0eWxlLmxlZnQgPSAnMTBweCc7XHJcbmZwc0NvdW50ZXIuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG5cclxubGV0IHBhcnRpY2xlQ291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5wYXJ0aWNsZUNvdW50ZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5wYXJ0aWNsZUNvdW50ZXIuc3R5bGUudG9wID0gJzMwcHgnO1xyXG5wYXJ0aWNsZUNvdW50ZXIuc3R5bGUubGVmdCA9ICcxMHB4JztcclxucGFydGljbGVDb3VudGVyLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZnBzQ291bnRlcik7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFydGljbGVDb3VudGVyKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWVsZFN0cmVuZ3RoKHZhbHVlOiBudW1iZXIpe1xyXG4gIGZpZWxkU3RyZW5naHQgPSB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpZWxkU2l6ZSh2YWx1ZTogbnVtYmVyKXtcclxuICBmaWVsZFNpemUgPSB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEdyYXZpdHlTdHJlbmd0aCh2YWx1ZTogbnVtYmVyKXtcclxuICBncmF2aXR5ID0gbmV3IFZlYzJEKDAsIHZhbHVlLzEwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN1YnN0ZXBzKHZhbHVlOiBudW1iZXIpe1xyXG4gIHN1YnN0ZXBzX2Ftb3VudCA9IHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UGFydGljbGVzTnVtKHZhbHVlOiBudW1iZXIpIHtcclxuICBwYXJ0aWNsZUNvdW50ID0gdmFsdWVcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUdyaWQoKSB7XHJcbiAgY29uc3QgY29sdW1ucyA9IE1hdGguY2VpbChjYW52YXMud2lkdGggLyBncmlkU2l6ZSk7XHJcbiAgY29uc3Qgcm93cyA9IE1hdGguY2VpbChjYW52YXMuaGVpZ2h0IC8gZ3JpZFNpemUpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnM7IGkrKykge1xyXG4gICAgZ3JpZFtpXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzOyBqKyspIHtcclxuICAgICAgZ3JpZFtpXVtqXSA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRnJvbUdyaWQocGFydGljbGU6IFBhcnRpY2xlKSB7XHJcbiAgY29uc3QgY29sdW1uID0gTWF0aC5mbG9vcihwYXJ0aWNsZS5wb3NfY3Vyci54IC8gZ3JpZFNpemUpO1xyXG4gIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IocGFydGljbGUucG9zX2N1cnIueSAvIGdyaWRTaXplKTtcclxuXHJcbiAgaWYgKGNvbHVtbiA+PSAwICYmIGNvbHVtbiA8IGdyaWQubGVuZ3RoICYmIHJvdyA+PSAwICYmIHJvdyA8IGdyaWRbY29sdW1uXS5sZW5ndGgpIHtcclxuICAgIGNvbnN0IHBhcnRpY2xlc0luQ2VsbCA9IGdyaWRbY29sdW1uXVtyb3ddO1xyXG4gICAgY29uc3QgaW5kZXggPSBwYXJ0aWNsZXNJbkNlbGwuaW5kZXhPZihwYXJ0aWNsZSk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHBhcnRpY2xlc0luQ2VsbC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9HcmlkKHBhcnRpY2xlOiBQYXJ0aWNsZSkge1xyXG4gIGNvbnN0IGNvbHVtbiA9IE1hdGguZmxvb3IocGFydGljbGUucG9zX2N1cnIueCAvIGdyaWRTaXplKTtcclxuICBjb25zdCByb3cgPSBNYXRoLmZsb29yKHBhcnRpY2xlLnBvc19jdXJyLnkgLyBncmlkU2l6ZSk7XHJcblxyXG4gIGlmIChjb2x1bW4gPj0gMCAmJiBjb2x1bW4gPCBncmlkLmxlbmd0aCAmJiByb3cgPj0gMCAmJiByb3cgPCBncmlkW2NvbHVtbl0ubGVuZ3RoKSB7XHJcbiAgICBncmlkW2NvbHVtbl1bcm93XS5wdXNoKHBhcnRpY2xlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5laWdoYm9yaW5nUGFydGljbGVzKHBhcnRpY2xlOiBQYXJ0aWNsZSk6IFBhcnRpY2xlW10ge1xyXG4gIGNvbnN0IGNvbHVtbiA9IE1hdGguZmxvb3IocGFydGljbGUucG9zX2N1cnIueCAvIGdyaWRTaXplKTtcclxuICBjb25zdCByb3cgPSBNYXRoLmZsb29yKHBhcnRpY2xlLnBvc19jdXJyLnkgLyBncmlkU2l6ZSk7XHJcbiAgY29uc3QgbmVpZ2hib3JpbmdQYXJ0aWNsZXM6IFBhcnRpY2xlW10gPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IGNvbHVtbiAtIDE7IGkgPD0gY29sdW1uICsgMTsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBqID0gcm93IC0gMTsgaiA8PSByb3cgKyAxOyBqKyspIHtcclxuICAgICAgaWYgKGkgPj0gMCAmJiBpIDwgZ3JpZC5sZW5ndGggJiYgaiA+PSAwICYmIGogPCBncmlkW2ldLmxlbmd0aCkge1xyXG4gICAgICAgIG5laWdoYm9yaW5nUGFydGljbGVzLnB1c2goLi4uZ3JpZFtpXVtqXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG5laWdoYm9yaW5nUGFydGljbGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3UGFydGljbGVzKCkge1xyXG4gIHBhcnRpY2xlcy5mb3JFYWNoKChwYXJ0aWNsZSkgPT4ge1xyXG4gICAgcGFydGljbGUuZHJhdygpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3R3JpZCgpe1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMSknO1xyXG4gIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gIGZvciAobGV0IHggPSBncmlkU2l6ZTsgeCA8IGNhbnZhcy53aWR0aDsgeCArPSBncmlkU2l6ZSkge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbyh4LCAwKTtcclxuICAgIGN0eC5saW5lVG8oeCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG4gIGZvciAobGV0IHkgPSBncmlkU2l6ZTsgeSA8IGNhbnZhcy5oZWlnaHQ7IHkgKz0gZ3JpZFNpemUpIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oMCwgeSk7XHJcbiAgICBjdHgubGluZVRvKGNhbnZhcy53aWR0aCwgeSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3TGFzc28oKXtcclxuICBpZiAoY2xpY2tlZCkge1xyXG4gICAgY29uc3QgbGluZVdpZHRoID0gMztcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5hcmMocG9pbnRlclBvc2l0aW9uLngsIHBvaW50ZXJQb3NpdGlvbi55LCBmaWVsZFNpemUsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjIpJztcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRpY2soZHQ6IG51bWJlcikge1xyXG4gIGxldCBzdWJfc3RlcHMgPSBzdWJzdGVwc19hbW91bnQ7XHJcbiAgbGV0IHN1Yl9kdCA9IGR0L3N1Yl9zdGVwcztcclxuICBmb3IobGV0IGkgPSAwOyBpIDwgc3ViX3N0ZXBzOyBpKyspe1xyXG4gICAgaWYoZ3Jhdml0eS55ICE9IDApe1xyXG4gICAgYXBwbHlHcmF2aXR5KCk7XHJcbiAgICB9XHJcbiAgICBpZihjbGlja2VkKXtcclxuICAgICAgYXBwbHlGaWVsZChwb2ludGVyUG9zaXRpb24pO1xyXG4gICAgfVxyXG4gICAgYXBwbHlDb25zdHJhaW50KCk7XHJcbiAgICBzb2x2ZUNvbGxpc2lvbnMoKTtcclxuICAgIHVwZGF0ZVBvc2l0aW9ucyhzdWJfZHQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUG9zaXRpb25zKGR0OiBudW1iZXIpIHtcclxuICBwYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGUpID0+IHtcclxuICAgIHJlbW92ZUZyb21HcmlkKHBhcnRpY2xlKTtcclxuICAgIHBhcnRpY2xlLnVwZGF0ZVBvc2l0aW9uKGR0KTtcclxuICAgIGFkZFRvR3JpZChwYXJ0aWNsZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5R3Jhdml0eSgpIHtcclxuICBwYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGUpID0+IHtcclxuICAgIHBhcnRpY2xlLmFjY2VsZXJhdGUoZ3Jhdml0eSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5RmllbGQoZmllbGRQb3M6IFZlYzJEKSB7XHJcbiAgcGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlKSA9PiB7XHJcbiAgY29uc3QgcHVsbERpcmVjdGlvbiA9IGZpZWxkUG9zLnN1YnRyYWN0KHBhcnRpY2xlLnBvc19jdXJyKTtcclxuICBjb25zdCBkaXN0YW5jZSA9IHB1bGxEaXJlY3Rpb24ubGVuZ3RoKCk7XHJcblxyXG4gICAgaWYoZGlzdGFuY2UgPCBmaWVsZFNpemUpe1xyXG4gICAgICBsZXQgbiA9IHB1bGxEaXJlY3Rpb247XHJcbiAgICAgIG4gPSBuLm11bHRpcGx5KGZpZWxkU3RyZW5naHQvMTAwKTtcclxuICAgICAgLy8gbiA9IG4uZGl2aWRlKGRpc3RhbmNlKmRpc3RhbmNlKVxyXG4gICAgICBwYXJ0aWNsZS5hY2NlbGVyYXRlKG4pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzb2x2ZUNvbGxpc2lvbnMoKSB7XHJcbiAgcGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlMSkgPT4ge1xyXG4gICAgY29uc3QgbmVpZ2hib3JpbmdQYXJ0aWNsZXMgPSBnZXROZWlnaGJvcmluZ1BhcnRpY2xlcyhwYXJ0aWNsZTEpO1xyXG5cclxuICAgIG5laWdoYm9yaW5nUGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlMikgPT4ge1xyXG4gICAgICBsZXQgY29sbGlzaW9uX2RpcmVjdGlvbiA9IHBhcnRpY2xlMS5wb3NfY3Vyci5zdWJ0cmFjdChwYXJ0aWNsZTIucG9zX2N1cnIpO1xyXG4gICAgICBsZXQgZGlzdGFuY2UgPSBjb2xsaXNpb25fZGlyZWN0aW9uLmxlbmd0aCgpO1xyXG4gICAgICBpZiAoZGlzdGFuY2UgIT0gMCkge1xyXG4gICAgICAgIGlmIChkaXN0YW5jZSA8IHBhcnRpY2xlMS5yYWRpdXMgKyBwYXJ0aWNsZTIucmFkaXVzKSB7XHJcbiAgICAgICAgICBsZXQgbiA9IGNvbGxpc2lvbl9kaXJlY3Rpb24uZGl2aWRlKGRpc3RhbmNlKTtcclxuICAgICAgICAgIGxldCBkZWx0YSA9IHBhcnRpY2xlMS5yYWRpdXMgKyBwYXJ0aWNsZTIucmFkaXVzIC0gZGlzdGFuY2U7XHJcbiAgICAgICAgICBwYXJ0aWNsZTEucG9zX2N1cnIgPSBwYXJ0aWNsZTEucG9zX2N1cnIuYWRkKG4ubXVsdGlwbHkoZGVsdGEgKiAwLjUpKTtcclxuICAgICAgICAgIHBhcnRpY2xlMi5wb3NfY3VyciA9IHBhcnRpY2xlMi5wb3NfY3Vyci5zdWJ0cmFjdChuLm11bHRpcGx5KGRlbHRhICogMC41KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlDb25zdHJhaW50KCkge1xyXG4gIHBhcnRpY2xlcy5mb3JFYWNoKChwYXJ0aWNsZSkgPT4ge1xyXG4gICAgLy8gQXBwbHkgZmxvb3IgY29uc3RyYWludFxyXG4gICAgaWYgKHBhcnRpY2xlLnBvc19jdXJyLnkgKyBwYXJ0aWNsZS5yYWRpdXMgPiBjYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgIHBhcnRpY2xlLnBvc19jdXJyLnkgPSBjYW52YXMuaGVpZ2h0IC0gcGFydGljbGUucmFkaXVzO1xyXG4gICAgICBwYXJ0aWNsZS5wb3NfcHJldi55ID0gcGFydGljbGUucG9zX2N1cnIueSArIHBhcnRpY2xlLnBvc19jdXJyLnkgLSBwYXJ0aWNsZS5wb3NfcHJldi55O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGx5IENlaWxpbmcgY29uc3RyYWludFxyXG4gICAgaWYgKHBhcnRpY2xlLnBvc19jdXJyLnkgLSBwYXJ0aWNsZS5yYWRpdXMgPCAwKSB7XHJcbiAgICAgIHBhcnRpY2xlLnBvc19jdXJyLnkgPSBwYXJ0aWNsZS5yYWRpdXM7XHJcbiAgICAgIHBhcnRpY2xlLnBvc19wcmV2LnkgPSBwYXJ0aWNsZS5wb3NfY3Vyci55ICsgcGFydGljbGUucG9zX2N1cnIueSAtIHBhcnRpY2xlLnBvc19wcmV2Lnk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIEFwcGx5IGxlZnQgd2FsbCBjb25zdHJhaW50XHJcbiAgICBpZiAocGFydGljbGUucG9zX2N1cnIueCAtIHBhcnRpY2xlLnJhZGl1cyA8IDApIHtcclxuICAgICAgcGFydGljbGUucG9zX2N1cnIueCA9IHBhcnRpY2xlLnJhZGl1cztcclxuICAgICAgcGFydGljbGUucG9zX3ByZXYueCA9IHBhcnRpY2xlLnBvc19jdXJyLnggKyBwYXJ0aWNsZS5wb3NfY3Vyci54IC0gcGFydGljbGUucG9zX3ByZXYueDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBseSByaWdodCB3YWxsIGNvbnN0cmFpbnRcclxuICAgIGlmIChwYXJ0aWNsZS5wb3NfY3Vyci54ICsgcGFydGljbGUucmFkaXVzID4gY2FudmFzLndpZHRoKSB7XHJcbiAgICAgIHBhcnRpY2xlLnBvc19jdXJyLnggPSBjYW52YXMud2lkdGggLSBwYXJ0aWNsZS5yYWRpdXM7XHJcbiAgICAgIHBhcnRpY2xlLnBvc19wcmV2LnggPSBwYXJ0aWNsZS5wb3NfY3Vyci54ICsgcGFydGljbGUucG9zX2N1cnIueCAtIHBhcnRpY2xlLnBvc19wcmV2Lng7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQ2FudmFzKCkge1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2FudmFzU2l6ZSgpIHtcclxuICBjYW52YXMud2lkdGggPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgaW5pdGlhbGl6ZUdyaWQoKTtcclxufVxyXG5cclxubGV0IGZyYW1lQ291bnQgPSAwO1xyXG5sZXQgbGFzdFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKS8xMDtcclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUZQUygpIHtcclxuICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpLzEwO1xyXG4gIGNvbnN0IHRpbWVEaWZmID0gY3VycmVudFRpbWUgLSBsYXN0VGltZTtcclxuICBjb25zdCBmcHMgPSBNYXRoLnJvdW5kKDEwMDAgLyB0aW1lRGlmZik7XHJcbiAgbGFzdFRpbWUgPSBjdXJyZW50VGltZTtcclxuICByZXR1cm4gZnBzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KXtcclxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gIGNsaWNrZWQgPSB0cnVlO1xyXG4gIGlmKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCl7XHJcbiAgICBwb2ludGVyUG9zaXRpb24ueCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICBwb2ludGVyUG9zaXRpb24ueSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCl7XHJcbiAgICBwb2ludGVyUG9zaXRpb24ueCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgIHBvaW50ZXJQb3NpdGlvbi55ID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KXtcclxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gIGNsaWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTW92ZUV2ZW50KGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkge1xyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgaWYgKGNsaWNrZWQpIHtcclxuICAgIGlmKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCl7XHJcbiAgICAgIHBvaW50ZXJQb3NpdGlvbi54ID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgcG9pbnRlclBvc2l0aW9uLnkgPSBldmVudC5jbGllbnRZO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KXtcclxuICAgICAgcG9pbnRlclBvc2l0aW9uLnggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgIHBvaW50ZXJQb3NpdGlvbi55ID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuICB0aWNrKDAuNSk7XHJcbiAgY2xlYXJDYW52YXMoKTtcclxuICBkcmF3R3JpZCgpO1xyXG4gIGRyYXdQYXJ0aWNsZXMoKTtcclxuICBkcmF3TGFzc28oKTtcclxuXHJcbiAgbGV0IHJlZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XHJcbiAgbGV0IGdyZWVuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KTtcclxuICBsZXQgYmx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XHJcbiAgbGV0IGNvbG9yID0gYHJnYigke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9KWA7XHJcblxyXG4gIGlmIChpICUgNSA9PSAwICYmIHBhcnRpY2xlcy5sZW5ndGggPCBwYXJ0aWNsZUNvdW50KSB7XHJcbiAgICBwYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUobmV3IFZlYzJEKDIwMCwgMjAwKSwgICAxNSwgbmV3IFZlYzJEKDEwMCwgLTE1MCksIGNvbG9yKSk7XHJcbiAgICBwYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUobmV3IFZlYzJEKDIwMCwgMjYwKSwgICAxNSwgbmV3IFZlYzJEKDkwLCAtMTUwKSwgY29sb3IpKTtcclxuICAgIHBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZShuZXcgVmVjMkQoMjAwLCAzMjApLCAgIDE1LCBuZXcgVmVjMkQoODUsIC0xNTApLCBjb2xvcikpO1xyXG4gICAgcGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKG5ldyBWZWMyRCgyMDAsIDM4MCksICAgMTUsIG5ldyBWZWMyRCg5MCwgLTE1MCksIGNvbG9yKSk7XHJcbiAgICBwYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUobmV3IFZlYzJEKDIwMCwgNDQwKSwgICAxNSwgbmV3IFZlYzJEKDg1LCAtMTUwKSwgY29sb3IpKTtcclxuICB9XHJcblxyXG4gIGkrKztcclxuXHJcbiAgXHJcbiAgZnJhbWVDb3VudCsrO1xyXG4gIGlmIChmcmFtZUNvdW50ICUgMTAgPT09IDApIHtcclxuICAgIGNvbnN0IGN1cnJlbnRGcHMgPSBjYWxjdWxhdGVGUFMoKTtcclxuICAgIGZwc0NvdW50ZXIuaW5uZXJUZXh0ID0gYEZQUzogJHtjdXJyZW50RnBzfWA7XHJcbiAgICBwYXJ0aWNsZUNvdW50ZXIuaW5uZXJUZXh0ID0gYFBhcnRpY2xlczogJHtwYXJ0aWNsZXMubGVuZ3RofWA7XHJcbiAgfVxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxufVxyXG5cclxubGV0IGkgPSAwO1xyXG5jb25zdCBtYWluX2JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbl9jb250YWluZXInKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlQ2FudmFzU2l6ZSk7XHJcbm1haW5fYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XHJcbm1haW5fYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcclxubWFpbl9ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW92ZUV2ZW50KTtcclxubWFpbl9ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZU1vdXNlRG93bik7XHJcbm1haW5fYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgaGFuZGxlTW91c2VVcCk7XHJcbm1haW5fYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGhhbmRsZU1vdmVFdmVudCk7XHJcbm1haW5fYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5jbG9zZU1lbnUoKTtcclxufSk7XHJcblxyXG5pbml0aWFsaXplR3JpZCgpO1xyXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0LnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvTWVudU1hbmFnZXIudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=