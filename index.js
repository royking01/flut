const express = require("express");
const path = require("path");
const app = express();
const validate = require("./validate");
const user = require("./user");
const check = require("check-types");

app.use(express.json());

// app.use(validate)

app.use(express.urlencoded({ extended: false }));

//object containing my information

// 1. Get request for user inforation
app.get("/", (req, res) => res.json(user));

//2. post request  for rule validation
app.post("/validate-rule", (req, res) => {
  const { rule, data } = req.body;

  // VALIDATE IF RULE DATA EXIST
  validate(req, res, rule, data);
  res.send(data)
  
//COMPARE CONDITION,CONDITION VALUE AND DATA FIELD
  // console.log("validate condition test");
  const re = compare(rule, data);
  
}); //..

const compare = (rule, data) => {
  const { condition, condition_value, field } = rule;
  switch (condition) {
    case "eq":
      return data[field] === condition_value;
    case "neq":
      return data[field] !== condition_value;
    case "gt":
      return data[field] > condition_value;
    case "gte":
      return data[field] >= condition_value
  }
};




const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server running on Port ${PORT}`));
