
let good=document.querySelector(".good");
let g1=document.querySelector(".grab");
let image=document.querySelector('#im');

let hour=document.querySelector('#tm1');
let mins=document.querySelector('#tm2');
let secs=document.querySelector('#tm3');
let ampm=document.querySelector('.am');

function timedisplay() {
    let dis = new Date();
    let hrs = dis.getHours();
    let min = dis.getMinutes();
    let sec = dis.getSeconds();

    if (hrs >= 12) {
        ampm.innerHTML = "PM";
    } else {
        ampm.innerHTML = "AM";
    }
    if (hrs >= 7 && hrs < 12) {
        g1.textContent = "GRAB SOME HEALTHY BREAKFAST!!!";
    } else if (hrs >= 12 && hrs < 16) {
        g1.textContent = "LET'S HAVE SOME LUNCH !!";
    } else if (hrs >= 16 && hrs < 19) {
        g1.textContent = "STOP YAWING,GET SOME TEA..ITS JUST EVENING!";
    } else if (hrs >= 19 || hrs < 7) {
        g1.textContent = "CLOSE YOUR EYES AND GO TO SLEEP";
    }
    if (hrs > 12) {
        hrs = hrs - 12;
    }
    hour.innerHTML = hrs;
    mins.innerHTML = min;
    secs.innerHTML = sec;
}

setInterval(()=>{
    timedisplay();
},1000)


function fun1(){

const t=new Date();
const h=t.getHours();

let wake=document.getElementById("one").options[document.getElementById("one").selectedIndex].text;
let lunch=document.getElementById("two").options[document.getElementById("two").selectedIndex].text;
let nap=document.getElementById("three").options[document.getElementById("three").selectedIndex].text;
let night=document.getElementById("four").options[document.getElementById("four").selectedIndex].text;

document.querySelector(".woke").textContent=wake;
document.querySelector(".lun").textContent=lunch;
document.querySelector(".nop").textContent=nap;
document.querySelector(".nyt").innerText=night;

let new4=document.querySelector('#one').value;
let new1=document.querySelector('#two').value;
let new2=document.querySelector('#three').value;
let new3=document.querySelector('#four').value;

    if(parseInt(new4)===h){
        good.innerHTML="GOOD MORNING!! WAKE UP !!";
        image.src="./dayimg.svg";
    }
    if(parseInt(new1)===h){
        good.innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
        image.src="./afternoonimg.svg";
    }
    if(parseInt(new2)===h){
        good.innerHTML="GOOD EVENING !!";
        image.src="./eveningimg.png";
    }
    if(parseInt(new3)===h){
        good.innerHTML="GOOD NIGHT !!";
        image.src="./nightimg.svg";
    }
}