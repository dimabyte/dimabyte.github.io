function drawing_dots() {
    let b;
    let All_cords = [[320, 137], [397, 219], [429, 238], [404, 180], [565, 277], [585, 325], [526, 375], [617, 388], [698, 398], [868, 307], [964, 362], [1042, 376], [1086, 303], [968, 212]];
    for(let i = 0; i < 6; i++){
        b = All_cords.slice();
        All_cords = All_cords.concat(b);
    }
    console.log(All_cords);
    let All_circles = [];
    for(let i = 0; i < All_cords.length; i++){
        All_circles.push(new Drawer_circles(
            All_cords[i][0],
            All_cords[i][1],
            0,
        ))
    }
    let All_lines = [];
    for(let i = 0; i < All_cords.length - 1; i++){
        All_lines.push(new Drawer_line(
            All_cords[i][0],
            All_cords[i][1],
            All_cords[i + 1][0],
            All_cords[i + 1][1],
            0,
        ))
    }
    let Drawed_circles = [];
    Drawed_circles.push(All_circles[0]);
    let Drawed_lines = [];
    let Circle_now = 0;
    let kek = 0;
    let lul = 0;




    function init() {
        canvas = document.getElementById("pong");
        canvas.width = 1920;
        canvas.height = 424;
        context = canvas.getContext("2d");
        setInterval(move, 50)
    }
    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for(let i = 0; i < Drawed_circles.length; i++){
            Drawed_circles[i].draw()
        }
        for(let i = 0; i < Drawed_lines.length; i++){
            Drawed_lines[i].draw_line()
        }

    }

    function move() {
        if (kek < All_circles.length - 1){
            if (Circle_now === 0){
                if (Drawed_circles[Circle_now].alpha >= 0.96){
                    Circle_now += 1;
                    kek += 1;
                    Drawed_circles.push(All_circles[kek]);
                    Drawed_lines.push(All_lines[0]);
                } else {
                    Drawed_circles[Circle_now].alpha += 0.04
                }
            } else {
                if (Drawed_circles.length > 5){
                    if (Drawed_circles[0].alpha <= 0.04) {
                        Drawed_circles.splice(0, 1);
                        Drawed_lines.splice(0, 1);
                        Circle_now = 4;
                    } else {
                        Drawed_circles[0].alpha -= 0.04;
                        Drawed_lines[0].alpha -= 0.04;
                    }
                } else {
                    if (Drawed_circles[Circle_now].alpha >= 0.96){
                        if (Circle_now < 5){
                            Circle_now += 1;
                        } else {
                            Circle_now = 4

                        }
                        kek += 1;
                        Drawed_circles.push(All_circles[kek]);
                        Drawed_lines.push(All_lines[kek- 1]);
                    } else {
                        Drawed_circles[Circle_now].alpha += 0.04;
                        Drawed_lines[Circle_now - 1].alpha += 0.04;
                    }
                }
            }
        } else {
            kek = 0
        }
        draw();
    }
    function Drawer_circles(x, y, alpha) {
        this.x = x;
        this.y = y;
        this.alpha = alpha;
        this.draw = function () {
            if (this.alpha > 1){
                this.alpha = 1;
            }
            context.beginPath();
            context.arc(this.x, this.y, 8 ,0,2*Math.PI);
            context.fillStyle = 'rgba(91, 133, 172, '+ this.alpha +')';
            context.fill();
            context.closePath();
            context.beginPath();
            context.arc(this.x, this.y, 3 ,0,2*Math.PI);
            context.fillStyle = 'rgba(230, 255, 0, '+ this.alpha +')';
            context.fill();
            context.closePath();
        };
    }
    function Drawer_line(x1, y1, x2, y2, alpha) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.alpha = alpha;
        this.draw_line = function () {
            if (this.alpha > 1){
                this.alpha = 1;
            }
            context.beginPath();
            context.moveTo(this.x1, this.y1);
            context.lineTo(this.x2, this.y2);
            context.setLineDash([1, 2]);
            context.strokeStyle = 'rgba(255, 255, 255, '+ this.alpha +')';
            context.lineWidth = 1;
            context.stroke();
        };
    }
    init();
}