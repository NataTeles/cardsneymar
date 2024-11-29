let musica;

function preload(){
  musica = loadSound("https://www.youtube.com/watch?v=GPJai-sekzw")
}

function setup(){
  musica.play();
  musica.loop();
}