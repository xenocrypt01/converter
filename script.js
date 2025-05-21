const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const resultText = document.getElementById("result");

// Load currency options
const currencies = ["USD", "KES", "EUR", "GBP", "INR", "JPY", "ZAR", "NGN"];

currencies.forEach(currency => {
  const option1 = document.createElement("
