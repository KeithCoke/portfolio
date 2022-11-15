document.getElementById('modalBtn').addEventListener('click',
function(){
document.querySelector('.modal-container').style.display = "flex";
});

document.getElementById('closeBtn').addEventListener('click',
function(){
document.querySelector('.modal-container').style.display = "none";
});


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




