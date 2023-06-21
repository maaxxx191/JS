window.addEventListener('load', function(){

  const pullDownButton = document.getElementById("lists");
  
  pullDownButton.addEventListener('mouseover', function() {
    pullDownButton.setAttribute("style", "background-color:blue;");
  });

  pullDownButton.addEventListener('mouseout', function(){
    pullDownButton.removeAttribute("style");
  });

  pullDownButton.addEventListener('click', function(){
    pullDownButton.setAttribute("style", "background-color:green;");
  });
  
});
