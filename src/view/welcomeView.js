import { SUBMIT_USER_INFOS } from "../pages/constant.js";

export const createWelcomeElement = () => {
  const containerElement = document.createElement("div");
  containerElement.classList.add("main-container");
  containerElement.innerHTML = String.raw`
    <div class="welcomeContent">
    <h1> Lets manage your investments </h1>
    <div class="formDiv">
    <form>
 
  <input type="text" class="login-form" id="mail" name="fname" placeholder="Email or Username"><br>  
  
  <input type="password" class="login-form" id="pw" name="lname" placeholder="Password">
</form>
    <div class="sign-div">
    <button class="sign-btn" id="SignUpBtn">Sign up</button>
<button class="sign-btn" id="${SUBMIT_USER_INFOS}">Sign in</button>
</div>
<div class="errorBox"></div>
    `;

  return containerElement;
};
