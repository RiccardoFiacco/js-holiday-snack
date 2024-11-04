form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const arrWord = document.getElementById("text").value.toLowerCase().split('');

    const newArr = arrWord.map((letter)=>{
        if(letter== 'a'|| letter== 'e' || letter== 'i'|| letter== 'o'|| letter== 'u'){
            letter = letter+'f'+letter
        }
        return letter
    })
    const print = newArr.join('');
    result.innerText = print;
})