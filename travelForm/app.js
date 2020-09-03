var form = document.getElementById("form");
var submit = document.getElementById("submit");

submit.addEventListener("click", function submit() {
    event.preventDefault()

    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var locations = form.elements["locations"].value;

    var restrictions = [];
    if (form.elements['vegetarian'].checked) {
        restrictions.push(document.getElementById("vegetarian").value);
    }
    if (form.elements['kosher'].checked) {
        restrictions.push(document.getElementById("kosher").value);
    }
    if (form.elements['lactose-intolerant'].checked) {
        restrictions.push(document.getElementById("lactose-intolerant").value);
    }
    
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nDestination: " + locations + "\nDietary restrictions: " + restrictions);

}
)
