const {wrongTypeError} = require("./helper/methods");
const { PropertyToType } = require("./helper/constants");
const { Property } = require("./helper/constants");
const { isRequiredError } = require("./helper/methods");
const { error } = require("./helper/methods");
const check = require("check-types");
const isCorrectType = (propertyType, property) =>
  PropertyToType[propertyType].includes(typeof property);

const validate = (req, res, rule, data) => {
  // Check that props exist
  if (!rule) error(res, isRequiredError(Property.Rule));
  if (!data) error(res, isRequiredError(Property.Data));

  // Check if the right type
  if (!isCorrectType(Property.Rule, rule)) {
    error(res, wrongTypeError(Property.Rule));
  }

  isCorrectType(Property.Data, data);
  // const { condition, condition_value, field } = rule;

  //VALIDATE RULE && DATA IS AN OBJECT
  if (!check.object(data)) {
     console.log('not obj')
    res.json(400, { mess: "data is not an object" });
  }
  if (!check.object(rule)) {
    res.json(400, { mess: "rule is not an object" });
  }
  if (Object.keys(rule).length === 0) {
    return res.json(400, {
      message: "Rule is required.",
      status: "error",
      data: null,
    });
  }
  if (Object.keys(data).length === 0) {
    return res.json(400, {
      message: "data is required.",
      status: "error",
      data: null,
    });
  } else {
    res.json(data);
  }
  // next();
  return
};

module.exports = validate;
