const express = require("express");

const path = require("path");

const app = express();

const middleware = (req, res, next) => {
  next();
};

app.use(middleware);

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//object containing my information
const user = {
  message:
    "Thank you for this opportunity, i would love to be part of an amazing Organisation doing great things.",
  status: "success",
  data: {
    name: "Nosa Roy Okunbor",
    github: "royking01",
    email: "royokunbor@gmail.com.com",
    mobile: 08155386242,
    twitter: "",
  },
};
// 1. Get request for user inforation
app.get("/", (req, res) => res.json(user));

// const validateRule = {
//   rule: {
//     field: "",
//     condition: "gte",
//     condition_value: 30,
//   },
//   data: {
//     name: "",
//     crew: "Rocinante",
//     age: "",
//     position: "Captain",
//     missions: 45,
//   },
// };
//2. post request  for rule validation
app.post("/validate-rule", (req, res) => {
  const valid = {
    rule: {
      field: "Age",
      condition: "gte",
      condition_value: 30,
    },
    data: {
      name: req.body.name,
      age:req.body.age,
      position: req.body.position,
      missions: req.body.missions,
    },
  };

  if (!valid.data.name) {
     res.status(400).send({
      message: "name is required.",
      status: "error",
      data: null,
    });
  }
  else if(!valid.data.age){
    res.status(400).send({
        message: "Age is required.",
        status: "error",
        data: null,
      });
  } 
  else if(!valid.data.position){
    res.status(400).send({
        message: "Position is required.",
        status: "error",
        data: null,
      });
  } 
    else {
    res.send(req.body);
  }
  //    if(){}
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server running on Port ${PORT}`));
