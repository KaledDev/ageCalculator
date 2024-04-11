let displayMessage = document.getElementById('displayAge')
let calculatorButton = document.getElementById('calculAge');
let birthday = document.getElementById('birthday');
calculatorButton.addEventListener('click', () => {
    let dateOfBirth = birthday.value;
    //Create a Date OBJECT from the input value
    let dateObject = new Date(dateOfBirth);
    let yearOfBirth = dateObject.getFullYear();
    let currentDate = new Date().getFullYear();

    //Now calculate age
    let age = currentDate - yearOfBirth;
    if(yearOfBirth > currentDate){
        alert('Erreur, veuillez entrer une date de naissance valide')
    }else{
    displayMessage.innerHTML = `You are ${age} years old`;
    }
})