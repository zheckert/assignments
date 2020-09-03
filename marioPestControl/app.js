let form = document.getElementById("form");
let submit = document.getElementById("calculate");

const g = 5
const b = 7
const c = 11

form.addEventListener('submit' , function(){
    event.preventDefault()

    const goomba = form.elements["goomba"].value;
    const bobomb = form.elements["bobomb"].value;
    const cheepcheep = form.elements["cheepcheep"].value;

    const total = ((goomba * g) + (bobomb * b) + (cheepcheep * c));
    document.getElementById("append").textContent = total
    }


)