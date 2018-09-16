for(var i=1;i<=30;i++){
    
    if(i%3===0&&i%5===0){
        console.log("Hong Kong\n");
    }else if(i%5===0){
        console.log("Kong\n");
    }else if(i%3===0){
        console.log("Hong\n");
    }else{
        console.log(i);
    }
}