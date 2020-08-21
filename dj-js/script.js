const square = document.getElementById('square')

document.getElementById('square').addEventListener('mousemove', changeColorMove);

    function changeColorMove() {
        this.style.backgroundColor = "blue";

    }

document.getElementById('square').addEventListener('mousedown', changeColorDown);

    function changeColorDown() {
        this.style.backgroundColor = "red";

    }

document.getElementById('square').addEventListener('mouseup', changeColorUp);

    function changeColorUp() {
        this.style.backgroundColor = "yellow";

    }

document.getElementById('square').addEventListener('dblclick', changeColorDbl);

    function changeColorDbl() {
        this.style.backgroundColor = "green";

    }

window.addEventListener('wheel', changeColorWheel);

    function changeColorWheel() {
        document.getElementById('square').style.backgroundColor = "orange";
    }

window.addEventListener('keydown', keyboardColor);
    function keyboardColor(e){
        console.log(e)
        if (e.code === "KeyB") {
            square.style.backgroundColor = "blue";        
        } else if (e.code === "KeyR"){
            square.style.backgroundColor = "red";
        } else if (e.code === "KeyY"){
            square.style.backgroundColor = "yellow";
        } else if (e.code === "KeyG"){
            square.style.backgroundColor = "green";
        } else if (e.code === "KeyO"){
            square.style.backgroundColor = "orange";
        }             
        
    }