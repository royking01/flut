const { string, any } = require("check-types");
const {PropertyToType} = require("./constants");
const isRequiredError = (field) => `${field} is required`;

const wrongTypeError = (field) => `${field} should be an ${PropertyToType[field]}`;

const error = (res, message) => {
  res.status(400).json({
    message,
    status: "error",
    data: null,
  });
};

module.exports = {
  isRequiredError,
  wrongTypeError,
  error,
  // payloadyload
};
