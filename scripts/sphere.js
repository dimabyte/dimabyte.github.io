const letters = []; // container for COUNT
const sphere_dots = [];
const sphere_dots_count = 5;
const DIAMETER = $('.crowd_sphere').width();
const COUNT = 8;

function two_rand(max, min) { //return random number from [min;max)
    return Math.random() * (max - min) + min
}
function move_bits(bit) {
    bit.x -= bit.movex; //moves potransparency along its x vector
    bit.y -= bit.movey; //moves potransparency along its y vector
    if ((Math.pow(Math.pow(DIAMETER / 2 - bit.x, 2) + Math.pow(DIAMETER / 2 - bit.y, 2), 0.5) + 20) > (DIAMETER / 2)) {
        bit.movex = -bit.movex;
        bit.movey = -bit.movey;
    }
}
function distance(x1, y1, x2, y2) {
    return Math.pow(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2), 0.5)
}
function drawe_all() {
    function init() {
        for (let i = 0; i < COUNT; i++) { //creating COUNT
            let rand = Math.floor(Math.random() * (4 - (-4))) + (-4);
            letters.push(new Drawer(
                two_rand(200, 100), //coordinate by x
                two_rand(200, 100), //coordinate by y
                14 + rand, 19 + rand,
                two_rand(1.5, -1.5), //x vector
                two_rand(1.5, -1.5),
                document.getElementById("bitkek"),
                0, 0,
                +two_rand(0.02, 0.01).toFixed(3),
                two_rand(3, 1)
            ));
        }
        for (let i = 0; i < sphere_dots_count; i++) { //creating COUNT
            sphere_dots.push(new Drawer(
                two_rand(200, 100), //coordinate by x
                two_rand(200, 100), //coordinate by y
                1, 1,
                two_rand(1.5, -1.5), //x vector
                two_rand(1.5, -1.5),
                0, 0, 0, 1, 1
            ));
        }
        canvas_sphere = document.getElementById("pong");
        canvas_sphere.width = DIAMETER;
        canvas_sphere.height = DIAMETER;
        context_sphere = canvas_sphere.getContext("2d");
    }
    function draw() { //draw sheet with COUNT
        context_sphere.clearRect(0, 0, canvas_sphere.width, canvas_sphere.height);
        for (let c = 0; c < 5; c++) {
            letters[c].blur_img();
        }
        for (let c = 5; c < COUNT; c++) {
            letters[c].normal_img();
        }
        let j = sphere_dots_count;
        for (let h = 0; h < j; h++) { //creating and drawing lines
            let k = j - 1;
            context_sphere.globalAlpha = 1;
            while (k !== h) {
                if (Math.pow(Math.pow(sphere_dots[k].x - sphere_dots[h].x, 2) + Math.pow(sphere_dots[k].y - sphere_dots[h].y, 2), 0.5) <= 100
                 ) {
                    if (sphere_dots[k].parity === 0 && sphere_dots[h].parity === 0 && Math.pow(Math.pow(sphere_dots[k].x - sphere_dots[h].x, 2) + Math.pow(sphere_dots[k].y - sphere_dots[h].y, 2), 0.5) > 99) {
                        sphere_dots[k].parity = sphere_dots[h];
                        sphere_dots[h].parity = sphere_dots[k];
                    }
                    if (sphere_dots[k].parity === sphere_dots[h] && sphere_dots[h].parity === sphere_dots[k]){
                        context_sphere.moveTo(sphere_dots[k].x, sphere_dots[k].y);
                        context_sphere.lineTo(sphere_dots[h].x, sphere_dots[h].y);
                        context_sphere.lineWidth = 1;
                        let line_opacity = +((100 - Math.pow(Math.pow(sphere_dots[k].x - sphere_dots[h].x, 2) + Math.pow(sphere_dots[k].y - sphere_dots[h].y, 2), 0.5)) / 100).toFixed(6);
                        if (line_opacity < 0){
                            line_opacity = 0
                        }
                        //opacity of line turn on the distance
                        context_sphere.strokeStyle = "hsla(0, 100%, 100%," +  line_opacity + ")";
                        context_sphere.stroke();
                    }
                } else {
                    if (sphere_dots[k].parity === sphere_dots[h] && sphere_dots[h].parity === sphere_dots[k]) {
                        sphere_dots[k].parity = 0;
                        sphere_dots[h].parity = 0;

                    }
                }
                k -= 1
            }
        }
        for (let c = 0; c < sphere_dots_count; c++) {
            sphere_dots[c].draw_dot();
        }

    }
    function move() { //moving COUNT and drawing lines
        for (let i = 0; i < COUNT; i++) {
            if (letters[i].parity % 2 === 0){
                if(letters[i].transparency + letters[i].transparency_change < 1){
                    letters[i].transparency += letters[i].transparency_change;
                    move_bits(letters[i])
                } else{
                    letters[i].parity += 1;
                    move_bits(letters[i])
                }
            } else{
                if(letters[i].transparency - letters[i].transparency_change > 0){
                    letters[i].transparency -= letters[i].transparency_change;
                    move_bits(letters[i])
                } else{
                    letters[i].parity += 1;
                    let rand = Math.floor(Math.random() * (4 - (-4))) + (-4);
                    letters[i].x = two_rand(200, 100); //moves potransparency along its x vector
                    letters[i].y = two_rand(200, 100); //moves potransparency along its y vector
                    letters[i].width = 14 + rand;
                    letters[i].height = 19 + rand;
                    letters[i].blur = two_rand(3, 1);
                    if ((distance(DIAMETER / 2, DIAMETER / 2, letters[i].x, letters[i].y)) > (DIAMETER / 2) ) {
                        letters[i].movex = -letters[i].movex;
                        letters[i].movey = -letters[i].movey;
                    }
                }
            }
        }
        for (let i = 0; i < sphere_dots_count; i++) {
            context_sphere.globalAlpha = 1;
            sphere_dots[i].x -= sphere_dots[i].movex; //moves point along its x vector
            sphere_dots[i].y -= sphere_dots[i].movey; //moves point along its y vector
            if ((distance(DIAMETER / 2, DIAMETER / 2, sphere_dots[i].x, sphere_dots[i].y)) > (DIAMETER / 2) ) { //if the point was outside the sheet by x
                sphere_dots[i].movex = -sphere_dots[i].movex;
                sphere_dots[i].movey = -sphere_dots[i].movey; //change x vector
            }

        }
        draw();
    }
    setInterval(move, 50);
    function Drawer(x, y, width, height, movex, movey, img, transparency, parity, transparency_change, blur) { //drawer of shapes
        this.width = width;
        this.height = height;
        this.x = x; //coordinate by x
        this.y = y; //coordinate bu y
        this.movex = movex; //x vector
        this.movey = movey; //y vector
        this.img = img; //y vector
        this.transparency = transparency; //y vector
        this.parity = parity;
        this.transparency_change = transparency_change;//y vector
        this.blur = blur;
        this.blur_img = function () {
            context_sphere.beginPath();
            context_sphere.filter = 'blur(' + this.blur + 'px)';
            context_sphere.globalAlpha = this.transparency;
            context_sphere.drawImage(this.img, this.x, this.y, this.width, this.height);
            context_sphere.filter = 'blur(0px)';
            context_sphere.closePath();
        };
        this.normal_img = function () {
            context_sphere.beginPath();
            context_sphere.globalAlpha = this.transparency;
            context_sphere.drawImage(this.img, this.x, this.y, this.width, this.height);
            context_sphere.closePath();
        };
        this.draw_dot = function () {
            context_sphere.fillStyle = 'white';
            context_sphere.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    init(); //Constructor call
}

