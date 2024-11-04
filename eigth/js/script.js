import {isEven} from "../../script.js";

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const num = parseInt(document.getElementById("input").value)
    let string = document.getElementById("text").value
    if(!isEven(num)){
        string = string.split('').reverse().join(''); 
    }
    result.innerText = string;
})