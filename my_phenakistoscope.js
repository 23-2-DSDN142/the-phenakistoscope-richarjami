const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("warning_sign" , "png");
  pScope.load_image_sequence("shark" , "png", 12);
}

function setup_layers(pScope){

  stroke(127, 204, 219);
  strokeWeight(0);
  new PLayer(null, "#43BDD9");  //lets us draw the whole circle background, ignoring the boundaries

  
  var layer1 = new PLayer(shark);
  layer1.mode( RING );
  layer1.set_boundary( 250, 1000 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 250, 1000 );

  var layer4 = new PLayer(bubbles);
  layer4.mode( SWIRL(3) );
  layer4.set_boundary( 0, 1250 );

  var layer3 = new PLayer(sign);
  layer3.mode( RING );
  layer3.set_boundary( 0, 1250 );

  
  
}
function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill("#2C96BF");
  circle(0,0,1350)
 
  fill("#065473 ");
  circle(0,0,850)
}


function shark(x, y, animation, pScope){
  
  scale(0.28);

  
  pScope.draw_image_from_sequence("shark", 0, -2900, animation.frame);


}

function bubbles(x, y, animation, pScope){
  
  fill(255,255,255,100);  
  circle(0,0-animation.wave()*50,20);

}

function sign(x, y, animation, pScope){

  scale(0.5);
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = 'black';


  if (animation.frame < 0.08){
  pScope.draw_image("warning_sign",0,0);
  }
}
