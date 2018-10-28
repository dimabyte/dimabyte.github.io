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
                2, 2, '#93999f', //width, height, color
                none_zero(2), //x vector
                none_zero(2), //y vector
            ));

        }
        canvas = document.getElementById("crowd_canvas");
        canvas.width = sheet.width;
        canvas.height = sheet.height;
        context = canvas.getContext("2d");
        setInterval(move, 50);
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
        let j = dots;
        draw();
        for (let h = 0; h < j; h++) { //creating and drawing lines
            let k = j - 1;
            while (k !== h) {
                if (Math.pow(Math.pow(a[k].x - a[h].x, 2) + Math.pow(a[k].y - a[h].y, 2), 0.5) < 50) {
                    //if the distance between dots is 100
                    //draw the line between this dots
                    context.beginPath();
                    context.moveTo(a[k].x + 1, a[k].y + 1);
                    context.lineTo(a[h].x + 1, a[h].y + 1);
                    context.lineWidth = 0.1;
                    let line_opacity = ((100 - Math.pow(Math.pow(a[k].x - a[h].x, 2) + Math.pow(a[k].y - a[h].y, 2), 0.5)) / 100);
                    //opacity of line turn on the distance
                    context.strokeStyle = "hsla(210, 8%, 72%, " + line_opacity + ")";
                    context.stroke();
                    context.closePath();
                }
                k -= 1;
            }
        }

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
            dots = 90
        } else {
            dots = 90
        }
    });

    init(); //Constructor call
}

