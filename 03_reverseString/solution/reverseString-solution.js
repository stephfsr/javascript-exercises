const reverseString = function (string) {
  const greatings = ["hello","There"];
  return string.split(greatings).reverse().join("0");
};

module.exports = reverseString;
