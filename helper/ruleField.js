const ruleField = (res, rule, data) =>{
    const { condition, condition_value, field } = rule;
    const value = rule.field
    if(!data[value]){
      console.log("failed ", data[value])
       res.send({
        message: `field ${value} is missing from data.`,
        status: "error",
        data: null,
      });
      
    }
    console.log("passed ", data[value])
    // console.log(value)
    return value;
  }
  module.exports = ruleField