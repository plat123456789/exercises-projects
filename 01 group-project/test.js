

let canvas = document.getElementById('canvas-test');
    let context = canvas.getContext('2d');
    let dragging = false;
    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;

    $('#canvas-test').mousedown(function(e){
        let mouseX = e.pageX - this.offsetLeft;
        let mouseY = e.pageY - this.offsetTop;
        context.beginPath();
        context.moveTo(mouseX,mouseY);
        draw(mouseX,mouseY);
        dragging = true;
    });

    $('#canvas-test').mousemove(function(e){
        if(dragging){
            let mouseX = e.pageX - this.offsetLeft;
            let mouseY = e.pageY - this.offsetTop;
            draw(mouseX,mouseY);
        }
    });

    $('#canvas-test').mouseup(function(e){
        dragging = false;
    });
    $('#canvas-test').mouseleave(function(e){
        dragging = false;
    });

    function draw(x,y){
        context.lineTo(x,y);
        context.moveTo(x,y);
        context.closePath();
        context.stroke();
    }
