// console.log("Login Form");

// Grab all the items
let successFailure = document.getElementById('successFailure');
let successDisplay = document.getElementById('successDisplay');
let failureDisplay = document.getElementById('failureDisplay');

let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let nameInput = document.getElementById('nameInput');
let contactInput = document.getElementById('contactInput');
let emailInput = document.getElementById('emailInput');
let websiteInput = document.getElementById('websiteInput');
let adhaarInput = document.getElementById('adhaarInput');
let addressInput = document.getElementById('addressInput');

let submitBtn = document.getElementById('submitBtn');

let usernameBox = document.getElementById('usernameBox');
let passwordBox = document.getElementById('passwordBox');
let nameBox = document.getElementById('nameBox');
let contactBox = document.getElementById('contactBox');
let EmailBox = document.getElementById('EmailBox');
let websiteBox = document.getElementById('websiteBox');
let adhaarBox = document.getElementById('adhaarBox');


// For username
let validUsername = false;
usernameInput.addEventListener('blur', ()=>{
    // console.log("Username is blurred");

    let regex = /^[a-z]([a-z0-9]){2,10}$/;
    let str = usernameInput.value;
    // console.log(regex, str);

    let invalidUsername = document.getElementById('invalidUsername');

    if(regex.test(str)){
        // console.log("done");
        // console.log(validUsername);   
        invalidUsername.style.display = "none";
        validUsername = true; 
    }
    else{
        // console.log("Incorrect");
        // console.log(validUsername);
        invalidUsername.style.display = "inline-block";
        validUsername = false;
    }

})

// For password
let validPassword = false;
passwordInput.addEventListener('blur', ()=>{
    // console.log("Username is blurred");

    let regex = /^[a-zA-Z0-9\*\^\.\(\)\{\}\[\]#\$@!`~'"-_=+\,<>/?]{4,16}$/;
    let str = passwordInput.value;
    // console.log(regex, str);

    let invalidPassword = document.getElementById('invalidPassword');

    if(regex.test(str)){
        // console.log("done");
        // console.log(validPassword);
        invalidPassword.style.display = "none";
        validPassword = true;
    }
    else{
        // console.log("Incorrect");
        // console.log(validPassword);
        invalidPassword.style.display = "inline-block";
        validPassword = false; 
    }

})

// For name
let validName = false;
nameInput.addEventListener('blur', ()=>{
    // console.log("Name is blurred");

    let regex = /^[a-zA-z]{2,50}$/;
    let str = nameInput.value;
    // console.log(regex, str);

    let invalidName = document.getElementById('invalidName');

    if(regex.test(str)){
        // console.log("done");
        // console.log(validName);
        invalidName.style.display = "none";
        validName = true;
    }
    else{
        // console.log("Incorrect");
        // console.log(validName);
        invalidName.style.display = "inline-block"; 
        validName = false;
    }

})

// For contact number
let validContact = false;
contactInput.addEventListener('blur', ()=>{
    // console.log("Contact no. is blurred");

    let regex = /^[0-9]{10}$/;
    let str = contactInput.value;
    // console.log(regex, str);

    let invalidContact = document.getElementById('invalidContact');

    if(regex.test(str)){
        // console.log("done");
        // console.log(validContact);
        invalidContact.style.display = "none";
        validContact = true;
    }
    else{
        // console.log("Incorrect");
        // console.log(validContact);
        invalidContact.style.display = "inline-block";
        validContact = false; 
    }

})

// For email-id
let validEmail = false;
emailInput.addEventListener('blur', ()=>{
    // console.log("Email Id is blurred");

    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){2,7}$/;
    let str = emailInput.value;
    // console.log(regex, str);

    let invalidEmail = document.getElementById('invalidEmail');

    if(regex.test(str)){
        // console.log("done");
        // console.log(validEmail);
        invalidEmail.style.display = "none";
        validEmail = true;
    }
    else{
        // console.log("Incorrect");
        // console.log(validEmail);
        invalidEmail.style.display = "inline-block"; 
        validEmail = false;
    }

})

// For website
let validWebsite = false;
websiteInput.addEventListener('blur', ()=>{
    // console.log("Website is blurred");

    let regex = /^[wW]{3}\.([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){2,7}$/;
    let str = websiteInput.value;
    // console.log(regex, str);

    let invalidWebsite = document.getElementById('invalidWebsite');

    if(regex.test(str)){
        // console.log("done");
        // console.log(validWebsite);
        invalidWebsite.style.display = "none";
        validWebsite = true;
    }
    else{
        // console.log("Incorrect");
        // console.log(validWebsite);
        invalidWebsite.style.display = "inline-block"; 
        validWebsite = false;
    }

})

// For adhaar number
let validAdhaar = false;
adhaarInput.addEventListener('blur', ()=>{
    // console.log("Adhaar is blurred");

    let regex = /^[0-9]{12}$/;
    let str = adhaarInput.value;
    // console.log(regex, str);

    let invalidAdhaar = document.getElementById('invalidAdhaar');

    if(regex.test(str)){
        // console.log("done");
        // console.log(validAdhaar);
        invalidAdhaar.style.display = "none";
        validAdhaar = true;
    }
    else{
        // console.log("Incorrect");
        // console.log(validAdhaar);
        invalidAdhaar.style.display = "inline-block"; 
        validAdhaar = false;
    }

})

// On form submit
submitBtn.addEventListener("click", formSubmit);

function formSubmit(e){
    e.preventDefault();
    // console.log("You have clicked on form submit button");

    // If all parameters matches
    if(validUsername && validPassword && validName && validContact && validEmail &&validWebsite && validAdhaar == true){
        // console.log("Your form has been successfully submitted");

        successFailure.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert" id="successDisplay">
        <strong>Success!</strong> Your form has been successfully submitted.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
    }

    // If all parameters do not match
    else{
        // console.log("Your form has not been successfully submitted");

        successFailure.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert" id="failureDisplay">
        <strong>Failure!</strong> Your form has not been submitted. Try again
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    }
}