// setting user input to localstorage
export const getItem = () => {
  const userInputMail = document.querySelector("#mail").value;
  const userInputPw = document.querySelector("#pw").value;

  //if user dont type  both or one of the user login info ,it doest set user input to localstorage
  if (userInputMail.length === 0 || userInputPw.length === 0) {
    console.log("ops");
  } else {
    localStorage.setItem("mail", userInputMail);
    localStorage.setItem("password", userInputPw);
  }
};
