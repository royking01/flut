// const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();
const validate = require("./validate");
const user = require("./user");
const check = require("check-types");
const ruleField = require("./helper/ruleField");
const compare = require("./helper/compare");
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
  if (err) {
    res.status(400).json({
      message: "Invalid JSON payload passed.",
      status: "error",
      data: null,
    });
  } else {
    next();
  }
});
// 1. Get request for user inforation
app.get("/", (req, res) => res.json(user));

//2. post request  for rule validation
app.post("/validate-rule", (req, res) => {
  const { rule, data } = req.body;
  // VALIDATE IF RULE DATA EXIST
  validate(req, res, rule, data);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server running on Port ${PORT}`));
