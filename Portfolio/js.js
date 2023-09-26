/* Begin Copyright Oxy 2022 © */

document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('#button-menu').addEventListener('click', buttonMenu);
});

/* End Copyright Oxy 2022 © */

function buttonMenu() {
  var menu = document.getElementById("menu");
  var body = document.querySelector("body");
  var bar1 = document.getElementById("bar1");
  var bar2 = document.getElementById("bar2");

  bar1.classList.toggle("change-bar1");
  bar2.classList.toggle("change-bar2");
  

  if (menu.classList.contains("menu-open")){
    menu.classList.remove("menu-open");
    body.classList.remove("disable-scroll");
  }
  else {
    menu.classList.add("menu-open");
    body.classList.add("disable-scroll");
  }
}
