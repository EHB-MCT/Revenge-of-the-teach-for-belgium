'use strict';

let counter = 0;
let userData = [];
let totalUsers = 2;
let backButton;
let userForm;
let form = document.getElementById("userForm");
let radioButtons;

setTotalUserCount();

function setTotalUserCount() {
    radioButtons = [...document.getElementsByClassName("form-check-input")];
    radioButtons.forEach((button) => {
        button.addEventListener("change", () => {
            totalUsers = button.value;
            console.log(totalUsers);
        });
    });
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (counter == 0) {
        form.innerHTML = getHtmlString.count;
        backButton = document.getElementById("backButtonUser");
        backButton.addEventListener("click", (event) => {
            event.preventDefault();
            goingBackSetup();
        });
        counter++;
    } else if (counter > 0) {
        dataSaveOfUser();
    }
});

function goingBackSetup() {
    if (counter == 1) {
        form.innerHTML = getHtmlString.user;
        setTotalUserCount();
        counter--;
    } else if (counter > 1) {
        counter--;
        dataSaveOfUser();
        counter--;
        document.getElementById("numberOfPlayer").innerHTML = `${counter}`;
        document.getElementById("nextButtonUser").innerHTML = "Next";
    }
}

function dataSaveOfUser() {
    let nextButton = document.getElementById("nextButtonUser");
    let nameInput = document.getElementById("namePlayer");
    let emailInput = document.getElementById("emailPlayer");
    let playerNumber = document.getElementById("numberOfPlayer");

    userData[counter - 1] = {
        ["player" + counter]: {
            name: nameInput.value,
            email: emailInput.value
        }
    };

    if (counter >= totalUsers) {
        form.innerHTML = "";
        apiCallDataOfUser();
    } else {
        nameInput.value = ""
        emailInput.value = "";
        counter++;
        playerNumber.innerHTML = `${counter}`;


        if (counter == totalUsers) {
            nextButton.innerHTML = "Submit";
        }
    }
}


async function apiCallDataOfUser() {
    console.log(userData);
    console.log("call to back end...");
    let request = await fetch('http://localhost:4000/api/players', {
        method: "POST",
        body: JSON.stringify({
            userData
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    return await request.json();
}

const getHtmlString = {
    count: `<div class="log-in-container">
    <h1 class="form-title" >Welcome, register person <span
    id="numberOfPlayer">1</span></h1>
    <div class="form-group">
        <label class="text-primary" for="namePlayer">Name</label>
        <input type="text" class="form-control form-inputs" id="namePlayer"
         placeholder="Write your name here..." required>
    </div>

    <div class="form-group">
         <label class="text-primary" for="emailPlayer">Email</label>
        <input type="email" class="form-control form-inputs" id="emailPlayer" aria-describedby="emailHelp"
        placeholder="Write your email here..." required>
    </div>

    <small id="emailHelp" class="form-text text-muted form-small-text">Your data will not be saved, and will be
        deleted after the experience.</small>

        <div class="form-button-container">
            <button id="backButtonUser" type="button" class="btn btn-outline-primary form-next-button">Back</button>
            <button id="nextButtonUser" type="submit" class="btn btn-primary form-next-button">Next</button>
        </div>
    </div>`,

    user: `<div class="log-in-container">
    <h1 class="form-title">Welcome, register how many people are going to play.</h1>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="radioButton" id="radioButton2" value="2" checked>
        <label class="form-check-label" for="radioButton2">
            2
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="radioButton" id="radioButton3" value="3">
        <label class="form-check-label" for="radioButton3">
            3
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="radioButton" id="radioButton4" value="4">
        <label class="form-check-label" for="radioButton3">
            4
        </label>
    </div>
    <div class="form-button-container">
        <button id="nextButtonUser" type="submit" class="btn btn-primary form-next-button">Next</button>
    </div>
    </div>`
};