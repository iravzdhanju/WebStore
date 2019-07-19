// function() message {
//     alert("Your Information has been Sent..... We Will Back to You Soon!!...");
// };
// function $(message){
//     alert("Your Information has been Sent..... We Will Back to You Soon!!...");
//   } 
function clicked() {
    if (confirm('Do you want to submit?')) {
        yourformelement.submit();
    } else {
        location.replace("../index.html");
    }
}



function login() {
    alert("You Are Logged in");
    return true;
}