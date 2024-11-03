form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let word = document.getElementById("text").value;
    word = word.split('');

    let finalWord = '';
    word.forEach(el => {
        if(!finalWord.includes(el)){
            finalWord += el
        }
    });

    result.innerText = "risultato: "+finalWord;
})