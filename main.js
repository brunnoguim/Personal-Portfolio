//Hero on load animation
function heroAnimation(){
    gsap.from('#h1-hero, #h2-hero',{
        y: 120,
        autoAlpha:0,
        ease: "back.out(1.5)",
        stagger: 0.25,
        duration: 1
    })
}

//Mobile nav menu
var mobileMenu = document.querySelector('#mobile-menu')
var navbar = document.querySelector('#navbar')

mobileMenu.addEventListener("click", ()=> {
  navbar.classList.toggle("open");
});

navbar.addEventListener("click", ()=> {
    navbar.classList.toggle("open");
});

//Writing on click animation
var texto = document.querySelector('#digitar')
texto.addEventListener("click", apagar)
var opções = ['front-end developer', 'software developer', 'coder', 'undefined', 'just kidding (:', 'nothing to see here', 'just move on ...', "that's it, you've seen it all", "please stop clicking here", "congrats, you just lost clicking privileges!"]
texto.innerHTML = `${opções[0]}`
var contagemTextos = 0
var contagemLetras = 0
var textoAtual = ""
var letras = ""
var contagemLoops = 4
const timer = ms => new Promise(res => setTimeout(res, ms))

async function apagar(){
    texto.innerHTML = ""
    if (contagemTextos === contagemLoops){
        contagemTextos = -1
        contagemLoops++
    }
    contagemTextos++
    textoAtual = opções[contagemTextos]
    while(contagemLetras <= textoAtual.length){
        letras = textoAtual.slice(0, contagemLetras)
        texto.innerHTML = letras
        contagemLetras++
        await timer (30)
    }
    contagemLetras = 0
    if(contagemLoops === 10){
        texto.style.pointerEvents = "none"
        texto.style.border = "none"
    }
}

//Header on scroll animation
window.onscroll = function() {scrollFunction()}
function scrollFunction(){
     if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
   			document.querySelector("#header").style.boxShadow = "0px 0px 10px black"
   	} else {
   			document.querySelector("#header").style.boxShadow = ""
   	}
}

//Icon/title on hover animation
var title = document.querySelector('#title')
title.addEventListener("mouseover", popup)
title.addEventListener("mouseout", popdown)

function popup(){
    gsap.to(title,{
        y:-8,
        x:8 ,
        textShadow: '-8px 8px 0px black',
        duration:0.2
    })  
}

function popdown(){
    gsap.to(title,{
        y:0,
        x:0,
        textShadow: '',
        duration:0.2
    })
}

//Minalism span on hover animation
var minimalism = document.querySelector('#minimalism')
var erase1 = document.querySelector('#erase1')
var erase2 = document.querySelector('#erase2')
var box = document.querySelector('#about-showcase')
var dots = document.querySelector('#mobile-menu-fake')

minimalism.addEventListener("mouseover", erase)
minimalism.addEventListener("mouseout", write)

function erase(){
    erase1.style.color = "#232323"
    erase2.style.color = "#232323"
    box.style.marginTop = "-14em"
    box.style.filter = "grayscale(50%) contrast(140%)"
    navbar.style.opacity = "0"
    dots.style.opacity = "1"
    dots.style.right = "8%"
}

function write(){
    erase1.style.color = "white"
    erase2.style.color = "white"
    box.style.marginTop = ""
    box.style.filter = ""
    navbar.style.opacity = "1"
    dots.style.opacity = "0"
    dots.style.right = "0%"
}

//Images click events
var html = document.querySelector('#img1')
var css = document.querySelector('#img2')
var js = document.querySelector('#img3')

html.addEventListener("mouseover", ()=>{
    gsap.to(html,{
        y:-8,
        x:8 ,
        duration:0.2
    })  
})

html.addEventListener("mouseout", ()=>{
    gsap.to(html,{
        y:0,
        x:0,
        duration:0.2
    })
})

css.addEventListener("mouseover", ()=>{
    gsap.to(css,{
        y:-8,
        x:8 ,
        duration:0.2
    })  
})

css.addEventListener("mouseout", ()=>{
    gsap.to(css,{
        y:0,
        x:0,
        duration:0.2
    })
})

js.addEventListener("mouseover", ()=>{
    gsap.to(js,{
        y:-8,
        x:8 ,
        duration:0.2
    })  
})

js.addEventListener("mouseout", ()=>{
    gsap.to(js,{
        y:0,
        x:0,
        duration:0.2
    })
})

html.addEventListener("click", ()=>{
    html.style.zIndex = "10"
    css.style.zIndex = "9"
    js.style.zIndex = "8"
})

css.addEventListener("click", ()=>{
    html.style.zIndex = "10"
    css.style.zIndex = "11"
    js.style.zIndex = "8"
})

js.addEventListener("click", ()=>{
    html.style.zIndex = "10"
    css.style.zIndex = "11"
    js.style.zIndex = "12"
})

//Interaction span on click mini-game

var interaction = document.querySelector('#interaction')
var modalBg = document.querySelector('#modal-bg')
var close = document.querySelector('#close')
var block = document.querySelector('#block')
var hole = document.querySelector('#hole')
var character = document.querySelector('#character')
var line = document.querySelector('#line')
var modal2 = document.querySelector('#modal2')
var scoreDisplay = document.querySelector('#score-display')
var jumping = 0
var score = 0
var playing = 0

    //Open main modal
interaction.addEventListener("click", ()=>{
    modalBg.style.display = "flex"
    scoreDisplay.innerHTML = `Your current score is: ${score}`
})
    //Close main modal
close.addEventListener("click", ()=>{
    modalBg.style.display = "none" 
})

    //Randomize holes in the blocks
hole.addEventListener("animationiteration", ()=> {
    var random = Math.random()*60
    hole.style.top = `${random}%`
    score++
})

    //Main play function
function play(){
        //Setting up the game  
    modal2.style.display = "none"
    block.style.display = "block"
    block.style.animation = "block 1.9s infinite"
    block.style.animationTimingFunction = "linear"
    hole.style.animation = "block 1.9s infinite"
    hole.style.animationTimingFunction = "linear"
    playing = 1
    score = 0
        //Gravity function
    gravity = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        if((jumping == 0) && (playing == 1)){    
            character.style.top = `${characterTop+3}px`
        }
    },7)
        //Game over function
    setInterval(function(){
        var blockRight = parseInt(window.getComputedStyle(block).getPropertyValue("right"))
        var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        var characterRight = parseInt(window.getComputedStyle(character).getPropertyValue("right"))
        if((characterTop > parseInt(window.getComputedStyle(line).getPropertyValue("top"))) || (((blockRight + 70 > characterRight) && (blockRight < characterRight + 40)) && ((characterTop<holeTop-5)||(characterTop>holeTop+170)))){
            modal2.style.display = "flex"
            character.style.top = "30px"
            block.style.animation = ""
            hole.style.animation = ""
            playing = 0
            clearInterval(gravity)
            scoreDisplay.innerHTML = `Your current score is: ${score}`
        }
    }, 7)
}

    //Jump function
function jump(){
    jumping = 1
    let jumpCount = 0
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        if(characterTop > 6){
            character.style.top = `${characterTop-4}px`
        }
        if(jumpCount>20){
            clearInterval(jumpInterval)
            jumping=0
            jumpCount=0
        }
        jumpCount++
    },5)
}

//About scroll Animation
gsap.from("#about-1", {
    scrollTrigger: {
        trigger:"#about-1", 
        start:"top 70%", 
    }, 
    x: -200, 
    autoAlpha: 0, 
    ease: "back.out(1.5)",
    duration: 1
})
gsap.from("#img1, #img2, #img3", {
    scrollTrigger: {
        trigger:"#about-2", 
        start:"top 55%", 
    }, 
    x: 200, 
    autoAlpha: 0, 
    ease: "back.out(1.5)",
    stagger: 0.25,
    duration: 1
})

//Work scroll Animation
gsap.from("#work-1", {
    scrollTrigger: {
        trigger:"#work-1", 
        start:"top 70%", 
    }, 
    x: -200, 
    autoAlpha: 0, 
    ease: "back.out(1.5)",
    duration: 1
})
gsap.from("#work-2", {
    scrollTrigger: {
        trigger:"#work-2", 
        start:"top 60%", 
    }, 
    x: 200, 
    autoAlpha: 0, 
    ease: "back.out(1.5)",
    duration: 1
})

//Contact scroll Animation
gsap.from("#contact-1", {
    scrollTrigger: {
        trigger:"#contact-1", 
        start:"top 70%", 
    }, 
    x: -200, 
    autoAlpha: 0, 
    ease: "back.out(1.5)",
    duration: 1
})
gsap.from("#line1, #line2, #line3", {
    scrollTrigger: {
        trigger:"#contact-2", 
        start:"top 55%",
    }, 
    y: 120, 
    autoAlpha: 0, 
    stagger:0.25, 
    ease: "back.out(1.5)",
    duration: 1
})

//Japa logo on hover animation

var logos = document.querySelector('#logos')
var oldLogo = document.querySelector('#logo2')

logos.addEventListener("mouseover", change)
logos.addEventListener("mouseout", revert)

function change(){
    oldLogo.style.opacity = '1'
}

function revert(){
    oldLogo.style.opacity = '0'
}

//Icon/contact on hover animation
var icon1 = document.querySelector('#icon1')
var icon2 = document.querySelector('#icon2')
var icon3 = document.querySelector('#icon3')
icon1.addEventListener("mouseover", oneUp)
icon1.addEventListener("mouseout", oneDown)
icon2.addEventListener("mouseover", twoUp)
icon2.addEventListener("mouseout", twoDown)
icon3.addEventListener("mouseover", threeUp)
icon3.addEventListener("mouseout", threeDown)

function oneUp(){
    gsap.to(icon1,{
        y:-7,
        x:7,
        boxShadow: '-5px 5px 5px black',
        duration:0.1
    })  
}

function oneDown(){
    gsap.to(icon1,{
        y:0,
        x:0,
        boxShadow: '',
        duration:0.1
    })
}

function twoUp(){
    gsap.to(icon2,{
        y:-7,
        x:7,
        boxShadow: '-5px 5px 5px black',
        duration:0.1
    })  
}

function twoDown(){
    gsap.to(icon2,{
        y:0,
        x:0,
        boxShadow: '',
        duration:0.1
    })
}

function threeUp(){
    gsap.to(icon3,{
        y:-7,
        x:7,
        boxShadow: '-5px 5px 5px black',
        duration:0.1
    })  
}

function threeDown(){
    gsap.to(icon3,{
        y:0,
        x:0,
        boxShadow: '',
        duration:0.1
    })
}