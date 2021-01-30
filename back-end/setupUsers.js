// Express: setting up the server
const express = require("express");
const app = express();
const port = 4000;
const playerRouter = express.Router();
const fs = require('fs');
const path = require("path");
// const bcrypt = require("./node_modules/bcrypt");

// Variables
let playerData = [];

// Middleware: thing that is between front and back-end
const bodyparser = require("body-parser");
const cors = require("cors");


// middleware
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(cors());


app.use("/api", playerRouter);

// In de deze route wordt de user info gekregen uit de front-end omgezet in een local file
playerRouter.route("/players")
    .post((req, res) => {
        rawData = req.body.userData;
        console.log(req.body.userData);
        rawData.forEach(object => {
            playerData.push(object);
        });
        /*
                fs.writeFile("currentPlayers.json", JSON.stringify(playerData), 'utf8', err => {
                    console.log("file is created");
                });
                res.redirect('../front-end/manual.html');*/
    });



// Getting live
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});