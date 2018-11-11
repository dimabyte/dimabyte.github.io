function drawing_dots() {
    function distance(x1, y1, x2, y2) {
        return Math.pow(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2), 0.5)
    }
    function moving_count(x1, y1, x2, y2) {
        let i = 1;
        let j = 30;
        while (i !== 0){
            if (Math.pow(Math.pow((x1 - x2) / j, 2) + Math.pow((y1 - y2) / j, 2), 0.5) <= 8){
                i = 0;
                return [(x2 - x1) / j, (y2 - y1) / j]
            } else {
                j += 1
            }
        }
        console.log([(x2 - x1) / j, (y2 - y1) / j])
    }


    let b;
    let All_cords = [[320, 137], [397, 219], [429, 238], [404, 180], [565, 277], [585, 325], [526, 375], [617, 388], [698, 398], [868, 307], [964, 362], [1042, 376], [1086, 303], [968, 212]];
    for(let i = 0; i < 5; i++){
        b = All_cords.slice();
        All_cords = All_cords.concat(b);
    }
    let All_circles = [];
    for(let i = 0; i < All_cords.length; i++){
        All_circles.push(new Drawer_circles(
            All_cords[i][0],
            All_cords[i][1],
            0, 0,
        ))
    }
    let All_lines = [];
    for(let i = 0; i < All_cords.length - 1; i++){
        All_lines.push(new Drawer_line(
            All_cords[i][0],
            All_cords[i][1],
            All_cords[i + 1][0],
            All_cords[i + 1][1],
            All_cords[i][0], All_cords[i][1], moving_count(All_cords[i][0], All_cords[i][1], All_cords[i + 1][0], All_cords[i + 1][1])[0],
            moving_count(All_cords[i][0], All_cords[i][1], All_cords[i + 1][0], All_cords[i + 1][1])[1], 1
        ))
    }
    let Drawed_circles = [];
    Drawed_circles.push(All_circles[0]);
    let Drawed_lines = [];
    let Circle_now = 0;
    let kek = 0;




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
                if (Drawed_circles[Circle_now].c1 >= 8){
                    Circle_now += 1;
                    kek += 1;
                    Drawed_circles.push(All_circles[kek]);
                    Drawed_lines.push(All_lines[0]);
                } else {
                    Drawed_circles[Circle_now].c1 += 0.5;
                    Drawed_circles[Circle_now].c2 += 0.2
                }
            } else {
                if (Circle_now >= 4){
                    if (distance(Drawed_lines[Circle_now - 1].nowx, Drawed_lines[Circle_now - 1].nowy, Drawed_lines[Circle_now - 1].x2, Drawed_lines[Circle_now - 1].y2) <= 2
                        && Drawed_circles[Circle_now].c1 >= 8 && Drawed_lines.length <= 5){
                        console.log('3eeeeeeeeeeeeeeeeeeee');
                        kek += 1;
                        Drawed_circles.push(All_circles[kek]);
                        Drawed_lines.push(All_lines[kek - 1]);
                    } else {
                        if (Drawed_circles[Circle_now].c1 + 0.5 <= 8) {
                            Drawed_circles[Circle_now].c1 += 0.5;
                            Drawed_circles[Circle_now].c2 += 0.2;
                        }
                        if (distance(Drawed_lines[Circle_now - 1].nowx, Drawed_lines[Circle_now - 1].nowy, Drawed_lines[Circle_now - 1].x2, Drawed_lines[Circle_now - 1].y2) <= 2){
                            Drawed_lines[Circle_now - 1].yes = 0
                        } else {
                            if (Drawed_lines[Circle_now - 1].yes !== 0){
                                Drawed_lines[Circle_now - 1].nowx += Drawed_lines[Circle_now - 1].movex;
                                Drawed_lines[Circle_now - 1].nowy += Drawed_lines[Circle_now - 1].movey;
                            }
                        }
                    }
                    if (distance(Drawed_lines[0].nowx, Drawed_lines[0].nowy, Drawed_lines[0].x1, Drawed_lines[0].y1) <= 100
                        && Drawed_circles[0].c1 <= 0 && Drawed_lines.length > 4) {
                            Drawed_circles.splice(0, 1);
                            Drawed_lines.splice(0, 1);
                    } else {
                        if (Drawed_circles[0].c1 > 0){
                            Drawed_circles[0].c1 -= 0.5;
                            Drawed_circles[0].c2 -= 0.2;
                        }
                        if (distance(Drawed_lines[0].nowx, Drawed_lines[0].nowy, Drawed_lines[0].x1, Drawed_lines[0].y1) <= 2){
                            Drawed_lines[0].yes = 0
                        } else {
                            if (Drawed_lines[0].yes !== 0){
                                Drawed_lines[0].nowx -= Drawed_lines[0].movex;
                                Drawed_lines[0].nowy -= Drawed_lines[0].movey;
                            }
                        }
                    }
                } else {
                    if (distance(Drawed_lines[Circle_now - 1].nowx, Drawed_lines[Circle_now - 1].nowy, Drawed_lines[Circle_now - 1].x2, Drawed_lines[Circle_now - 1].y2) <= 2
                    && Drawed_circles[Circle_now].c1 >= 8){
                        Circle_now += 1;
                        kek += 1;
                        Drawed_circles.push(All_circles[kek]);
                        Drawed_lines.push(All_lines[kek - 1]);
                    } else {
                        if (Drawed_circles[Circle_now].c1 + 0.5 <= 8) {
                            Drawed_circles[Circle_now].c1 += 0.5;
                            Drawed_circles[Circle_now].c2 += 0.2;
                        }
                        if (distance(Drawed_lines[Circle_now - 1].nowx, Drawed_lines[Circle_now - 1].nowy, Drawed_lines[Circle_now - 1].x2, Drawed_lines[Circle_now - 1].y2) <= 2){
                            Drawed_lines[Circle_now - 1].yes = 0
                        } else {
                            if (Drawed_lines[Circle_now - 1].yes !== 0){
                                Drawed_lines[Circle_now - 1].nowx += Drawed_lines[Circle_now - 1].movex;
                                Drawed_lines[Circle_now - 1].nowy += Drawed_lines[Circle_now - 1].movey;
                            }
                        }

                    }
                }
            }
        } else {
            kek = 0
        }
        draw();
    }
    function Drawer_circles(x, y, c1, c2) {
        this.x = x;
        this.y = y;
        this.c1 = c1;
        this.c2 = c2;
        this.draw = function () {
            context.beginPath();
            context.arc(this.x, this.y, this.c1 ,0,2*Math.PI);
            context.fillStyle = 'rgb(91, 133, 172)';
            context.fill();
            context.closePath();
            context.beginPath();
            context.arc(this.x, this.y, this.c2 ,0,2*Math.PI);
            context.fillStyle = 'rgb(230, 255, 0)';
            context.fill();
            context.closePath();
        };
        this.pulse = function () {
            context.beginPath();
            context.arc(this.x, this.y, this.c1 ,0,2*Math.PI);
            context.fillStyle = 'rgb(91, 133, 172)';
            context.fill();
            context.closePath();
            context.beginPath();
            context.arc(this.x, this.y, this.c2 ,0,2*Math.PI);
            context.fillStyle = 'rgb(230, 255, 0)';
            context.fill();
            context.closePath();
        };
    }
    function Drawer_line(x1, y1, x2, y2, nowx, nowy,movex, movey, yes) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.nowx = nowx;
        this.nowy = nowy;
        this.movex = movex;
        this.movey = movey;
        this.yes = yes;
        this.draw_line = function () {
            context.beginPath();
            context.moveTo(this.x1, this.y1);
            context.lineTo(this.nowx, this.nowy);
            context.setLineDash([1, 2]);
            context.strokeStyle = 'white';
            context.lineWidth = 1;
            context.stroke();
        };

    }
    init();
}