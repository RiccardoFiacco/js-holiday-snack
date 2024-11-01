

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
