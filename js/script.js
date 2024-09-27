"use-strict"

!function e(i, t, o) { function a(r, s) { if (!t[r]) { if (!i[r]) { var c = "function" == typeof require && require; if (!s && c) return c(r, !0); if (n) return n(r, !0); var l = new Error("Cannot find module '" + r + "'"); throw l.code = "MODULE_NOT_FOUND", l } var m = t[r] = { exports: {} }; i[r][0].call(m.exports, function (e) { var t = i[r][1][e]; return a(t ? t : e) }, m, m.exports, e, i, t, o) } return t[r].exports } for (var n = "function" == typeof require && require, r = 0; r < o.length; r++)a(o[r]); return a }({ 1: [function (e, i, t) { "use strict"; !function (e) { e.fn.turntable = function (i) { function t(i) { var t, o = i.length; t = "scroll" === n.axis ? e(window).height() : "y" === n.axis ? r.height() : r.width(); for (var a = t / o, c = 0; c < i.length; c++)s[c] = { min: a * c, max: a + a * c, index: c }; n.reverse === !0 && (s.reverse(), e.each(s, function (e, i) { i.index = e })) } var o = function () { var e = !1; return function (i) { (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0, 4))) && (e = !0) }(navigator.userAgent || navigator.vendor || window.opera), e }, a = e("ul", this).children(), n = e.extend({}, e.fn.turntable.defaults, i), r = e(this), s = []; !function (i) { a.each(function () { e(this).html('<img src="' + e(this).data("imgSrc") + '">') }) }(), e("li:first-child>img", r).on('load', function () { e(this).parent().addClass("active"), t(a) }), e(window).resize(function () { t(a) }); var c = function (i, t) { e.each(i, function () { t >= this.min && t <= this.max && (a.removeClass("active"), a.eq(this.index).addClass("active")) }) }; return "scroll" === n.axis ? e(window).scroll(function () { var i; i = "bottom" === n.scrollStart ? r.height() : "top" === n.scrollStart ? 0 : r.height() / 2; var t = r.offset(), o = t.top - (e(window).scrollTop() - i); c(s, o) }) : o() ? r.on("touchmove", function (i) { i.preventDefault(); var t, o = e(this).offset(), a = i.originalEvent.touches[0] || i.originalEvent.changedTouches[0]; t = "y" === n.axis ? a.pageY - o.top : a.pageX - o.left, c(s, t) }) : r.on("mousemove", function (i) { var t, o = e(this).offset(); t = "y" === n.axis ? i.pageY - o.top : i.pageX - o.left, c(s, t) }) }, e.fn.turntable.defaults = { axis: "x", reverse: !1, scrollStart: "middle" } }(jQuery) }, {}] }, {}, [1]);

let scrollAmount = 0;
let projectCards = [];
function onWindowLoad() {
  console.log('helop')
  const backButtons = [...document.querySelectorAll('.project-card__button--back')];

  backButtons.push(document.querySelector('.projects-container'));
  backButtons.forEach(button => {
    button.addEventListener('click', exitItem);
  });

  document.querySelector('.theme-switch').addEventListener('click', switchTheme);
  projectCards = document.querySelectorAll('.project-card');


  for (const card of projectCards) {
    card.addEventListener('click', function (event) {
      event.stopPropagation();
      const clickedItem = event.target.closest('.project-card');
      expandItem(clickedItem);
    });
  }
}

function switchTheme() {
  const rootElem = document.documentElement;
  const theme = rootElem.getAttribute('theme');

  const newTheme = (theme === 'light') ? 'dark' : 'light';

  rootElem.setAttribute('theme', newTheme);

  // Save the theme in a cookie
  document.cookie = `theme=${newTheme}; path=/; max-age=31536000`; // cookie valid for 1 year
  updateColor();
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}


function applySavedSettings() {
  const savedTheme = getCookie('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('theme', savedTheme);
  }
}

function expandItem(clickedItem) {
  if (clickedItem.classList.contains('project-card--expanded')) {
    return;
  }

  clickedItem.insertAdjacentHTML('beforebegin', '<li class="project-card project-card--collapsed project-card--placeholder"></li>')

  clickedItem.style.position = scrollAmount = document.body.scrollTop;

  clickedItem.classList.add('project-card--expanded');
  clickedItem.classList.remove('project-card--collapsed');


  const projectCards = document.querySelectorAll('.project-card');
  $('#robotArmTurntable').turntable();

  for (const card of projectCards) {
    if (card !== clickedItem) {
      card.classList.add('project-card--hidden');
    }
  };

}

function exitItem(event) {
  event.stopPropagation();
  try {

    const expandedCard = document.querySelector('.project-card--expanded');
    expandedCard.classList.add('project-card--collapsed');
    expandedCard.classList.remove('project-card--expanded');

    document.querySelector('.project-card--placeholder').remove();


    setTimeout(() => {
      window.scrollTo(0, scrollAmount);
    }, 2);

    for (const card of projectCards) {
      card.classList.remove('project-card--hidden');
    }

  } catch (error) {
    console.log(error);
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', onWindowLoad)

applySavedSettings();