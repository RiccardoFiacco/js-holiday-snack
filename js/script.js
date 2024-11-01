

//first snack

const firstForm = document.getElementById("first-snack-form");

firstForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const arrWord = document.getElementById("input-first-snack").value.toLowerCase().split('');

    const newArr = arrWord.map((letter)=>{
        if(letter== 'a'|| letter== 'e' || letter== 'i'|| letter== 'o'|| letter== 'u'){
            letter = letter+'f'+letter
        }
        return letter
    })
    const print = newArr.join('');

    const displayFirst = document.getElementById("result-first-snack");
    displayFirst.innerText = print;
})


//secondSnack

const secondForm = document.getElementById("second-snack-form");
secondForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const word = document.getElementById("input-second-snack").value.toLowerCase();
    const start = parseInt(document.getElementById("start-second-snack").value);
    const end = parseInt(document.getElementById("end-second-snack").value);
    const result = (word.split('').slice(start, end+1)).join('');
    const displaySecond  = document.getElementById("result-second-snack");
    displaySecond.innerText = result;
})


//third snack

const thirdForm = document.getElementById("third-snack-form");
const arrThirdSnack = [];

insertThirdSnack.addEventListener("click", (event)=>{
    event.preventDefault();
    const num = parseInt(document.getElementById("input-third-snack").value);
    arrThirdSnack.push(num);
    console.log(arrThirdSnack)
})