const card1 = document.getElementsByClassName("card-car")[0];
const card2 = document.getElementsByClassName("card-car")[1];
const card3 = document.getElementsByClassName("card-car")[2];

let result;

function effectOn(choice) {
    result = choice === 0 ? card1 :
            choice === 1 ? card2 :
            card3;

    result.style.position = "relative";
    result.style.top = "-15px";
    result.style.boxShadow = "0px 15px 40px rgba(255, 255, 255, 0.3)";
    result.style.transition = "0.5s ease";
    result.style.backgroundColor = "#00b9ff";
}

function effectOff() {
    result.style.scale = "1.0";
    result.style.top = "0px";
    result.style.left = "0px";
    result.style.boxShadow = "6px 6px 6px rgba(0, 0, 0, 0.1)";
    result.style.backgroundColor = "#000000";
    console.log(result);
}

