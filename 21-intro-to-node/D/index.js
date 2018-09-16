let events = require('events');

let myEmitter = new events.EventEmitter();

let sec;

let time;

myEmitter.on("tick",function(sec){
    if(sec!==0){
        console.log(sec);
    }else{
        console.log("kaboom")
        clearInterval(time);
    }
});

function count(sec){
    myEmitter.emit("tick",sec--);
}


function start (sec){
    time = setInterval(function(){count(sec--)},1000);
}

function pause(){
    clearInterval(time);
}

function stop(){
    clearInterval(time);
    
}

start(20);
setTimeout(stop,5000);
setTimeout(function(){console.log("this is the pause "+sec)},5000);


