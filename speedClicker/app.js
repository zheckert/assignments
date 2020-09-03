let clicks = localStorage.getItem("clicks") || 0;
document.getElementById("clicker").textContent = clicks

document.getElementById("click").addEventListener("click", function(){
    clicks++;
    localStorage.setItem("clicks", clicks)
    document.getElementById("clicker").textContent = clicks

})