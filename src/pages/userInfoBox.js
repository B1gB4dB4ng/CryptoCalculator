export const createUserInfoBox = () => {
  const userInterface = document.getElementById("user-interface");
  const registeredMail = window.localStorage.getItem("mail");
  const userInfoBox = document.createElement("div");
  userInfoBox.classList.add("user-info-box");
  userInfoBox.innerHTML = String.raw`
<p>${registeredMail}</p>
`;
  userInterface.appendChild(userInfoBox);
};
