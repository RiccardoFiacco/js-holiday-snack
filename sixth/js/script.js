
let arrSixthSnack = [];
insert.addEventListener("click", (event)=>{
    event.preventDefault();
    const nameSurname = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    //potrebbero esserci vari controlli sull'input
    let obj = {
        nameSurname,
        age
    }
    arrSixthSnack.push(obj);
    console.log(arrSixthSnack)
})
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    arrSixthSnack.sort((a, b) => a.age - b.age);
    let i= 0;
    arrSixthSnack.forEach((el)=>{ 

        result.innerText += `[${el.age} ${el.nameSurname}] `;
        i++;

    })
    arrSixthSnack = [];
})
