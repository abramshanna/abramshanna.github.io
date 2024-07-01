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
  document.querySelectorAll('.filter-box').forEach(item => {
    item.addEventListener('change', filterBox)});
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

function filterBox() {
  const arrayGameDesign = document.querySelectorAll(".game-design");
  const arrayWebDesign = document.querySelectorAll(".web-design");
  const arrayGraphicDesign = document.querySelectorAll(".graphic-design");
  const arrayUIDesign = document.querySelectorAll(".ui-design");
  const arrayAll = document.querySelectorAll(".ui-design , .game-design , .web-design , .graphic-design");

  if (this.id != 'show-all') {
    if (document.getElementById("show-all").checked) {
      document.getElementById("show-all").checked = false;
      arrayAll.forEach(item => {item.classList.toggle("d-none");})
    }
  
    if (this.id == 'game-design') {
      arrayGameDesign.forEach(item => {item.classList.toggle("d-none");})
      console.log (this.id);
    }
  
    if (this.id == 'web-design') {
      arrayWebDesign.forEach(item => {item.classList.toggle("d-none");})
      console.log (this.id);
    }
  
    if (this.id == 'graphic-design') {
      arrayGraphicDesign.forEach(item => {item.classList.toggle("d-none");})
      console.log (this.id);
    }
  
    if (this.id == 'ui-design') {
      arrayUIDesign.forEach(item => {item.classList.toggle("d-none");})
      console.log (this.id);
    }
  }

  else if (document.getElementById("show-all").checked)  {
      document.getElementById("game-design").checked = false;
      document.getElementById("web-design").checked = false;
      document.getElementById("graphic-design").checked = false;
      document.getElementById("ui-design").checked = false;
      
      arrayAll.forEach(item => {if (item.classList.contains("d-none")){item.classList.toggle("d-none");}})
    
  }

  else {
    arrayAll.forEach(item => {item.classList.toggle("d-none");})
  }
}