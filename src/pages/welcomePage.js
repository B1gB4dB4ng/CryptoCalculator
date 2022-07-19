"use strict";

import { SUBMIT_USER_INFOS } from "./constant.js";
import { createWelcomeElement } from "../view/welcomeView.js";
import { USER_INTERFACE_ID } from "./constant.js";
import { getItem } from "./singUp.js";

import { getCoins } from "./getCoin.js";
import { createUserInfoBox } from "./userInfoBox.js";

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);
  document.getElementById("SignUpBtn").addEventListener("click", getItem);
  document.getElementById(SUBMIT_USER_INFOS).addEventListener("click", start);
};

const start = () => {
  const boxes = document.querySelectorAll(".invalid-msg");
  boxes.forEach((box) => {
    box.remove();
  });
  const registeredMail = window.localStorage.getItem("mail");
  const registeredPw = window.localStorage.getItem("password");
  const logInMail = document.querySelector("#mail").value;
  const logInPw = document.querySelector("#pw").value;

  if (localStorage.getItem("mail") === null) {
    const emptyMsg = document.createElement("div");
    const loginContainer = document.querySelector(".errorBox");
    emptyMsg.classList.add("invalid-msg");
    emptyMsg.innerHTML = String.raw`
  <p>Please type your informations</p>`;
    loginContainer.appendChild(emptyMsg);
  } else {
    const invalidMsg = document.createElement("div");
    const loginContainer = document.querySelector(".errorBox");
    invalidMsg.classList.add("invalid-msg");
    invalidMsg.innerHTML = String.raw`
  <p>Please type valid user informations </p>`;
    loginContainer.appendChild(invalidMsg);
  }

  if (registeredMail === logInMail && registeredPw === logInPw) {
    const loginBox = document.querySelector(".main-container");
    loginBox.remove();
    getCoins();
    createUserInfoBox();
  }
};
