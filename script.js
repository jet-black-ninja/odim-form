const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirm-password");
const confirmPasswordOutput = document.querySeclector(
  "#confirm-password-output"
);
confirmPasswordField.addEventListener("input", () => {
  if (passwordField.value == confirmPasswordField.value) {
    confirmPasswordField.style.backgroundColor = "green";
  } else {
    confirmPasswordField.style.backgroundColor = "red";
    confirmPasswordOutput.textContent = "*Passwords Do no match";
  }
});
