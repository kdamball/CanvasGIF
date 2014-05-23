(function(){
  var pics = ['tree1','tree2','tree3','tree4','tree5','tree6','tree7','tree8'];
  var cvs = document.getElementById('svc');
  var c = cvs.getContext('2d');
  var i = 0;
  var x = pics.length;
  var forward, moonwalk,
    front = document.getElementById("front"),
    back = document.getElementById("back"),
    pause = document.getElementById("pause");

  var moveFwd = function(){
    var pika = document.getElementById(pics[i]);
    c.drawImage(pika);
    i++;
  }
  
  front.addEventListener("click", movef, false);
  back.addEventListener("click", moveb, false);
  pause.addEventListener("click", stopIt, false);
  
})();
