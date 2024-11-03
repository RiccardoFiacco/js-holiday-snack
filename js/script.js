//function
function isNum(n){
    if(typeof n !== 'number'){
        return false;
    }else{
        return true;
    }
}

function isEven(n){
    const flag = isNum(n);
    if(flag){
        const bool = n%2==0;
        return bool
    }else{
        return("non un numero")
    }
}
function isDivisible(arr, divisor){
    let flag;
    let i=0;
   do{
    flag = isNum(arr[i]);
    i++;
   }while(flag && i<arr.length)

    if(flag){
        const result = arr.filter((el)=>{
            if(el%divisor == 0){
                return el
            }
        });
        return result 
    }else{
         return ("ce una stringa nell'array");
    }  
}
//first snack

const firstForm = document.getElementById("first-snack-form");

firstForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const arrWord = document.getElementById("input-first-snack").value.toLowerCase().split('');

    const newArr = arrWord.map((letter)=>{
        if(letter== 'a'|| letter== 'e' || letter== 'i'|| letter== 'o'|| letter== 'u'){
            letter = letter+'f'+letter
        }
        return letter
    })
    const print = newArr.join('');

    const displayFirst = document.getElementById("result-first-snack");
    displayFirst.innerText = print;
})


//secondSnack

const secondForm = document.getElementById("second-snack-form");
secondForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const word = document.getElementById("input-second-snack").value.toLowerCase();
    const start = parseInt(document.getElementById("start-second-snack").value);
    const end = parseInt(document.getElementById("end-second-snack").value);
    const result = (word.split('').slice(start, end+1)).join('');
    const displaySecond  = document.getElementById("result-second-snack");
    displaySecond.innerText = result;
})


//third snack

const thirdForm = document.getElementById("third-snack-form");
let arrThirdSnack = [];

insertThirdSnack.addEventListener("click", (event)=>{
    event.preventDefault();
    const num = parseInt(document.getElementById("input-third-snack").value);
    arrThirdSnack.push(num);
    console.log(arrThirdSnack)
})

thirdForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const result = arrThirdSnack.filter(isEven);
    resultThirdSnack.innerText = result;
    arrThirdSnack = [];
    document.getElementById("input-third-snack").value = "";
})

//fourth snack
const fourthForm = document.getElementById("fourth-snack-form");
let arrFourthSnack = [];

insertFourthSnack.addEventListener("click", (event)=>{
    event.preventDefault();
    const num = parseInt(document.getElementById("input-fourth-snack").value);
    arrFourthSnack.push(num); 
    document.getElementById("input-fourth-snack").value = "";
    console.log(arrFourthSnack)
})
fourthForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    let result;
    const flag = parseInt(document.getElementById("selectEven").value); 
    if(!flag){
        result = arrFourthSnack.filter(isEven);
    }else{
        result = arrFourthSnack.filter((el)=>{
            if(!isEven(el)){
                return el
            }
        });
        console.log(result)
    }
    resultFourthSnack.innerText = result;
    arrFourthSnack = [];
})

//fifth snack

const fifthForm = document.getElementById("fifth-snack-form");
let arrFifthSnack = [];

insertFifthSnack.addEventListener("click", (event)=>{
    event.preventDefault();
    const num = parseInt(document.getElementById("input-fifth-snack").value);
    arrFifthSnack.push(num); 
    document.getElementById("input-fifth-snack").value = "";
})

fifthForm.addEventListener("submit", (event)=>{
    
    event.preventDefault();
    const divisor = parseInt(document.getElementById("divisor-fifth-snack").value);   
    const result = isDivisible(arrFifthSnack, divisor);
    resultFifthSnack.innerText = result;
    arrFifthSnack = [];
    
})

//sixth snack

const sixthForm = document.getElementById("sixth-snack-form");
let arrSixthSnack = [];

insertSixthSnack.addEventListener("click", (event)=>{
    event.preventDefault();
    const nameSurname = document.getElementById("name-sixth-snack").value;
    const age = parseInt(document.getElementById("age-sixth-snack").value);
    //potrebbero esserci vari controlli sull'input
    let obj = {
        nameSurname,
        age
    }
    arrSixthSnack.push(obj);
    console.log(arrSixthSnack)
})

sixthForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    arrSixthSnack.sort((a, b) => a.age - b.age);
    let i= 0;
    arrSixthSnack.forEach((el)=>{ 
  
        resultSixthSnack.innerText += `[${el.age} ${el.nameSurname}] `;
        i++;
    })
    arrSixthSnack = [];
})

//seventh snack

const hiddenFirstSnack = document.getElementById("sherlock-first-form");
let firstSherlockArray = [];

insertSherlockFirstSnack.addEventListener("click", (event)=>{
    event.preventDefault();
    const num = parseInt(document.getElementById("input-sherlock-first-snack").value);
    firstSherlockArray.push(num); 
    document.getElementById("input-sherlock-first-snack").value = "";
})

hiddenFirstSnack.addEventListener(("submit"), (event)=>{
    event.preventDefault();
    let sum = 0;
    for(let i = 0; i < firstSherlockArray.length; i++){
        sum += firstSherlockArray[i];
    }
    let result = sum / 2;
    resultSherlockFirstSnack.innerText = result;
    firstSherlockArray = [];
})

//eighth snack

const secondHidden = document.getElementById("secondH-form");

secondHidden.addEventListener("submit", (event)=>{
    event.preventDefault();
    const num = parseInt(document.getElementById("secondH-input").value)
    let string = document.getElementById("secondH-text").value

    if(!isEven(num)){
        string = string.split('').reverse().join(''); 
    }

    resultSecondH.innerText = string;
})