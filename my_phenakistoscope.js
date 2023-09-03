const SLICE_COUNT = 16;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  stroke(66, 175, 205);
  strokeWeight(0);
  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  
  var layer1 = new PLayer(faces);
  layer1.mode( SWIRL(1) );
  layer1.set_boundary( 250, 1000 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 250 );

  
  
}




function faces(x, y, animation, pScope){
  
  strokeWeight(10);
  scale(animation.frame*2);

  fill(255);
  //ellipse(0,0,50,50); // draw head

  stroke(255);
  strokeWeight(3);
  line(0,0,0,500);
 

}




function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  strokeWeight(0);
  fill(66, 205, 175)
  arc(x,y+10,500,500,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
  //circle(0,0,600);


  fill(255)
  circle(-10,-100-animation.wave()*135,20,20) // .wave is a cosine wave btw

}
