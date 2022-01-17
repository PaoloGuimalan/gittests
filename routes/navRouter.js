const express = require("express");
const route = express.Router();


module.exports = () => {
    route.get('/', (req, res) => {
        res.send("Hello World!");
    });

    return route;
}