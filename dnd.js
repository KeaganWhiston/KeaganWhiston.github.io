

function calc(){
    var party = document.getElementById("psize").value;
    var food = document.getElementById("food").value;
    var water = document.getElementById("water").value;

    var result1 = food - party;
    var result2 = water - party;

    document.getElementById("food").value = result1;
    document.getElementById("water").value = result2;

}