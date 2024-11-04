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
export {isNum, isEven,isDivisible}

// //ninth snack

// const thirdHidden = document.getElementById("thirdH-form");

// thirdHidden.addEventListener("submit", (event)=>{
//     event.preventDefault()

//    const wordOne = document.getElementById("thirdH-text-one").value.toLowerCase();
//    const wordTwo = document.getElementById("thirdH-text-two").value.toLowerCase();
//    let result = "";
//    for(let i=0; i<wordOne.length;i++){
//     for(let j=0; j< wordTwo.length; j++){
//         if(wordOne[i]==wordTwo[j]){
//             if(!result.includes(wordOne[i])){
//                 result += wordOne[i];
//             }
            
//         }  
//     }
//    }
//    resultThirdH.innerText = "lettere in comune: "+result;
// })