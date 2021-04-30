"use strict"

let hh = 0;
let mm = 0;
let ss = 0;

let tempo = 1000;
let cron;


function start(){
    cron = setInterval(() => {timer(); }, tempo);
}
function pause(){
    clearInterval(cron);
}
function stop(){
    clearInterval(cron);

    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('cronometro').innerText = "00:00:00";

}


function timer(){

    ss++;
    if (ss == 59){
        ss = 0;
        mm++;

        if(mm == 59){
            mm = 0;
            hh++;
        }
    }
    let final = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('cronometro').innerText = final;
    
    return final;
}