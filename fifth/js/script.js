import {isDivisible} from "../../script.js";

let arrFifthSnack = [];

insert.addEventListener("click", (event)=>{

    event.preventDefault();
    const num = parseInt(document.getElementById("input").value);
    arrFifthSnack.push(num); 
    document.getElementById("input").value = "";

})

form.addEventListener("submit", (event)=>{
 
    event.preventDefault();
    const divisor = parseInt(document.getElementById("divisor").value);   
    const res = isDivisible(arrFifthSnack, divisor);
    result.innerText = res;
    arrFifthSnack = [];
 
})