const express = require("express");
const session = require("express-session");
const flash = require("express-flash");

const app = express();
const port = 4000;
const router = require("./routes");

app.use(
  session({
    secret: "secret", // Replace with a secret key
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use("/", router);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
