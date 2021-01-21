'use strict';


let counter = 1;
let userData = [];
let userCounter = 0;
let countForm = document.getElementById("countForm");
let userForm;



countForm.addEventListener("submit", () => {
    event.preventDefault();
    [...document.getElementsByClassName("form-check-input")].forEach((radioButton) => {
        if (radioButton.checked) {
            userCounter = radioButton.value
        }
    });

    countForm.innerHTML = `<div class="form-group"><h1>Welcome, register all people</h1>
    <div class="form-group">
    <label for="exampleInputPassword1">Name person <span
            id="numberOfPlayer">1</span></label>
    <input type="text" class="form-control" id="namePlayer"
        placeholder="Enter name of the player">
    </div>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="emailPlayer" aria-describedby="emailHelp"
    placeholder="Enter email">
    </div>
    <button id="nextButtonUser" type="submit" class="btn btn-primary">Next</button>
    <small id="emailHelp" class="form-text text-muted">Your data will not be saved, and will be
        deleted after the experience.</small></div>`;


    countForm.id = "userForm";
    userForm = document.getElementById("userForm");
    userForm.addEventListener("submit", dataSaveOfUser);
});



function dataSaveOfUser(event) {
    event.preventDefault();
    let nextButton = document.getElementById("nextButtonUser");
    let nameInput = document.getElementById("namePlayer");
    let emailInput = document.getElementById("emailPlayer");
    let playerNumber = document.getElementById("numberOfPlayer");
    let maxUserCount = parseInt(userCounter, 10) + 1;

    console.log(nameInput.value);
    console.log(emailInput.value);

    userData.push({
        number: counter,
        name: nameInput.value,
        email: emailInput.value
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
        nameInput.value = "";
        emailInput.value = "";
    }
}


function apiCallDataOfUser() {
    console.log("1");
    console.log(userData);
}