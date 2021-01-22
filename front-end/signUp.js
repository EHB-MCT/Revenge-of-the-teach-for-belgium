'use strict';

// import {
//     resolve
// } from "url";
// import {
//     rejects
// } from "assert";


let counter = 1;
let userData = [];
let userCounter = 0;
let countForm = document.getElementById("countForm");



countForm.addEventListener("submit", () => {
    event.preventDefault();
    [...document.getElementsByClassName("form-check-input")].forEach((radioButton) => {
        if (radioButton.checked) {
            userCounter = radioButton.value
        }
    });

    countForm.innerHTML =
        `<div class="log-in-container">
        <h1 class="form-title" >Welcome, register person <span
        id="numberOfPlayer">1</span></h1>
        <div class="form-group">
            <label class="text-primary" for="exampleInputPassword1">Name</label>
            <input type="text" class="form-control form-inputs" id="namePlayer"
             placeholder="Write your name here..." required>
        </div>

        <div class="form-group">
             <label class="text-primary" for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control form-inputs" id="emailPlayer" aria-describedby="emailHelp"
            placeholder="Write your email here..." required>
        </div>

        <small id="emailHelp" class="form-text text-muted form-small-text">Your data will not be saved, and will be
            deleted after the experience.</small>

            <div class="form-button-container">
                <button id="backButtonUser" type="submit" class="btn btn-primary form-next-button">Back</button>
                <button id="nextButtonUser" type="submit" class="btn btn-primary form-next-button">Next</button>
            </div>
        </div>`;


    countForm.id = "userForm";
    let userForm = document.getElementById("userForm");
    userForm.addEventListener("submit", dataSaveOfUser);
});




function dataSaveOfUser(event) {
    event.preventDefault();
    let nextButton = document.getElementById("nextButtonUser");
    let nameInput = document.getElementById("namePlayer").value;
    let emailInput = document.getElementById("emailPlayer").value;
    let playerNumber = document.getElementById("numberOfPlayer");
    let maxUserCount = parseInt(userCounter, 10) + 1;


    console.log(nameInput);
    console.log(emailInput);

    userData.push({
        number: counter,
        name: nameInput,
        email: emailInput
    });

    counter++;

    if (counter >= maxUserCount) {
        userForm.innerHTML = "";
        apiCallDataOfUser();
    } else {

        if (counter == userCounter) {
            nextButton.innerHTML = "Submit"
        }

        playerNumber.innerHTML = `${counter}`
        nameInput = "";
        emailInput = "";
    }
}


function apiCallDataOfUser() {
    console.log("1");
    console.log(userData);
}