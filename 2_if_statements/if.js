// if statement = if a condition is true, execute some code. if not, do somthing else!

// let age = 8;
// if (age >= 18) {
//     console.log('You are able to enter this site');
// }else{
//     console.log('you are not able to enter this site');
    
// }
const myText = document.getElementById('myText');
const Submit = document.getElementById('Submit');
const Result = document.getElementById('Result');
let age;
Submit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age > 80){
        Result.textContent = `You are too old to enter this website`;
    }
    else if(age >= 18){
        Result.textContent = `Great you are enter this website`;
    }
    else if (age == 0){
        Result.textContent = `You can't enter`;
    }
    else{
        Result.textContent = `You must 18+ to enter this website`;
    }
}