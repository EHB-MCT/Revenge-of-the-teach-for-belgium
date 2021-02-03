'use strict';

//algemene variabele
let counter = 0;
let userData = [];
let totalUsers = 2;
let formSubmit = false;
let startSimulation = false;
let backButton;
let userForm;
let form = document.getElementById("userForm");
let radioButtons;

setTotalUserCount();

// Haalt de total users waarde uit de input en stelt het gelijk aan de totalusers variabele 
function setTotalUserCount() {
    radioButtons = [...document.getElementsByClassName("form-check-input")];
    radioButtons.forEach((button) => {
        button.addEventListener("change", () => {
            totalUsers = button.value;
            console.log(totalUsers);
        });
    });
}

//event listener die de juiste functie opent bij het drukken op next of back
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (startSimulation) {
        location.href = "http://127.0.0.1:5500/FermataJS-controller/public/index.html";
    } else if (formSubmit) {
        form.innerHTML = getHtmlString.start;
        form.classList = "form-container";
        document.getElementById("big-container").style.height = "100vh";
        startSimulation = true;
    } else if (counter == 0) {
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

// Deze functie opent de juiste functie om terug te gaan rekening houdend met de pagina waarop de gebruiker zich bevindt
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

// deze functie neemt alle persoonlijke informatie van alle gebruikers op en steekt het in een array
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
        showUserManual();
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

// De informatie van de gebruikers worden met een fetch naar de back-end verzonden
async function apiCallDataOfUser() {
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

function showUserManual() {
    form.innerHTML = getHtmlString.manual;
    form.classList = "form-container form-container-manual";
    document.getElementById("big-container").style.height = "160vh";
    formSubmit = true;
}

// dit is een object met de html string van de user info pagina's en total users count pagina's
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
    </div>`,

    manual: `<div class="log-in-container">
    <h1 class="form-title">Before you can start read the manual first.</h1>
    <img src="manual copy.svg" alt="">
    <div class="form-button-container-manual">
        <button id="nextButtonUser" type="submit" class="btn btn-primary form-next-button">Ready</button>
    </div>
    </div>`,

    start: `<div class="log-in-container">
    <h1 class="form-title">Have fun!</h1>
    <div class="form-button-container-manual">
        <button id="nextButtonUser" type="submit" class="btn btn-primary form-next-button">Start</button>
    </div>
    </div>`
};