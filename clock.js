"use strict"

/* let hours = document.createElement("div");
let minutes = document.createElement("div");
let seconds = document.createElement("div"); */

function clock(){
    const timer = document.querySelector("#clock");
    let date = new Date();
    let myClock = date.toLocaleTimeString();
    timer.textContent = myClock;
}

clock();
setInterval(clock, 1000); //keeps counting