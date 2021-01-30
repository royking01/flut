const Property = {
  Rule: "rule",
  Data: "data",
};

const PropertyToType = {
  rule: "object",
  data: ["string", "object", "array"],
};

const objectValues = 
  {
  "rule": {
    "field": "missions",
    "condition": "gte",
    "condition_value": 30
  },
  "data": {
    "name": "James Holden",
    "crew": "Rocinante",
    "age": 34,
    "position": "Captain",
    "missions": 45
  }
}

module.exports = {
  PropertyToType,
  Property,
  objectValues
};
