// ===============================
// REVEAL ANIMATIONS
// ===============================

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add('visible');

}

});

},
{
threshold: 0.15
}
);

revealElements.forEach(el => observer.observe(el));

// ===============================
// FOOTER YEAR
// ===============================

const year = document.getElementById("year");

if(year){
year.textContent = new Date().getFullYear();
}

// ===============================
// ZION HOLDINGS LINK
// ===============================

const zionLink = document.getElementById("zion-link");

if(zionLink){

zionLink.href =
"https://joesephbolg.github.io/zionholdings/";

}

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault();

const target = document.querySelector(
this.getAttribute('href')
);

if(target){

target.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

});

});

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector('.nav');

window.addEventListener('scroll',()=>{

if(window.scrollY > 100){

navbar.classList.add('nav-scrolled');

}else{

navbar.classList.remove('nav-scrolled');

}

});

// ===============================
// ACTIVE MENU LINKS
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop;

if(pageYOffset >= sectionTop - 200){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
.includes(current)
){
link.classList.add("active");
}

});

});

// ===============================
// HERO TYPING EFFECT
// ===============================

const typingTarget =
document.querySelector(".typing-text");

if(typingTarget){

const words = [

"Web Developer",
"Graphic Designer",
"Brand Builder",
"Entrepreneur",
"UI/UX Designer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const currentWord =
words[wordIndex];

if(!deleting){

typingTarget.textContent =
currentWord.substring(0,charIndex++);

if(charIndex >
currentWord.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}else{

typingTarget.textContent =
currentWord.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex =
(wordIndex + 1)
% words.length;

}

}

setTimeout(typeEffect,
deleting ? 60 : 120);

}

typeEffect();

}

// ===============================
// PROJECT CARD HOVER GLOW
// ===============================

const cards =
document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.setProperty(
'--x',
`${x}px`
);

card.style.setProperty(
'--y',
`${y}px`
);

});

});

// ===============================
// PRELOADER (OPTIONAL)
// ===============================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// ===============================
// CONSOLE BRANDING
// ===============================

console.log(
"%cZionDesigns Portfolio",
"color:gold;font-size:20px;font-weight:bold;"
);

console.log(
"%cDesigned by Joseph Uzoukwu",
"color:white;font-size:14px;"
);
