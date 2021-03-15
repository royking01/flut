const compare = (res, rule, data) => {
    const { condition, condition_value, field } = rule;
    switch (condition) {
      case "eq":
        return field === condition_value ?  res.send(data) : res.jsoc("ërror") ; 
      case "neq":
        return field != condition_value ?  res.send(data) : res.send("ërror") ; 
      case "gt":
        return field > condition_value ?  res.send(data) : res.send("ërror") ; 

      case "gte":
        return field >= condition_value ?  res.send(data) : res.send("ërror") ; 

     case "contains":
      return field.includes(condition_value)?  res.send(data) : res.send("ërror") ; 
    }
  }

  module.exports = compare