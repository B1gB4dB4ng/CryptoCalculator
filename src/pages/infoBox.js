import { fetchData } from "./getCoin.js";
import { createCalculate } from "./calculator.js";

//removing infobox if any exist to clear on each click
export async function createCoinBox(currentID) {
  const boxes = document.querySelectorAll(".info-box");
  boxes.forEach((box) => {
    box.remove();
  });
  // getting coin name from with eventlistener and implemeting in the api url
  const apUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${currentID}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h
        `;

  // getting data  and creating infobox
  try {
    const [coin] = await fetchData(apUrl);
    const mainBox = document.querySelector(".main-div");
    const currentPriceOfCoin = coin.current_price;
    const infoBox = document.createElement("div");
    infoBox.classList.add("info-box");
    //I am getting price of coin for calculation from html element I added dolar sign late so I didnt notice the bug
    //I fixed it with using double span in <p>
    infoBox.innerHTML = String.raw`
        <p id="name">${coin.name}</p>
        <p >Current Price: <span id="price">  ${currentPriceOfCoin}</span> <span>$<span></p>
        <p id="allTime">All time high price: ${coin.ath}$</p>
        <p id="priceChange">In 24 hours: ${coin.price_change_percentage_24h}%</p>
        <img class="coin-img" src="${coin.image}"></img>
        <div id="calculate-box"><br><label>Please write amount of money you want to invest</label><br><br>
        <div id="calculate-div">
        <input id="money-input" value="" type="text" placeholder="Please write amount of money"></input>
        <button id="calculate-btn">Calculate</button>
        </div>
        </div>
        `;
    mainBox.appendChild(infoBox);
    document.getElementById("calculate-btn").addEventListener("click", () => {
      createCalculate();
    });
  } catch (error) {
    console.log(error.message);
  }
}
