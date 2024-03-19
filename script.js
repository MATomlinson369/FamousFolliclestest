 document.querySelector("h1").textContent = "Famous Follicles"
document.querySelector("h2").textContent = "Choose Dwayne's style!"
// let names = ["Dr.Phil", "Pittbull", "The Rock"]
// let firstCharacter = names[0]
// console.log(firstCharacter)
// console.log(names[1])
// console.log(names[2])


// const slides = document.querySelectorAll(".slides img");
// let slideindex = 0;
// let intervalId = null;

// function initializeSlider(){

// }

// function showSlide(index){

// }
// function vorigeSlide(){

// }
// function
let Haarstyles =["hair1","hair2","hair3","hair4"]
let FirstStyle = [0]

let huidigeFoto = document.getElementById("character")
let characterHaar;

const hair1knop = document.querySelector("#hair1")
const hair2knop = document.querySelector("#hair2")
const hair3knop = document.querySelector("#hair3")
const hair4knop = document.querySelector("#hair4")


function veranderHaar1(){
    
    if(huidigeFoto.src.endsWith("rock.png")){
        huidigeFoto.src ="images/haar1-rock.png";
    }
    else if (huidigeFoto.src.endsWith("phil.png")){
        huidigeFoto.src ="images/haar1-phil.png";
    }

    else if (huidigeFoto.src.endsWith("pitt.png")){
        huidigeFoto.src = "images/haar1-pitt.png";
    }
    
}

function veranderHaar2(){
    if(huidigeFoto.src.endsWith("rock.png")){
        huidigeFoto.src ="images/haar2-rock.png";
    }

    else if (huidigeFoto.src.endsWith("phil.png")){
        huidigeFoto.src ="images/haar2-phil.png";
    }
    else if (huidigeFoto.src.endsWith("pitt.png")){
        huidigeFoto.src = "images/haar2-pitt.png";
    }

    
}

function veranderHaar3(){
    if(huidigeFoto.src.endsWith("rock.png")){
        huidigeFoto.src ="images/haar3-rock.png";
    }
    else if (huidigeFoto.src.endsWith("phil.png")){
        huidigeFoto.src ="images/haar3-phil.png";
    }
    else if (huidigeFoto.src.endsWith("pitt.png")){
        huidigeFoto.src = "images/haar3-pitt.png";
    }
    
}

function veranderHaar4(){
    if(huidigeFoto.src.endsWith("rock.png")){
        huidigeFoto.src ="images/haar4-rock.png";
    }
    else if (huidigeFoto.src.endsWith("phil.png")){
        huidigeFoto.src ="images/haar4-phil.png";
    }
    else if (huidigeFoto.src.endsWith("pitt.png")){
        huidigeFoto.src = "images/haar4-pitt.png";
    }
}

hair1knop.addEventListener("click", veranderHaar1)
hair2knop.addEventListener("click", veranderHaar2)
hair3knop.addEventListener("click", veranderHaar3)
hair4knop.addEventListener("click", veranderHaar4)