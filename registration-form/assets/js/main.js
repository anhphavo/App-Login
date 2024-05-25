"use strict";

// Định nghĩa các điều kiện
const firstNameMinLength = 6;
const lastNameMinLength = 6;
const firstNameMaxLength = 50;
const lastNameMaxLength = 50;
const accountNameMinLength = 6;
const accountNameMaxLength = 30;
const passwordMinLength = 10;
const passwordMaxLength = 50;
const areaCodeLength = 2;
const phoneNumberLength = 9;
const form = document.getElementById('frm-register');

let firstNameRegex = /^[a-zA-Z]+$/;
let lastNameRegex = /^[a-zA-Z]+$/;
let accountNameRegex = /^[a-zA-Z0-9]+$/;
let passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let signUpForm = undefined;
let firstNameElement = undefined;
let firstNameErrorElement = undefined;
let lastNameElement = undefined;
let lastNameErrorElement = undefined;
let passwordElement = undefined;
let passwordErrorElement = undefined;
let confirmPasswordElement = undefined;
let confirmPasswordErrorElement = undefined;
let emailElement = undefined;
let emailErrorElement = undefined;
let accountNameElement = undefined;
let accountNameErrorElement = undefined;
let areaCodeElement = undefined;
let areaCodeErrorElement = undefined;
let phoneNumberElement = undefined;
let phoneNumberErrorElement = undefined;

function initForm() {
  firstNameElement = document.getElementById("firstName");
  firstNameErrorElement = document.getElementById("firstName-error");
  lastNameElement = document.getElementById("lastName");
  lastNameErrorElement = document.getElementById("lastName-error");
  accountNameElement = document.getElementById("accountName");
  accountNameErrorElement = document.getElementById("accountName-error");
  passwordElement = document.getElementById("password");
  passwordErrorElement = document.getElementById("password-error");
  confirmPasswordElement = document.getElementById("confirmPassword");
  confirmPasswordErrorElement = document.getElementById(
    "confirmPassword-error"
  );
  emailElement = document.getElementById("email");
  emailErrorElement = document.getElementById("email-error");
  areaCodeElement = document.getElementById("areaCodeip");
  areaCodeErrorElement = document.getElementById("areaCode-error");
  phoneNumberElement = document.getElementById("inputNumber");
  phoneNumberErrorElement = document.getElementById("phoneNumber-error");

  signUpForm = {
    firstName: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    lastName: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    accountName: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    password: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    confirmPassword: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    email: {
      value: "",
      valid: false,
      errorMessage: "",
    },

    areaCode: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    phoneNumber: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    subject: {
      select: "Choose Option",
    },
    confirm: {
      value: "",
    },
  };
};

////////////////////////////////////////////////////////////////////////////////////////////////
function changeSubject(){
  signUpForm.subject.select = document.getElementById("subject").value;
}

///////////////////////////////////////////////   firstName  /////////////////////////////////////////////////

// FIX: function name should be in camel case format, setFirstNameInvalid instead of setFirstNameInvalid
function setFirstNameInvalid(message) {
  signUpForm.firstName.valid = false;
  signUpForm.firstName.errorMessage = message;
  firstNameErrorElement.innerHTML = message;
  firstNameErrorElement.style.display = "block";
}

function setFirstNameValid() {
  signUpForm.firstName.value = document.getElementById("firstName").value;
  signUpForm.firstName.valid = true;
  firstNameErrorElement.style.display = "none";
}

function validateFirstName() {
  var firstName = document.getElementById("firstName").value;

  if (
    firstName.length < firstNameMinLength ||
    firstName.length > firstNameMaxLength
  ) {
    setFirstNameInvalid(
      `firstName must be between ${firstNameMinLength} and ${firstNameMaxLength} characters`
    );
    console.log('First name validation failed');
    return;
  }

  if (!firstNameRegex.test(firstName)) {
    setFirstNameInvalid("firstName must contain alphabet characters");
    console.log('First name validation failed');
    return;
  }
  setFirstNameValid();
}

/////////////////////////////////////  lastName  ///////////////////////////////////////////////////////////

function setLastNameInvalid(message) {
  signUpForm.lastName.valid = false;
  signUpForm.lastName.errorMessage = message;
  lastNameErrorElement.innerHTML = message;
  lastNameErrorElement.style.display = "block";
}

function setLastNameValid() {
  signUpForm.lastName.value = document.getElementById("lastName").value;
  signUpForm.lastName.valid = true;
  lastNameErrorElement.style.display = "none";
}

function validateLastName() {
  var lastName = document.getElementById("lastName").value;

  if (
    lastName.length < lastNameMinLength ||
    lastName.length > lastNameMaxLength
  ) {
    setLastNameInvalid(
      `lastName must be between ${lastNameMinLength} and ${lastNameMaxLength} characters`
    );
    console.log('Last name validation failed');
    return;
  }

  if (!lastNameRegex.test(lastName)) {
    setLastNameInvalid("lastName must contain alphabet characters");
    console.log('Last name validation failed');
    return;
  }
  setLastNameValid(); 
}

/////////////////////////      accountName     ///////////////////////////////////////

function setAccountNameInvalid(message) {
  signUpForm.accountName.valid = false;
  signUpForm.accountName.errorMessage = message;
  accountNameErrorElement.innerHTML = message;
  accountNameErrorElement.style.display = "block";
}

function setAccountNameValid() {
  signUpForm.accountName.value = document.getElementById("accountName").value;
  signUpForm.accountName.valid = true;
  accountNameErrorElement.style.display = "none";
}

function validateAccountName() {
  var accountName = document.getElementById("accountName").value;

  if (
    accountName.length < accountNameMinLength ||
    accountName.length > accountNameMaxLength
  ) {
    setAccountNameInvalid(
      `accountName must be between ${accountNameMinLength} and ${accountNameMaxLength} characters`
    );
    console.log('Account name validation failed');
    return;
  }

  if (!accountNameRegex.test(accountName)) {
    setAccountNameInvalid(
      "accountName must contain numbers and alphabet characters"
    );
    console.log('Account name validation failed');
    return;
  }
  setAccountNameValid();
}

/////////////////////////      password     ///////////////////////////////////////

function setPasswordInvalid(message) {
  signUpForm.password.valid = false;
  signUpForm.password.errorMessage = message;
  passwordErrorElement.innerHTML = message;
  passwordErrorElement.style.display = "block";
}

function setPasswordValid() {
  signUpForm.password.value = document.getElementById("password").value;
  signUpForm.password.valid = true;
  passwordErrorElement.style.display = "none";
}

function validatePassword() {
  var password = document.getElementById("password").value;

  if (
    password.length < passwordMinLength ||
    password.length > passwordMaxLength
  ) {
    setPasswordInvalid(
      `password must be between ${passwordMinLength} and ${passwordMaxLength} characters`
    );
    console.log('Password validation failed');
    return;
  }

  if (!passwordRegex.test(password)) {
    setPasswordInvalid(
      "password must contain uppercase letters, lowercase letters, numbers, and symbols"
    );
    console.log('Password validation failed');
    return;
  }
  setPasswordValid();
}
//////////////////////////   confirm password   ////////////////////////////////////////////////////
function setConfirmPasswordInvalid(message) {
  signUpForm.confirmPassword.valid = false;
  signUpForm.confirmPassword.errorMessage = message;
  confirmPasswordErrorElement.innerHTML = message;
  confirmPasswordErrorElement.style.display = "block";
}

function setConfirmPasswordValid() {
  signUpForm.confirmPassword.value = document.getElementById("confirmPassword").value;
  signUpForm.confirmPassword.valid = true;
  confirmPasswordErrorElement.style.display = "none";
}
function validateConfirmPassword() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (confirmPassword !== password) {
    setConfirmPasswordInvalid(`Confirm password must match the password`);
    console.log('confirmpassword validation failed');
    return;
  }
  setConfirmPasswordValid();
}
/////////////////////////      areaCode     ///////////////////////////////////////

function setAreaCodeInvalid(message) {
  signUpForm.areaCode.valid = false;
  signUpForm.areaCode.errorMessage = message;
  areaCodeErrorElement.innerHTML = message;
  areaCodeErrorElement.style.display = "block";
}

function setAreaCodeValid() {
  signUpForm.areaCode.value = areaCodeElement.value;
  signUpForm.areaCode.valid = true;
  areaCodeErrorElement.style.display = "none";
}

function validateAreaCode() {
  var areaCode = document.getElementById("areaCodeip").value;

  if (areaCode.length != areaCodeLength) {
    setAreaCodeInvalid(`areaCode must be ${areaCodeLength} characters`);
    console.log('Areacode validation failed');
    return;
  }
  setAreaCodeValid();
}

/////////////////////////      phoneNumber     ///////////////////////////////////////

function setPhoneNumberInvalid(message) {
  signUpForm.phoneNumber.valid = false;
  signUpForm.phoneNumber.errorMessage = message;
  phoneNumberErrorElement.innerHTML = message;
  phoneNumberErrorElement.style.display = "block";
}

function setPhoneNumberValid() {
  signUpForm.phoneNumber.value = phoneNumberElement.value;
  signUpForm.phoneNumber.valid = true;
  phoneNumberErrorElement.style.display = "none";
}

function validatePhoneNumber() {
  var phoneNumber = phoneNumberElement.value;

  if (phoneNumber.length != phoneNumberLength) {
    setPhoneNumberInvalid(
      `phoneNumber must be ${phoneNumberLength} characters`
    );
    console.log('Phonenumber validation failed');
    return;
  }
  setPhoneNumberValid();
}
/////////////////////////// email /////////////////////////////////////////////
function setEmailInvalid(message) {
  signUpForm.email.valid = false;
  signUpForm.email.errorMessage = message;
  emailErrorElement.innerHTML = message;
  emailErrorElement.style.display = "block";
}

function setEmailValid() {
  signUpForm.email.value = emailElement.value;
  signUpForm.email.valid = true;
  emailErrorElement.style.display = "none";
}

function validateEmail() {
  var email = emailElement.value;

  if (!emailRegex.test(email)) { // Thay vì !isValidEmail(email)
    setEmailInvalid(`Invalid email format`);
    console.log('Email validation failed');
    return;
  }
  setEmailValid();
}
////////////////////////////////////////////////////////////////////////
function getValueOfSelectedRadio() {
  var choices = document.getElementsByName('choice');
  var selectedChoice = '';
  
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      selectedChoice = choices[i].value;
      break;
    }
  }
  return selectedChoice;
}
////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  populate();
  initForm();

  document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      if (onSubmit()) {
          saveUserRecord();
      }
  });
});

function saveToLocalStorage() {
  let user_records = JSON.parse(localStorage.getItem("user_records")) || [];
  user_records.push({
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      account: document.getElementById('accountName').value,
      password: document.getElementById('password').value,
      confirmPassword: document.getElementById('confirmPassword').value,
      email: document.getElementById('email').value,
      areaCode: document.getElementById('areaCodeip').value,
      phoneNumber: document.getElementById('inputNumber').value,
      select: document.getElementById('subject').value,
      confirm: document.querySelector('input[name="choice"]:checked').value
  });

  localStorage.setItem('user_records', JSON.stringify(user_records));
}

function register() {
  alert("Your Account Was Created Successfully!");
}

function onSubmit() {
  if (
      validateFirstName() &&
      validateLastName() &&
      validateAccountName() &&
      validatePassword() &&
      validateConfirmPassword() &&
      validateEmail() &&
      validateAreaCode() &&
      validatePhoneNumber()
  ) {
      register();
      saveToLocalStorage();
      console.log("succeed");
      return true;
  } else {
      console.log("failed");
      return false;
  }
}

function populate() {
  const editUserIndex = localStorage.getItem('edit_user_index');
  if (editUserIndex !== null) {
      const user_records = JSON.parse(localStorage.getItem('user_records'));
      const editUserRecord = user_records[editUserIndex];
      document.getElementById('accountName').value = editUserRecord.account;
      document.getElementById('firstName').value = editUserRecord.firstName;
      document.getElementById('lastName').value = editUserRecord.lastName;
      document.getElementById('email').value = editUserRecord.email;
      document.getElementById('areaCodeip').value = editUserRecord.areaCode;
      document.getElementById('inputNumber').value = editUserRecord.phoneNumber;
      document.getElementById('subject').value = editUserRecord.select;
      
      document.getElementById('button-register').innerText = 'Update';
  }
}

function saveUserRecord() {
  let user = {
      account: document.getElementById('accountName').value,
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      areaCode: document.getElementById('areaCodeip').value,
      phoneNumber: document.getElementById('inputNumber').value,
      select: document.getElementById('subject').value
  };

  let editUserIndex = localStorage.getItem('edit_user_index');
  let user_records = JSON.parse(localStorage.getItem('user_records'));
  if (editUserIndex !== null) {
      user_records[editUserIndex] = user;
      localStorage.removeItem('edit_user_index');
  } else {
      user_records.push(user);
  }

  localStorage.setItem('user_records', JSON.stringify(user_records));
  window.location.href = 'http://127.0.0.1:5500/trainning-anh-pha/admin-dashboard/index.html';
}

document.addEventListener('DOMContentLoaded', function() {
  populate();
  initForm();

  document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      if (onSubmit()) {
          saveUserRecord();
      }
  });
});
