

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
    var water = document.getElementById("water").value;

    var result1 = food - (party/2);
    if (result1 < 0 && water < 0){
        document.getElementById("message").textContent = "You are out of food! You are out of water!";

    } else if (result1 < 0) {
        document.getElementById("message").textContent = "You are out of food!";
    } else {
        document.getElementById("message").textContent = "";
    }

    document.getElementById("food").value = result1;
}



function calcWater(){
    var party = document.getElementById("psize").value;
    var food = document.getElementById("food").value;
    var water = document.getElementById("water").value;
    var result2 = water - party;
    if (food < 0 && result2 < 0){
        document.getElementById("message").textContent = "You are out of food! You are out of water!";

    } else if (result2 < 0) {
        document.getElementById("message").textContent = "You are out of water!";
    } else {
        document.getElementById("message").textContent = "";
    }
    document.getElementById("water").value = result2;

}

function incrementFood() {
    var foodInput = document.getElementById("food");
    var currentValue = parseFloat(foodInput.value);
    foodInput.value = (currentValue + 0.5).toFixed(1);
}

function decrementFood() {
    var foodInput = document.getElementById("food");
    var currentValue = parseFloat(foodInput.value);
    foodInput.value = (currentValue - 0.5).toFixed(1);
}
function incrementWater() {
    var waterInput = document.getElementById("water").value;
    var change = parseInt(waterInput) + 1;
    document.getElementById("water").value = change;
}

function decrementWater() {
    var waterInput = document.getElementById("water").value;
    var change = parseInt(waterInput) - 1;
    document.getElementById("water").value = change;
}