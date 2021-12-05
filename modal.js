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
const crossButton = document.querySelectorAll('.close'); // !

// FORM Elements
const form = document.querySelectorAll('formData');
const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const cities = document.querySelectorAll('location');
const cgu = document.getElementById('checkbox1');
const newsletter = document.getElementById('checkbox2');
const submitForm = document.getElementById('buttonSubmit');
const closeMe = document.getElementsByClassName('closeme');
const content = document.querySelectorAll('.content');
const confirmedMsg = document.getElementById('msg');
const confirmedBtn = document.getElementById('zebutton');
const modalBody = document.querySelectorAll('.modal-body');
const textControl = document.querySelectorAll('.text-control')



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
  // e.preventDefault();

  if(testNames() && testEmail() && testBirthdate() && testQuantity() && testCities() && testCGU()){ // SI tout est true on envoi les données
    const changeIt = document.getElementById('buttonSubmit');
    const closeIt = document.getElementById('buttonKlose');
    const content = document.querySelectorAll('.content')
    modalBody[0].style.display = 'none'; // On retire le formulaire
    confirmedBtn.style.display = "block"; // le button Close est ajouté
    confirmedMsg.style.display = "block"; // Le message de confirmation est ajouté
    content[0].style.height = "100%"; // On set la hauteur maximal pour garder les dimensions de la box d'origine
    changeIt.style.display = "none"; // Le boutton d'envoi est masqué

    closeIt.addEventListener('click', closeModal) // Et enfin, on ajoute l'event sur le button Close
    return true;
  }
  else{
    e.preventDefault(); // Sinon, on envoi pas les données

  }

}

/*
▰▰▰▰▰▰▰▰▰▰▰▰
  Prenom & nom
▰▰▰▰▰▰▰▰▰▰▰▰
 */

function testNames(){
  
  const prenomError = document.getElementById('prenomError');
  const nomError = document.getElementById('nomError');
  const formNameFill = document.getElementById("first").value;
  const formLastNameFill = document.getElementById("last").value;
  const regName = /^[a-zA-Z ,.'-]+$/

  const nameResult = regName.test(formNameFill);
  const lastNameResult = regName.test(formLastNameFill);

  const nameLength = formNameFill.length;
  const lastLength = formLastNameFill.length;

  // ✧ Le champ est vide ✧

  if(nameResult == false){

    firstname.style.borderColor = "red";
    prenomError.style.display = "block"; // on affiche l'erreur (comme il y'a un false, le formulaire n'est pas envoyé)
    textControl[0].style.border = " thin dotted red";

    return false;
  }

  if(lastNameResult == false){

    lastname.style.borderColor = "red";
    nomError.style.display = "block";
    textControl[0].style.border = " thin dotted red";

    return false; 
  }

  // ✧ Le champ n'a pas suffisamment de lettres  ✧

  if(nameLength < 2){
    firstname.style.borderColor = "red";
    prenomError.style.display = "block";
    return false;
  }
  else if(lastLength < 2){
    lastname.style.borderColor = "red";
    nomError.style.display = "block";
    return false;
  }

  else if(nameResult == true && lastNameResult == false){
    firstname.style.borderColor = "white";
    prenomError.style.display = "none";
  }
  else if(lastNameResult == true && nameResult == false){
    lastname.style.borderColor = "white";
    nomError.style.display = "none";
  }

  else{
    firstname.style.borderColor = "white";
    prenomError.style.display = "none";
    lastname.style.borderColor = "white";
    nomError.style.display = "none";
    return true;
  }
}


/*
▰▰▰▰▰▰▰▰▰▰▰▰
  Email
▰▰▰▰▰▰▰▰▰▰▰▰
 */

function testEmail(){
  const emailError = document.getElementById('emailError');
  const formEmailFill = document.getElementById("email").value;
  const formEmailPattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  const emailResult = formEmailPattern.test(formEmailFill);
  
  // ✧ Le champ est vide ✧

  if(emailResult == false){

    emailError.style.display = "block";
    textControl[0].style.border = " thin dotted red";
    return false;
  }

  else{
    emailError.style.display = "none";
    return true;
  }
}


/*
▰▰▰▰▰▰▰▰▰▰▰▰
  Date de naissance
▰▰▰▰▰▰▰▰▰▰▰▰
 */

function testBirthdate(){

  const birthError = document.getElementById('birthError');
  const dates = document.querySelector('input[type="date"]');

  // ✧ Le champ est vide et n'est pas nombre ✧

  if(dates.value === ''){
    birthError.style.display = "block";
    return false;
  }
  else{
    birthError.style.display = "none";
    textControl[0].style.border = " thin dotted red";
    return true;
  }

}


/*
▰▰▰▰▰▰▰▰▰▰▰▰
  Nombre de tournois
▰▰▰▰▰▰▰▰▰▰▰▰
 */

function testQuantity(){
  const numberError = document.getElementById('numberError');
  const formQuantity = document.getElementById("quantity").value;
  const formQuantityPattern = /^[0-99]*$/; // Match avec des valeurs comprises entre 0 et 99
  const quantityResult = formQuantityPattern.test(formQuantity);

  // ✧ Le champ est vide et ne match pas avec le regex ✧

  if(quantityResult == false || formQuantity === ''){
    numberError.style.display = "block";
    return false;

  }
  else{
    numberError.style.display = "none";
    textControl[0].style.border = " thin dotted red";
    return true;
  }
}


/*
▰▰▰▰▰▰▰▰▰▰▰▰
  Villes
▰▰▰▰▰▰▰▰▰▰▰▰
 */

function testCities(){
  const checkboxError = document.getElementById('cityError');
  const radios = document.querySelector('input[name="location"]:checked');
  const formQuantities = document.getElementById("quantity").value;

  // ✧ Une checkbox est bien sélectionnée ✧

  if(radios != null){
    checkboxError.style.display = "none";
    return true;
  }
  else if( radios == null && formQuantities > 0){
    checkboxError.style.display = "block";
    return false;
  }
  else{
    checkboxError.style.display = "none";
    return true;
  }

}


/*
▰▰▰▰▰▰▰▰▰▰▰▰
  CGU
▰▰▰▰▰▰▰▰▰▰▰▰
 */

function testCGU(){

  const cguError = document.getElementById('cguError');
  const cgu = document.querySelector('input[name="cgu"]:checked');

  // ✧ Une checkbox est bien sélectionnée ✧
  if(cgu != null){
    cguError.style.display = " none ";
    return true;
  }

  else{
    cguError.style.display = " block ";
    return false;
  }
}

/*
▰▰▰▰▰▰▰▰▰▰▰▰
  Checker event
▰▰▰▰▰▰▰▰▰▰▰▰
 */

// ✧ Ajout de la fonction au bouton checker ✧

submitForm.addEventListener('click', checker)



  /*
▰▰▰▰▰▰▰▰▰▰▰▰
  Charge errors
▰▰▰▰▰▰▰▰▰▰▰▰
 */
const prenomCheck = document.getElementById('first');
const nomCheck = document.getElementById('last');
const emailCheck = document.getElementById('email');
const birthCheck = document.getElementById('birthdate');
const numberCheck = document.getElementById('quantity');
const locationCheck = document.querySelector('input[name="location"]');


prenomCheck.addEventListener("change", testNames);
nomCheck.addEventListener("change", testNames);
emailCheck.addEventListener("change", testEmail);
birthCheck.addEventListener("change", testBirthdate);
numberCheck.addEventListener("change", testQuantity);
locationCheck.addEventListener("change", testCities);
