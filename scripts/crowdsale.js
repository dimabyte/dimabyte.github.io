const a = [];
function two_rand(max, min) {
    return Math.floor(Math.random() * (max - min)) + min
}
function init() {
    sheet = new Drawer(0, 0, document.documentElement.clientWidth, $('.main').height(), '#dde3e9', 1, 1, 1);
    for(var i = 0; i < 90; i++){
        a.push(new Drawer(
            two_rand(sheet.width, -1),
            two_rand(sheet.height, -1),
            2, 2, '#93999f',
            two_rand(3, -3),
            two_rand(3, -3),
        ))

    }
    canvas = document.getElementById("crowd_canvas");
    canvas.width = sheet.width;
    canvas.height = sheet.height;
    context = canvas.getContext("2d");
}
function resize() {
    sheet.width = document.documentElement.clientWidth;
    sheet.height = $('.main').height();
    canvas.width = sheet.width;
    canvas.height = sheet.height;
}
function draw() {
    sheet.draw();
    for(var c = 0; c < 90; c++){
        a[c].draw();
    }


}
setInterval(move, 50);
function move() {
    for(var i = 0; i < 90; i++){
        a[i].x -= a[i].movex;
        a[i].y -= a[i].movey;
        if(a[i].x < 0 || a[i].x > sheet.width){
            a[i].movex = -a[i].movex;
        }
        if(a[i].y < 0 || a[i].y > sheet.height){
            a[i].movey = -a[i].movey;
        }
    }
    let j = 90;
    draw();
    for(var h = 0; h < j; h++){
        let k = j - 1;
        while (k !== h){
            if(Math.pow(Math.pow(a[k].x - a[h].x, 2) + Math.pow(a[k].y - a[h].y, 2) ,0.5) < 100){
                context.beginPath();
                context.moveTo(a[k].x + 1, a[k].y + 1);
                context.lineTo(a[h].x + 1, a[h].y + 1);
                context.lineWidth = 1; // толщина линии
                context.strokeStyle = "#c0c6cc"; // цвет линии
                context.stroke();
            }
            k -= 1
        }
    }

}
function Drawer(x, y, width, height, color,movex, movey) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.movex = movex;
    this.movey = movey;
    this.color = color;
    this.draw = function () {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    };
}


(function(){
    var time;
    window.onresize = function(e){
        if (time)
            clearTimeout(time);
        time = setTimeout(function(){
            resize(e);
        },1);
    }
})();

