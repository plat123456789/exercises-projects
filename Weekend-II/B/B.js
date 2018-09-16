let timer = setInterval(drippingTap,1000);

function drippingTap(){
    console.log("drop");
};

function turnOffTap(){
  clearInterval(timer);
};


