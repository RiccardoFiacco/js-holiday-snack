import { isEven } from "../../script.js";
let arrThirdSnack = [];

insert.addEventListener("click", (event)=>{
    event.preventDefault();
    const num = parseInt(document.getElementById("input").value);
    document.getElementById("input").value = "";
    arrThirdSnack.push(num);
    console.log(arrThirdSnack)
})

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const res = arrThirdSnack.filter(isEven);
    result.innerText = res;
    arrThirdSnack = [];
    document.getElementById("input").value = "";
})