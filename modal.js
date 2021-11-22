function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
let crossButton = document.querySelectorAll('.close');

// FORM Elements
let form = document.querySelectorAll('formData');
let firstname = document.getElementById('first');
let lastname = document.getElementById('last');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let quantity = document.getElementById('quantity');
let cities = document.querySelectorAll('location');
let cgu = document.getElementById('checkbox1');
let newsletter = document.getElementById('checkbox2');
let submitForm = document.getElementById('buttonSubmit');
let content = document.querySelectorAll('.content');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
crossButton[0].addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/*
▰▰▰▰▰▰▰▰▰▰▰▰
  Close modal form
▰▰▰▰▰▰▰▰▰▰▰▰
 */

function closeModal(){
  modalbg.style.display = "none";
}

/*
▰▰▰▰▰▰▰▰▰▰▰▰
  Checker
▰▰▰▰▰▰▰▰▰▰▰▰
 */

function checker(e){
  e.preventDefault();
  if(testNames() && testEmail() && testBirthdate() && testQuantity() && testCities() && testCGU()){
    content[0].style.background = 'green';
    document.getElementById('buttonSubmit').value="Envoyé !";
    submitForm.style.background = "green";
    return true;
  }
  else{
    e.preventDefault();
  }

}

/*
▰▰▰▰▰▰▰▰▰▰▰▰
  Prenom & nom
▰▰▰▰▰▰▰▰▰▰▰▰
 */

function testNames(){
  let formNameFill = document.getElementById("first").value;
  let formLastNameFill = document.getElementById("last").value;
  let regName = /^[a-zA-Z ,.'-]+$/

  let nameResult = regName.test(formNameFill);
  let lastNameResult = regName.test(formLastNameFill);

  let nameLength = formNameFill.length;
  let lastLength = formLastNameFill.length;
  console.log(nameLength);

  if(nameResult == false){
    alert("Erreur dans le champ prénom");
    console.log(nameResult);
    firstname.style.background = "red";
    return false; 
  }

  if(lastNameResult == false){
    alert("Erreur dans le champ nom");
    console.log(lastNameResult);
    lastname.style.background = "red";
    return false; 
  }

  if(nameLength <= 1){
    alert("Vérifiez le nombre de lettre dans les champs prénoms / noms ");
    firstname.style.background = "red";
    console.log(formNameFill);
    return false;
  }
  else if(lastLength <= 1){
    alert('lastName : vérifiez le nombre de charactères');
    lastname.style.background = "red";
    return false;
  }

  else{
    console.log('le prenom et nom sont bons');
    firstname.style.background = "green";
    lastname.style.background = "green";
    return true;
  }
}

/*
▰▰▰▰▰▰▰▰▰▰▰▰
  Email
▰▰▰▰▰▰▰▰▰▰▰▰
 */

function testEmail(){
  let formEmailFill = document.getElementById("email").value;
  let formEmailPattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  let emailResult = formEmailPattern.test(formEmailFill)
  
  if(emailResult == false){
    alert("Il y a un soucis du côté de l'email");
    console.log(formEmailFill);
    return false;
  }

  else{
    console.log("email ok");
    return true;
  }
}

/*
▰▰▰▰▰▰▰▰▰▰▰▰
  Date de naissance
▰▰▰▰▰▰▰▰▰▰▰▰
 */

function testBirthdate(){

  let dates = document.querySelector('input[type="date"]');
  if(dates.value === ''){
    alert('Ajoutez votre date de naissance');
    console.log('Ajoutez votre date de naissance');
    return false;
  }
  else{
    console.log('date de naissance ok');
    return true;
  }

}

/*
▰▰▰▰▰▰▰▰▰▰▰▰
  Nombre de tournois
▰▰▰▰▰▰▰▰▰▰▰▰
 */

function testQuantity(){

  let formQuantity = document.getElementById("quantity");
  if(formQuantity.value === ''){
    alert("Veuillez remplir le champ du nombre de tounoi")
    console.log()
    return false;

  }
  else{
    console.log('quantity ok')
    return true;
  }
}

/*
▰▰▰▰▰▰▰▰▰▰▰▰
  Villes
▰▰▰▰▰▰▰▰▰▰▰▰
 */

function testCities(){
  let radios = document.querySelector('input[name="location"]:checked');
  if(radios != null){
    console.log('checkbox button checked');
    return true;
  }
  else{
    alert('Veuillez sélectionner la ou les villes');
    return false;
  }
}

/*
▰▰▰▰▰▰▰▰▰▰▰▰
  CGU
▰▰▰▰▰▰▰▰▰▰▰▰
 */

function testCGU(){
  let cgu = document.querySelector('input[name="cgu"]:checked');
  console.log(cgu);
  if(cgu != null){
    console.log('CGU acceptée');
    return true;
  }
  else{
    alert('Veuillez accepter les CGU');
    return false;
  }
}

/*
▰▰▰▰▰▰▰▰▰▰▰▰
  Checker event
▰▰▰▰▰▰▰▰▰▰▰▰
 */

submitForm.addEventListener('click', checker);
