// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});


// Sticky Navbar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(0,0,0,.95)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(8,8,8,.8)";
        header.style.boxShadow = "none";

    }

});


// Scroll Reveal Animation

const cards = document.querySelectorAll(".card,.solution-card,.hero-text,.hero-image,.trusted");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.15
});

cards.forEach(card=>{

card.classList.add("hidden");

observer.observe(card);

});


// Smooth Scroll

document.querySelectorAll("a[href='#']").forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

window.scrollTo({

top:0,
behavior:"smooth"

});

});

});


// Mouse Glow

const glow=document.createElement("div");

glow.style.width="18px";
glow.style.height="18px";
glow.style.position="fixed";
glow.style.borderRadius="50%";
glow.style.background="#ff3b3b";
glow.style.pointerEvents="none";
glow.style.filter="blur(8px)";
glow.style.zIndex="99999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-9+"px";
glow.style.top=e.clientY-9+"px";

});


// Hero Image Floating

const heroImg=document.querySelector(".hero-image img");

let direction=1;

setInterval(()=>{

if(direction){

heroImg.style.transform="translateY(-10px)";
direction=0;

}else{

heroImg.style.transform="translateY(10px)";
direction=1;

}

},1800);


// Card Hover Animation

const allCards=document.querySelectorAll(".card,.solution-card");

allCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});


// Typing Effect

const title=document.querySelector(".hero-text h1");

const text=title.innerText;

title.innerText="";

let i=0;

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,30);

}

}

typing();