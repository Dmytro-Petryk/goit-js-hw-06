function getShippingCost(country) {
  let ret;
  switch (country) {
    case "China":
      ret = "Shipping to China will cost 100 credits";
      break;
    case "Chile":
      ret = "Shipping to Chile will cost 250 credits";
      break;
    case "Australia":
      ret = "Shipping to Australia will cost 170 credits";
      break;
    case "Jamaica":
      ret = "Shipping to Jamaica will cost 120 credits";
      break;
    default:
      ret = "Sorry, there is no delivery to your country";
  }
  return ret;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
