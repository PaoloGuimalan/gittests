const express = require("express");
const route = express.Router();

route.post('/', (req, res) => {
    const name = req.body.name;
    const place = req.body.place;
    // res.send(`${name} and ${place}`);
    console.log(req.body);
    return res.status(200).send(`${name} and ${place}`);
})

route.get('/:name', (req, res) => {
    const nm = req.params.name;
    console.log(nm);
    // res.send()
})

module.exports = route;

