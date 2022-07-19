import { createCoinBox } from "./infoBox.js";

export async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Request failed!");
  }

  return data;
}

export async function getCoins(data) {
  const urlApi =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1#";
  {
    try {
      data = await fetchData(urlApi);
      const results = data;
      const userInterface = document.getElementById("user-interface");
      const mainBox = document.createElement("div");
      const navBox = document.createElement("div");
      navBox.classList.add("navbar");
      mainBox.appendChild(navBox);
      mainBox.classList.add("main-div");
      userInterface.appendChild(mainBox);

      results.forEach((coin) => {
        const symbol = coin.symbol;
        const option = document.createElement("div");
        option.classList.add("coin-options");

        option.setAttribute("id", `${coin.id}`);
        option.innerHTML = String.raw`
        <div class="coins">
        <h1>${symbol.toUpperCase()}</h1>
        </div>
        `;

        navBox.appendChild(option);

        option.addEventListener("click", async () => {
          const currentID = option.getAttribute("id");
          createCoinBox(currentID);
        });
      });
      window.localStorage.clear();
    } catch (error) {
      console.error(error.message);
    }
  }
}
