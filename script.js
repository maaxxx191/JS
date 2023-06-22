function pullDown() {
  const pullDownButton = document.getElementById("lists");
  const pullDownParents = document.getElementById("pull-down");
  const pullDounChild = document.querySelectorAll(".pull-down-list");
  const currentList = document.getElementById("current-list");

  pullDounChild.forEach(function(list) {
    list.addEventListener("click", function() {
      const value = list.innerHTML;
      console.log(value);
      currentList.innerHTML = value;
      if (value == "リスト2")
      window.location.href = 'https://hanshintigers.jp/'; 
    });
  });
    
  pullDownButton.addEventListener('mouseover', function() {
    this.setAttribute("style", "background-color:blue;");
  });

  pullDownButton.addEventListener('mouseout', function(){
    this.removeAttribute("style");
  });

  pullDownButton.addEventListener('click', function(){
    if (pullDownParents.getAttribute("style") == "display:block;"){
      pullDownParents.removeAttribute("style", "display:block;");
      console.log("非表示");
   } else {
    pullDownParents.setAttribute("style", "display:block;");
    console.log ("表示");
   }
  });  
}
window.addEventListener('load', pullDown);
