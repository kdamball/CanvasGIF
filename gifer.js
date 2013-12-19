var pics = ['tree1','tree2','tree3','tree4','tree5','tree6','tree7','tree8'];
var cvs = document.getElementById('svc');
var c = cvs.getContext('2d');
var i = 0;
var x = pics.length;
var forward, moonwalk;
function moveb(){
  stopIt();
  moonwalk = setInterval(function(){
    i ==-1?i=(x-1):i;
    var pika = document.getElementById(pics[i]);
    c.drawImage(pika,0,0);
    i--;
  },100);
}
function movef(){
  stopIt();
  forward = setInterval(function(){
	i ==x?i=0:i;
    var pika = document.getElementById(pics[i]);
    c.drawImage(pika,0,0);
    i++;
  },100);
}
function stopIt(){
  if (typeof forward !== function(){}){
	clearInterval(forward);
  }
  if (typeof moonwalk !== function(){}){
    clearInterval(moonwalk);
  }
}