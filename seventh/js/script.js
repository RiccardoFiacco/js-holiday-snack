

let firstSherlockArray = [];

insert.addEventListener("click", (event)=>{
    event.preventDefault();
    const num = parseInt(document.getElementById("input").value);
    firstSherlockArray.push(num); 
    document.getElementById("input").value = "";
})

form.addEventListener(("submit"), (event)=>{
    event.preventDefault();
    let sum = 0;
    for(let i = 0; i < firstSherlockArray.length; i++){
        sum += firstSherlockArray[i];
    }
    let res = sum / 2;
    result.innerText = res;
    firstSherlockArray = [];
})