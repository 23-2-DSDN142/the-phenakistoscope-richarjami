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

  
  var layer1 = new PLayer(bg);
  layer1.mode( RING );
  layer1.set_boundary( 250, 1000 );

  var layer2 = new PLayer(shark);
  layer2.mode( RING );
  layer2.set_boundary( 250, 1000 );

  var layer3 = new PLayer(bubbles1);
  layer3.mode( SWIRL (5));
  layer3.set_boundary( 0, 1250 );
  
  var layer4 = new PLayer(bubbles2);
  layer4.mode( SWIRL (4) );
  layer4.set_boundary( 0, 1250 );

  var layer5 = new PLayer(sign);
  layer5.mode( RING );
  layer5.set_boundary( 0, 1250 );

  
}
function bg(x, y, animation, pScope){

  fill("#43BDD9");
  circle(0,0,2000);

  fill("#2C96BF");
  circle(0,0,1350);
 
  fill("#065473");
  circle(0,0,850);
    
}


function shark(x, y, animation, pScope){
  
  scale(0.28);
  pScope.draw_image_from_sequence("shark", 0, -2900, animation.frame);

}

function bubbles1(x, y, animation, pScope){
  
  fill(255,255,255, 120-(animation.frame*150));  
  circle((animation.frame*6)*(animation.wave(4)*40),(animation.frame*2000)+100,50-animation.frame*50);

}

function bubbles2(x, y, animation, pScope){
  
  fill(255,255,255, 100-(animation.frame*150));  
  circle((animation.frame*6)*(animation.wave(4)*40),(animation.frame*2000)+300,30-animation.frame*30);

}

function sign(x, y, animation, pScope){

  scale(0.5);
  if (animation.frame < 0.08){
  pScope.draw_image("warning_sign",0,0);
  }
}
