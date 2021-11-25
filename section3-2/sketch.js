const g = 1;     // 重力（いろいろな値を試してみましょう）
const jump = 20; // ジャンプ力（いろいろな値を試してみましょう）
const ground = 20;
const size = 20;

let x, y, vy;

function setup() {
  createCanvas(400, 400);

  x = width / 2;
  y = height - ground - size / 2;
  vy = 0;
}

function draw() {
  background(220);

  let gy = height - ground;
  line(0, gy, width, gy); // 地面の線

  ellipse(x, y, size, size);

  y += vy;


  if(y < height - ground - size / 2){ // 地面より上、つまり空中にいる
    vy += g; // 下方向に重力の影響で加速する
  }
  else{
    vy = 0;
    y = height - ground - size / 2;
  }
  if(keyIsDown("A".charCodeAt(0))){ x -= 5; }
  if(keyIsDown("D".charCodeAt(0))){ x += 5; }
}

function keyPressed(){
  if(key == " "){
  if(y >= height - ground - size / 2){
    vy = -jump;  }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
