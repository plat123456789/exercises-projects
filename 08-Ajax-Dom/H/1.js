let enlarge = document.getElementsByClassName("img-fluid icon");
let button = document.getElementById("button1");

for(let a of enlarge){
a.addEventListener("mouseover",function(){
    this.style.height = "4.06rem";
    this.style.width = "4.06rem";
})
}

for(let a of enlarge){
    a.addEventListener("mouseleave",function(){
        this.style.height = "2.9rem";
        this.style.width = "2.9rem";
    })
}

button.addEventListener("click",function(){
    let backGround = document.getElementById("banner");
    let head = document.getElementById("head1");
    
    backGround.style.backgroundImage = "url(img/flowershop.jpg)";
    head.innerHTML = "Welcome to my flowershop"
    button.innerHTML = "buy flowers";
    button.style.backgroundColor = "red";
});


