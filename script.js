const login = document.getElementById("login-here");

const createAccountDiv = document.getElementById("create-account");
const loginDiv = document.getElementById("login");
const forgotPwDiv = document.getElementById("forgot-pw");

const forgotPassword = document.getElementById("forgot-password");

login.addEventListener("click", () => {
  createAccountDiv.classList.add("hidden");
  loginDiv.classList.toggle("hidden");
});

forgotPassword.addEventListener("click", () => {
  loginDiv.classList.toggle("hidden");
  forgotPwDiv.classList.toggle("hidden");
});