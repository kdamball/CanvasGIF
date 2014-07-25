(function(){
  var pics = ['tree1','tree2','tree3','tree4','tree5','tree6','tree7','tree8'],
    cvs = document.getElementById('svc'),
    c = cvs.getContext('2d'),
    i = 0,
    len = pics.length,
    movef, moveb, stopIt, moving,
    front = document.getElementById("front"),
    back = document.getElementById("back"),
    pause = document.getElementById("pause");
    
  moveb = function (){
    stopIt();
    moving = setInterval(function(){
      i ==-1 || i==len ? i=(len-1) : i; //Check for both -1 and 8 because 'i' keeps it's value from 'movef' and vice-versa below
      var pika = document.getElementById(pics[i]);
      c.drawImage(pika,0,0);
      i--;
    },1000/8);
  }
  
  movef = function(){
    stopIt();
    moving = setInterval(function(){
      i==len || i==-1 ? i=0 : i;
      var pika = document.getElementById(pics[i]);
      c.drawImage(pika,0,0);
      i++;
    },1000/8);
  }
  
  stopIt = function(){
      clearInterval(moving);
  };
  
  front.addEventListener("click", movef, false);
  back.addEventListener("click", moveb, false);
  pause.addEventListener("click", stopIt, false);
  
})();
