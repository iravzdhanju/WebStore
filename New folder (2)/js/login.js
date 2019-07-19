function $(ele) {
  return document.querySelector(ele);
}

function $$(ele) {
  return document.querySelectorAll(ele);
}


function openForm() {
  $('#myForm').style.display = "block";
  $(".overlay").style.display = "block";
}
function closeForm() {
  $('#myForm').style.display = "none";
  $(".overlay").style.display = "none";
}/*
function login() {
  function clicked() {
  (location.replace('../index.html'))}
    ) {
      
      
    } else {

      location.replace("../index.html");
    }
  }
}*/
function opencart() {
  $('#mycarts').style.display = "block";
  $(".overlay").style.display = "block";
}
function closecart() {
  $('#mycarts').style.display = "none";
  $(".overlay").style.display = "none";
}