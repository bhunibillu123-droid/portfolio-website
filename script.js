
console.log("Portfolio Loaded Successfully");

const words = [
    "B.Tech AI & ML Student",
    "Aspiring Cloud Engineer",
    "Python Developer",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.querySelector(".typing");

function type() {

    currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(type, isDeleting ? 50 : 120);
}

type();

// Project Scroll Animation

const cards=document.querySelectorAll(".project-card");

function revealProjects(){

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

const trigger=window.innerHeight-120;

if(top<trigger){

card.classList.add("show");

}

});

}

window.addEventListener("scroll",revealProjects);

revealProjects();

const reveals = document.querySelectorAll(".reveal");

function revealProjects() {

    reveals.forEach((element) => {

        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealProjects);
window.addEventListener("load", revealProjects);

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if(document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

};

topBtn.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        scrollPercent + "%";

});