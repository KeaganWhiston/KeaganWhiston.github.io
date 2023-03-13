

function calcFull(){
    var party = document.getElementById("psize").value;
    var food = document.getElementById("food").value;
    var water = document.getElementById("water").value;

    var result1 = food - party;
    var result2 = water - party;
    if (result1 < 0 && result2 < 0){
        document.getElementById("message").textContent = "You are out of food! You are out of water!";

    } else if (result1 < 0) {
        document.getElementById("message").textContent = "You are out of food!";
    } else if (result2 < 0) {
        document.getElementById("message").textContent = "You are out of water!";
    } else {
        document.getElementById("message").textContent = "";
    }

    document.getElementById("food").value = result1;
    document.getElementById("water").value = result2;

}

function calcHalf(){
    var party = document.getElementById("psize").value;
    var food = document.getElementById("food").value;

    var result = food - (party/2);
    if (result < 0) {
        document.getElementById("message").textContent = "You are out of food!";
    } else {
        document.getElementById("message").textContent = "";
    }

    document.getElementById("food").value = result;
}



function calcWater(){
    var party = document.getElementById("psize").value;
    var water = document.getElementById("water").value;
    var result = water - party;
    if (result < 0) {
        document.getElementById("message").textContent = "You are out of water!";
    } else {
        document.getElementById("message").textContent = "";
    }
    document.getElementById("water").value = result;

}