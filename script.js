let ctx = document.getElementById("universe").getContext("2d");

const atom = (x, y, c) => {
    ctx.fillStyle = c;
    ctx.fillRect(x, y, 3, 3);
}

for (let y = 0; y < 1000; y++){
    for (let x = 0; x < 2000; x++){
        let dx = (x - 1000) / 100000 - 0.233;
        let dy = (y - 500) / 100000 - 0.655;

        let a = dx;
        let b = dy;

        for (let t = 1; t < 2000; t++){
            let d = (a * a) - (b * b) + dx;
            b = 2 * (a * b) + dy;
            a = d;
            H = d > 200;

            if(H){
                atom(x, y, `rgb(${t * 1}, ${t}, ${t * 0.5})`);
                break;
            }
        }
    }

}