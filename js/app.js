const numone = document.querySelector(".number_text");
const click = document.querySelector(".click");
const deletebtn = document.querySelector(".delete");
const audio = document.querySelector(".audio");



let value = 0
function clickplus() {
    if (value === 9 || value === 90 || value === 900) {
        audio.play()
    }
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
    if (value > 100 && value <= 1000) {
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



// codewarsdan masala yuq sababi oldin uqigan joyimda ishlatgan edi hozir 
// ishliman desam 6-7 kiyudan beryabdi ishlay olmayabman

// 1#

// function removeChar(str){
//     let remove = str.length
//     var newstr = str.substr(1,str.length-2)
//     console.log(str);

// }

//   removeChar("sardor")


// 2#
// function positiveSum(arr) {
//   let mus = 0


// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0){
//         mus += arr[i]
//     }
// }

//   console.log(mus);

// }

// positiveSum([1,2,-3,-4])




// 3#
// function findSmallestInt(arr) {
//     let min = arr[0]
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }


//     return min;
// }

// findSmallestInt([367,6768,2]);


// 4#
// function countSheeps(sheep) {
//     let sum = 0
//     for(let i = 0; i < sheep.length; i++){
//         if(sheep[i] == true){
//             min++
//         }
//     }

//     return min;
// }

// countSheeps([true,false,true,true])


// 5#

// function greet(name){
//   return `Hello, ${name} how are you doing today?`
// }

// greet("Dilshod")