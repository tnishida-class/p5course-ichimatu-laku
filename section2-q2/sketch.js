// チェッカー
function setup() {
  createCanvas(500, 500);
  // let size = width / 8;
  // noStroke();
  // for(let i = 0; i < 8; i++){
  //   for(let j = 0; j < 8; j++){
  //     BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
  //   }
  // }
  // const gray = color(200);
  noStroke();
  let size = width / 8;
  for(let i =0; i<8; i++){
    for(let j =0; j<8; j++){
      if((i+j) % 2 == 1){
       fill(170);
       rect(i*size, j*size, size,size);
       if(j<3){
       fill(255,0,0);
       circle(i*size+30, j*size+30, size-4);
}
       if(j>4){
         fill(0);
         circle(i*size+30, j*size+30, size-4);
       }
}
      else {
        fill(255);
        rect(i*size, j*size, size,size);
      }

      }
    }

  }
