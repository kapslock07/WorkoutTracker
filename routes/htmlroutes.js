
// const sequelize = require("sequelize");


module.exports = function (server) {

    server.get("/", (req, res) => {
        res.render("index");
    });

    server.get("/exercise", (req, res) => {
        res.render("exercise");
    });

    server.get("/exercise?", (req, res) => {
        res.render("exercise");
    });

    server.get("/stats", (req, res) => {
        res.render("stats");
    });

}