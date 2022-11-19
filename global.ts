let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let pen = canvas.getContext("2d");
let global_rows = 100;
let global_cols = 100;
let pixel_height  = canvas.height/global_rows;
let pixel_width   = canvas.width/global_cols;
let red_layer = new Array(global_rows*global_cols).fill(0);
let green_layer = new Array(global_rows*global_cols).fill(0);
let blue_layer = new Array(global_rows*global_cols).fill(0);
let inc = 2.0/255.0;
let red_filter = newFilter(3,3);
let green_filter = newFilter(7,7);
let blue_filter = newFilter(5,5);


