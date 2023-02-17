gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
 content: "#content",
 smooth: 3,
 effects: true
});

smoother.effects("img", { speed: "auto" });













var play = document.querySelector("#play,#play1");
var pause = document.querySelector("#pause");
var resume = document.querySelector("#resume");
var reverse = document.querySelector("#reverse,#revers1");
var restart = document.querySelector("#restart");

var tl = gsap.timeline({paused: true});

gsap.to(".box1", {duration: 1,scale:10,opacity:1})
gsap.to(".box2", {duration: 1,scale:10,opacity:1})
gsap.to(".box3", {duration: 1,scale:10,opacity:1})
gsap.to(".box4", {duration: 1,scale:10,opacity:1})
  tl.to(".content", {y:100,opacity:1, duration:2.9});

play.onclick = function() {
  tl.play();
}

pause.onclick = function() {
  tl.pause();
}

resume.onclick = function() {
  tl.resume();
}

reverse.onclick = function() {
  tl.reverse();tl.revers1();
}

restart.onclick = function() {
  tl.restart();
 tl.restart1();
}



gsap.registerPlugin(ScrollTrigger);
 
gsap.to('.content',{ScrollTrigger:{
 triggger:'.content',
  toggleAction:"play pause return play"},
 y:1000, opacity:1})