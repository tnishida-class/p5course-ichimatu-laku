// 小手調べ
function setup(){

  for(let i = 0; i < 11; i++){
    noFill();
    stroke(0,0,255);
    ellipse(50, 50, i*10);
    if(i>5){
      stroke(255,0,0);
      ellipse(50, 50, i*10);
    }

  }
}
