const numone = document.querySelector(".number_text")
const click = document.querySelector(".click")
const deletebtn = document.querySelector(".delete")


let value = 0
function clickplus() {
    if (value < 10) {
        value++
    } else if (value < 100) {
        value += 10
    } else if (value < 1000) {
        value += 100
    } else {
        return null
    }
    numone.innerHTML = value
};

function dilete() {
    if (value >100 && value <= 1000) {
        value -= 100;  
    } else if (value >= 11 && value <= 100) {
        value -= 10; 
    } else if (value >= 1 && value <= 10) {
        value -= 1; 
    } else {
        return null;
    }
    numone.innerHTML = value;
}

