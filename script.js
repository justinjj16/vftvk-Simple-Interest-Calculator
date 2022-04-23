const compute = () => {
  const elementsValues = getElementsValues();
  let element = document.getElementById("result-container");
  element.classList.remove("hidden");
  const { principal, rate, years } = elementsValues;
  showDisplay(principal, rate, years);
};

const updateTextInput = (val) => {
  document.getElementById("output").value = val;
  const elementsValues = getElementsValues();
  const { principal, rate, years } = elementsValues;
  showDisplay(principal, rate, years);
};
const handleEvent = () => {
  const elementsValues = getElementsValues();
  const { principal, rate, years } = elementsValues;
  showDisplay(principal, rate, years);
};

const getElementsValues = () => {
  let principal = document.getElementById("principal").value;
  let rate = document.getElementById("rate").value;
  let years = document.getElementById("years").value;
  return { principal, rate, years };
};

const showDisplay = (principal, rate, years) => {
  document.getElementById("principalOutput").innerHTML = principal;
  document.getElementById("rateOutput").innerHTML = rate;
  const getYear = new Date().getFullYear();
  document.getElementById("yearsOutput").innerHTML = getYear + parseInt(years);
  let result = (principal * rate * years) / 100;
  document.getElementById("result").innerHTML = result;
};
