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
  $(".cart-overlay").style.display = "block";
}
function closecart() {
  $('#mycarts').style.display = "none";
  $(".cart-overlay").style.display = "none";
}


function authenticate_login() {
  var v1, v2;
  v1 = document.getElementById("user").Value;
  v2 = document.getElementById("pwd").Value;
  if (v1 == "admin" && v2 == "12345") {
    alert('Welcome to the website');
    parent.location.href = "./index.html";
  }
  else {
    document.getElementById("user").value = "";
    document.getElementById("pwd").value = "";
    document.getElementById("user").focus();

  }
}