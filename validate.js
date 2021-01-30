const {wrongTypeError} = require("./helper/methods");
const { PropertyToType } = require("./helper/constants");
const { Property } = require("./helper/constants");
const { isRequiredError } = require("./helper/methods");
const { error } = require("./helper/methods");

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
   
   res.status(400).json(req.body);
  return;
  // next();
};

module.exports = validate;


// {
//   "message": "Invalid JSON payload passed."
//   "status": "error",
//   "data": null
// }