function check(el){
    for(let i = 0; word[i]==word[i+1] ; i++) {
        console.log("lettera uguale")
    }
}

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let word = document.getElementById("text").value.split('');
    let finalWord = '';
    let index = 0

    for(let i = 0; i<word.length;){
        let res = count(word[i]);
            if(res<=1){           
                finalWord += word[i];
            }else{
                finalWord += word[i] + res;
            }
            i+=res
    }
    
    result.innerText = "risultato : "+ finalWord

    function count(el){
        let count = 0;
        for (index; el == word[index]; index++) {     
            count++;
        }
        return count;
    }

})