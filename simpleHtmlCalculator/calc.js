const form = document.addition

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const firstNum = form.num1.value
    const lastNum = form.num2.value
    form.num1.value = ""
    form.num2.value = ""
    const addition = document.createElement('h1')
    addition.textContent = parseInt(firstNum) + lastNum
    document.getElementById("addition").append(addition)
})

const form1 = document.subtraction

form1.addEventListener("submit", function(event){
    event.preventDefault()
    
    const firstNum = form1.num3.value
    const lastNum = form1.num4.value
    form1.num3.value = ""
    form1.num4.value = ""
    const subtraction = document.createElement('h1')
    subtraction.textContent = Number(firstNum) - lastNum
    document.getElementById("subtraction").append(subtraction)
})

const form2 = document.multiplication

form2.addEventListener("submit", function(event){
    event.preventDefault()
    
    const firstNum = form2.num5.value
    const lastNum = form2.num6.value
    form2.num5.value = ""
    form2.num6.value = ""
    const multiplication = document.createElement('h1')
    multiplication.textContent = +firstNum * lastNum
    document.getElementById("multiplication").append(multiplication)
})

//+, parseInt, and Number convert the string to integers.
