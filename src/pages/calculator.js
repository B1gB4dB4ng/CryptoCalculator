export function createCalculate() {
  const outputs = document.querySelectorAll(".math-result");
  //removing result of calculation if exist
  outputs.forEach((output) => {
    output.remove();
  });

  const infoBox = document.querySelector(".info-box");
  const coinName = document.querySelector("#name").textContent;
  const userMoney = document.getElementById("money-input").value;
  const currentPrice = document.querySelector("#price").textContent;
  const calculation = userMoney / currentPrice;
  const calculationMessage = isNaN(calculation)
    ? "Please enter a valid number"
    : "You can buy " + calculation + " " + coinName;
  const showResult = document.createElement("div");
  showResult.classList.add("math-result");
  showResult.innerHTML = String.raw`<div id="result-message">
  <p>${calculationMessage} </p></div>
  `;
  infoBox.appendChild(showResult);
}
