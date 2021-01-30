const express = require("express");
const path = require("path");
const app = express();
const validate = require("./validate");
const user = require("./user");
const check = require("check-types");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 1. Get request for user inforation
app.get("/", (req, res) => res.json(user));

//2. post request  for rule validation
app.post("/validate-rule", (req, res) => {
  const { rule, data } = req.body;
  // VALIDATE IF RULE DATA EXIST
  validate(req, res, rule, data);
  // COMPARISON
  compare(rule, data)
    ? res.json(200, {
        message: `field ${rule.field} successfully validated.`,
        status: "success",
        data: {
          validation: {
            error: false,
            field: `${rule.field}`,
            field_value: `${rule.field}`,
            condition: "",
            condition_value: "",
          },
        },
      })
    : res.json(400, {
        message: `field ${rule.field} failed validation.`,
        status: "error",
        data: {
          validation: {
            error: true,
            field: `${rule.field}`,
            field_value: `${rule.field}`,
            condition: "",
            condition_value: "",
          },
        },
      });
      return
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
      return data[field] >= condition_value;
  }
};

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server running on Port ${PORT}`));
