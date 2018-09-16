let timer = prompt("1-60 second for alarm?");

while(timer<1||timer>60){
  timer = prompt("must be between 1-60 sec");
}

function alarm (time){

  this.time = time*1000;

setTimeout(function(){
  alert("Alarm ringing at "+time+" second");
},this.time);
}

alarm(timer);