today = new Date();

var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = "Today is: "+ mm + '/' + dd + '/' + yyyy;

document.getElementById("date").innerHTML = today;

console.log(today);

function myFunction() {
    alert("Hello! I am an alert box!");
  }