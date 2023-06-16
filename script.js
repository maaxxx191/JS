window.addEventListener('load', function(){

  const pullDownButton = document.getElementById("lists");
  
  pullDownButton.addEventListener('mouseover', function() {
    console.log("マウスオーバーされた");
  });

  pullDownButton.addEventListener('mouseout', function(){
    console.log("マウスアウトされた");
  });

  pullDownButton.addEventListener('click', function(){
    console.log("クリックした");
  });
  
});
