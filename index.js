const express = require("express");
const app = express();
// const bodyParser = require("body-parser");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routeTwo = require("./routes/navPosted");
const routeOne = require("./routes/navRouter");

app.get('/', routeOne());

app.post('/post', (req, res) => {
    const nm = req.body.name;
    console.log(nm);
});

app.listen(3000, () => console.log("Running!"));