// console.log(`Regex`);

// const form = document.querySelector(`#form`);
// const username = document.querySelector(`#username`);
// const email = document.querySelector(`#email`);
// const password = document.querySelector(`#password`);
// const age = document.querySelector(`#age`);

// // let usernameRegex = 
// // let emailRegex =
// // let passwordRegex = 


// form.addEventListener(`submit` , function(event){
//     event.preventDefault();
//     console.log(username.value);
//     console.log(email.value);
//     console.log(password.value);
// })


// const username = "Ali";
// const email = "abc@gmail.com";
// const password = "Alizaman123#";
// const cnic = "12345-12345-1";
// const age = "25";

// console.log("username valid" , validateusername(username));
// console.log("email valid" , validateemail(email));
// console.log("password valid" , validatepassword(password));
// console.log("cnic valid" , validatecnic(cnic));
// console.log("age valid" , validateage(age));




// // Username validation: 4-15 characters
// function validateusername(username) {
//     const usernameRegex = /^[a-zA-Z0-9_]{4,15}$/;
//     return usernameRegex.test(username);
// }

// // Email validation
// function validateemail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// // Password validation: Minimum 8 characters, at least one uppercase letter, and one special character
// function validatepassword(password) {
//     const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//     return passwordRegex.test(password);
// }

// // CNIC validation: Pakistani CNIC format (#####-#######-#)
// function validatecnic(cnic) {
//     const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
//     return cnicRegex.test(cnic);
// }

// // Age validation: Between 18 and 60
// function validateage(age) {
//     const ageInt = parseInt(age, 10);
//     return ageInt >= 18 && ageInt <= 60;
// }