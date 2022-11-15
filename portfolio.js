
// document.getElementById('modalBtn').addEventListener('click',
// function(){
// document.querySelector('.modal').style.display = "flex";
// });

var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("modal");
var btn = document.getElementById("modalBtn");

btn.onclick = function() {
  modal.style.display = "flex";
}

span.onclick = function() {
  modal.style.display = "none";
}

function revealMessage() {
  document.getElementById("hiddenMessage").style.display = 'block';
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function revealProjects() {
  document.getElementById("hiddenProject").style.display = 'block';
}




