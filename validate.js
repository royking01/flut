var check = require("check-types");

const validate = (req, res, next) => {
  const { rule, data } = req.body;
  if (!rule && !data) {
    return res.json(400, {
      message: "Rule and Data is required.",
      status: "error",
      data: null,
    });
  }
  if (!rule) {
    return res.json(400, {
      message: "Rule is required.",
      status: "error",
      data: null,
    });
  }
  if (!data) {
    return res.json(400, {
      message: "data is required.",
      status: "error",
      data: null,
    });
  } else {
    //VALIDATE RULE && DATA IS AN OBJECT
    if (!check.object(data)) {
      res.json(400, { mess: "data is not an object" });
    }
    if (!check.object(rule)) {
      res.json(400, { mess: "rule is not an object" });
      
    }
    if (Object.keys(rule).length === 0){
      return res.json(400, {
        message: "Rule is required.",
        status: "error",
        data: null,
      });
    }if (Object.keys(data).length === 0){
      return res.json(400, {
        message: "data is required.",
        status: "error",
        data: null,
      });
    }
        
    else {
      res.json(data);
    }
  }
  next();
};
module.exports = validate;
