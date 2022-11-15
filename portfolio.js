
document.getElementById('modalBtn').addEventListener('click',
function(){
document.querySelector('.modal').style.display = "flex";
});

// document.getElementById('close').addEventListener('click',
// function(){
// document.querySelector('.modal').style.display = "none";
// });
// var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("modal");

// btn.onclick = function() {
//   modal.style.display = "block";
// }

span.onclick = function() {
  modal.style.display = "none";
}
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

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




