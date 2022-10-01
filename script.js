let ctx = document.getElementById("universe").getContext("2d");

const atom = (x, y, c) => {
    ctx.fillStyle = c;
    ctx.fillRect(x, y, 3, 3);
}

function draw(zoomX) {
    for (let y = 0; y < 1000; y++){
        for (let x = 0; x < 2000; x++){
            let dx = (x - 1000) / 100000 - zoomX;
            let dy = (y - 500) / 100000 - (zoomX * 2.8111587982832618025751072961373);
    
            let a = dx;
            let b = dy;
    
            for (let t = 1; t < 2000; t++){
                let d = (a * a) - (b * b) + dx;
                b = 2 * (a * b) + dy;
                a = d;
                H = d > 200;
    
                if(H){
                    atom(x, y, `rgb(${t * 3}, ${t}, ${t * 0.5})`);
                    break;
                }
            }
        }
    
    }
}
draw(0.233);


let input = document.getElementById("input");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
    let zoomValue = Number(input.value);
    ctx.clearRect(0, 0, 2000, 1000);
    draw(zoomValue / 100)
})