body=document.querySelector("body");
function color(name){
  body.style.backgroundColor=name;
}

function random(){
  red=Math.round(Math.random()*255);
  black=Math.round(Math.random()*255);
  blue=Math.round(Math.random()*255);

  rancol=`rgb(${red},${blue},${black})`;
  body.style.backgroundColor=rancol;
}

