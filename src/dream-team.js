const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];
  Array.isArray(members) &&
    members.forEach((item) => {
      if (typeof (item) == "string") {
        result.push(item.trim()[0].toUpperCase());
      }
    })


	return result.sort().join("") || false;
};
