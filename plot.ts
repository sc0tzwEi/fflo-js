function plotCurrentCells() {
    let inc = 2.0/256.0;
    let r : number = 0;
    let g : number = 0;
    let b : number = 0;
    let m : number = 0;
    for (let col = 0; col < global_cols; col++) {
        for (let row = 0; row < global_rows; row++) {
            r = float_to_integer(red_layer[col * global_rows + row]);
            g = float_to_integer(green_layer[col * global_rows + row]);
            b = float_to_integer(blue_layer[col * global_rows + row]);
            if (pen) {
                if (!monochrome) {
                    pen.fillStyle = color_string(r,g,b);
                } else {
                    m = Math.floor((r + g + b)/2);
                    pen.fillStyle = color_string(m,m,m);
                }
                pen.beginPath();
                pen.rect(col*pixel_width, row*pixel_height, pixel_width, pixel_height);
                pen.fill(); 
            }
        }

    }
}

function float_to_integer(x : number) : number {
    return Math.floor(x/inc + 1) + 127;
}
function color_string(r : number, g : number, b : number) {
    return `rgb(${r},${g},${b})`;
}