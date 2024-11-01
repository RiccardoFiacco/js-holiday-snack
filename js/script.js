

//first snack

const firstForm = document.getElementById("first-snack-form");

firstForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const arrWord = document.getElementById("input-first-snack").value.toLowerCase().split('');
    console.log(arrWord)
    const newArr = arrWord.map((letter)=>{
        if(letter== 'a'|| letter== 'e' || letter== 'i'|| letter== 'o'|| letter== 'u'){
            letter = letter+'f'+letter
            console.log(letter)
        }
        return letter
    })
    newArr.concat();
    
})
