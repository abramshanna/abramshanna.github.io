/* Begin Copyright Oxy 2022 © */

document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('#button-menu').addEventListener('click', buttonMenu);
  document.querySelectorAll('.button-collapsible').forEach(item => {
    item.addEventListener('click', buttonCollapsible)
  });
  document.querySelectorAll('.modal-img').forEach(item => {
    item.addEventListener('click', openModal)
  });
  document.querySelectorAll('.button-modal').forEach(item => {
    item.addEventListener('click', closeModal)
  });
  document.querySelectorAll('.modal').forEach(item => {
    item.addEventListener('click', modalCloseModal)
  });
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

function buttonCollapsible() {
  this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
}

function openModal(){
  var content = this.nextElementSibling;
  content.style.display = 'block';
}

function closeModal(){
  var modal = this.parentElement.parentElement;
  modal.style.display = 'none';
}

function modalCloseModal(){
  this.style.display = 'none';
}