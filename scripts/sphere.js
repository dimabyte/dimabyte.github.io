const letters = []; // container for COUNT
const DIAMETER = 300;
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
                two_rand(DIAMETER / 4, DIAMETER/4 * 3), //coordinate by x
                two_rand(DIAMETER / 4, DIAMETER/4 * 3), //coordinate by y
                14 + rand, 19 + rand,
                two_rand(1.5, -1.5), //x vector
                two_rand(1.5, -1.5),
                document.getElementById("bitkek"),
                0, 0,
                +two_rand(0.02, 0.01).toFixed(3),
                two_rand(3, 1)
            ));
        }
        canvas = document.getElementById("pong");
        canvas.width = DIAMETER;
        canvas.height = DIAMETER;
        cankek = canvas.getContext("2d");
    }
    function draw() { //draw sheet with COUNT
        cankek.clearRect(0, 0, canvas.width, canvas.height);
        for (let c = 0; c < 5; c++) {
            letters[c].blur_img()
        }
        for (let c = 5; c < COUNT; c++) {
            letters[c].normal_img()
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
                    letters[i].x = two_rand(DIAMETER / 4, DIAMETER/4 * 3); //moves potransparency along its x vector
                    letters[i].y = two_rand(DIAMETER / 4, DIAMETER/4 * 3); //moves potransparency along its y vector
                    letters[i].width = 14 + rand;
                    letters[i].height = 19 + rand;
                    letters[i].blur = two_rand(3, 1);
                    if ((distance(DIAMETER / 2, DIAMETER / 2, letters[i].x, letters[i].y) + 20) > (DIAMETER / 2) ) {
                        letters[i].movex = -letters[i].movex;
                        letters[i].movey = -letters[i].movey;
                    }
                }
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
            cankek.beginPath();
            cankek.filter = 'blur(' + this.blur + 'px)';
            cankek.globalAlpha = this.transparency;
            cankek.drawImage(this.img, this.x, this.y, this.width, this.height);
            cankek.filter = 'blur(0px)';
            cankek.closePath();
        };
        this.normal_img = function () {
            cankek.beginPath();
            cankek.globalAlpha = this.transparency;
            cankek.drawImage(this.img, this.x, this.y, this.width, this.height);
            cankek.closePath();
        }
    }
    init(); //Constructor call
}

