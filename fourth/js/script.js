import { isEven } from "../../script.js";

let arrFourthSnack = [];

insert.addEventListener("click", (event)=>{
    event.preventDefault();

    const num = parseInt(document.getElementById("input").value);
    arrFourthSnack.push(num); 
    document.getElementById("input").value = "";
})
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    let res;
    const flag = parseInt(document.getElementById("selectEven").value); 
    if(!flag){
        res = arrFourthSnack.filter(isEven);
    }else{
        res = arrFourthSnack.filter((el)=>{
            if(!isEven(el)){
                return el
            }
        });
    }
    result.innerText = res;
    arrFourthSnack = [];
})