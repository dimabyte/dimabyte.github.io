const a = []; // container for dots
function two_rand(max, min) { //return random number from [min;max)
    return Math.random() * (max - min) + min
}
function none_zero(max) { // return random number from [-max;-1) or (1;max)
    if(Math.random() > 0.5){
        return Math.random() * (max - 1) + 1
    } else {
        return -(Math.random() * (max - 1) + 1)
    }
}


function draw_all(dots = 90) {
    function init() { //class constructor
        sheet = new Drawer(0, 0, document.documentElement.clientWidth, $('.main').height(), '#dde3e9', 1, 1, 1);
        //sheet with dots
        for (let i = 0; i < dots; i++) { //creating dots
            a.push(new Drawer(
                two_rand(sheet.width - 3, 1), //coordinate by x
                two_rand(sheet.height - 3, 1), //coordinate by y
                2, 2, '#9ba4ac', //width, height, color
                none_zero(2), //x vector
                none_zero(2), //y vector

            ));

        }
        canvas = document.getElementById("crowd_canvas");
        canvas.width = sheet.width;
        canvas.height = sheet.height;
        context = canvas.getContext("2d");
        setInterval(move, 1000000);
    }
    function draw() { //draw sheet with dots
        sheet.draw();
        for (var c = 0; c < dots; c++) {
            a[c].draw();
        }


    }

    function move() { //moving dots and drawing lines
        for (let i = 0; i < dots; i++) {
            a[i].x -= a[i].movex; //moves point along its x vector
            a[i].y -= a[i].movey; //moves point along its y vector
            if (a[i].x < 2 || a[i].x > sheet.width - 2) { //if the point was outside the sheet by x
                a[i].movex = -a[i].movex; //change x vector
            }
            if (a[i].y < 2 || a[i].y > sheet.height - 2) { //if the point was outside the sheet by y
                a[i].movey = -a[i].movey; //change y vector
            }
        }
        draw();
        }


    function Drawer(x, y, width, height, color, movex, movey) { //drawer of shapes
        this.width = width;
        this.height = height;
        this.x = x; //coordinate by x
        this.y = y; //coordinate bu y
        this.movex = movex; //x vector
        this.movey = movey; //y vector
        this.color = color;
        this.draw = function () { //draw the shape
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, this.width, this.height);
        };
    }

    $(window).on('resize', function () { //sheet size change
        sheet.width = document.documentElement.clientWidth;
        sheet.height = $('.main').height();
        canvas.width = sheet.width;
        canvas.height = sheet.height;
        if (document.documentElement.clientWidth < 1000) {
            dots = 30
        } else {
            dots = 90
        }
    });

    init();
    if (document.documentElement.clientWidth < 1000) {
        dots = 30
    } else {
        dots = 90
    }//Constructor call
    setTimeout(function () {
        context.beginPath();
        context.moveTo(30, 20);
        context.lineTo(150, 140);
        context.lineTo(250, 30);
        context.closePath();
        context.strokeStyle = "red";
        context.stroke();
    }, 4000)

}

