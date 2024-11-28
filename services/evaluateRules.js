const rules = require("../config/rules");

const evaluateRules = (data) => {
  return rules.map((rule) => ({
    id: rule.id,
    name: rule.name,
    passed: rule.condition(data),
  }));
};

module.exports = evaluateRules;
