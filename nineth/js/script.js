import {isEven} from "../../script.js";

form.addEventListener("submit", (event)=>{
    event.preventDefault()
   const wordOne = document.getElementById("textOne").value.toLowerCase();
   const wordTwo = document.getElementById("textTwo").value.toLowerCase();
   let res = "";
   for(let i=0; i<wordOne.length;i++){
    for(let j=0; j< wordTwo.length; j++){
        if(wordOne[i]==wordTwo[j]){
            if(!res.includes(wordOne[i])){
                res += wordOne[i];
            }
         
        }  
    }
   }
   result.innerText = "lettere in comune: "+res;
})