var x = 320;
var y = 150;
function right(){
 if(x==630){
		document.getElementById('esas').style.borderRightColor='yellow';
	}
else{
		document.getElementById('esas').style.borderLeftColor='red';
}
	if(x!=630){
	x+=10;
	document.getElementById('smile').style.marginLeft= x + 'px';
	}

}
function left(){
 if(x==0){
		document.getElementById('esas').style.borderLeftColor='yellow';
}
else {
		document.getElementById('esas').style.borderRightColor='red';
}

	if(x!=0){
		x-=10;
	document.getElementById('smile').style.marginLeft= x + 'px';
}	

}
function up(){
	if(y==0){
		document.getElementById('esas').style.borderTopColor='yellow';
	}
	else{
		document.getElementById('esas').style.borderBottomColor='red';
	}
	if(y!=0){
	y-=10;
	document.getElementById('smile').style.marginTop= y + 'px';
}
}
function down(){
	if(y==280){
		document.getElementById('esas').style.borderBottomColor='yellow';
	}
	else{
		document.getElementById('esas').style.borderTopColor='red';
	}
	if(y!=280){
	y+=5;
	document.getElementById('smile').style.marginTop= y + 'px';
}
}
function solu(){
	right();
	up();
}
function sagu(){
	left();
	up();
}
function sola(){
	right();
	down();
}
function saga(){
	left();
	down();
}
function circle(){
	document.getElementById('smile').style.marginLeft= 320 + 'px';
	document.getElementById('smile').style.marginTop= 150 + 'px';
}

document.addEventListener('keydown', (e) => {
  if (e.code === "KeyW"){
  	up()
  }
});
document.addEventListener('keydown', (e) => {
  if (e.code === "KeyS"){
  	down()
  }
});
document.addEventListener('keydown', (e) => {
  if (e.code === "KeyD"){
	right()
  }
});
document.addEventListener('keydown', (e) => {
  if (e.code === "KeyA"){
  	left()
}

});
//with arrows
document.addEventListener('keydown', (e) => {
  if (e.code === "ArrowUp"){
  	up()
  }
});
document.addEventListener('keydown', (e) => {
  if (e.code === "ArrowDown"){
  	down()
  }
});
document.addEventListener('keydown', (e) => {
  if (e.code === "ArrowRight"){
	right()
  }
});
document.addEventListener('keydown', (e) => {
  if (e.code === "ArrowLeft"){
  	left()
}

});
document.addEventListener('keydown', (e) => {
  if (e.code === "KeyG"){
  	circle();
  	}
});
