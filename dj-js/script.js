// onMouseMove: blue
// onMouseDown: red
// onMouseUp: yellow
// onDblClick: green
// onWheel: orange

// onkeydown: 66, 82, 89, 71, 79

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
