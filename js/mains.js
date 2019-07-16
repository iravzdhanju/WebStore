/*function myFunction() {
    document.getElementById("index.html").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("");
    filter = input.value.toUpperCase();
    div = document.getElementById("");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  } 
 
var NS4 = (document.layers);    
var IE4 = (document.all);
var win = window;    
var n   = 0;
function findInPage(str) {
  var txt, i, found;
  if (str == "")
    return false;
  if (NS4) {
    if (!win.find(str))
      while(win.find(str, false, true))
        n++;
    else
      n++;
    if (n == 0)
      alert("Not found.");
  }
  if (IE4) {
    txt = win.document.body.createTextRange();
    for (i = 0; i <= n && (found = txt.findText(str)) != false; i++) {
      txt.moveStart("character", 1);
      txt.moveEnd("textedit");
    }
    if (found) {
      txt.moveStart("character", -1);
      txt.findText(str);
      txt.select();
      txt.scrollIntoView();
      n++;
    }
    else {
      if (n > 0) {
        n = 0;
        findInPage(str);
      }
      else
        alert("Sorry, we couldn't find.Try again");
   }
  }
  return false;
}
function link() {
  var link_s = document.getElementById('searc').value;
  document.getElementById('dropbtn').innerHTML = link_s.link()*/
//   document.getElementById('link').osubmit = function()
// {
//     location.href = document.getElementById('link_id').value;
// };

// console.log('hi');

/*LoginPage*/
// $(document).ready(function()
// {
//  $("#show_login").click(function(){
//   showpopup();
//  });
//  $("#close_login").click(function(){
//   hidepopup();
//  });
// });

// function showpopup()
// {
//  $("#loginform").fadeIn();
//  $("#loginform").css({"visibility":"visible","display":"block"});
// }

// function hidepopup()
// {
//  $("#loginform").fadeOut();
//  $("#loginform").css({"visibility":"hidden","display":"none"});
// }
// let button = document.querySelector('.dropbtn');
// let products = document.querySelectorAll('.product-bottom');
/*Login-Page*/

function $(ele){
  return document.querySelector(ele);
} 

let btn = $('.searchBtn');
let products = document.querySelectorAll('.col-md-3 .product-bottom');
let searchInput = $('.searc');

searchInput.onkeyup = function () {
  products.forEach(function(item) {
    if(item.innerText.toUpperCase().includes(searchInput.value.toUpperCase())){
      item.parentElement.style.display = '';
    }else{
      item.parentElement.style.display = 'none';
    }
  });
};

