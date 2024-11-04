//secondSnack

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const word = document.getElementById("text").value.toLowerCase();
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    const res = (word.split('').slice(start, end+1)).join('');
    result.innerText = res;
})