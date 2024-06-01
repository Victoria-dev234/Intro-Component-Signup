const form = document.getElementById("form");
const email = document.getElementById("email");
const inputs = document.querySelectorAll("input");
const errorIcons = document.querySelectorAll(".error_icon");
const errorMessages = document.querySelectorAll(".error_message");
const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
console.log(email);

const errMessages = {
  FirstName: "First Name cannot be empty",
  LastName: "Last Name cannot be empty",
  email: "Looks like this is not an email",
  password: "Password cannot be empty",
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const validEmail = email.value.trim().match(regex);

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const errorIcon = errorIcons[i];
    const errorMessage = errorMessages[i];

    if (!input.value.trim()) {
      email.placeholder = "email@example/com";
      input.style.border = "1px solid #ff7a7a";
      errorIcon.style.display = "block";
      errorMessage.textContent = errMessages[input.name];

      setTimeout(() => {
        email.placeholder = "Email Address";
        input.style.border = "1px solid #b9b6d36b";
        errorIcon.style.display = "none";
        errorMessage.textContent = "";
      }, 2000);
    } else if (input.type === "email" && !validEmail) {
      input.style.border = "1px solid #ff7a7a";
      errorIcon.style.display = "block";
      errorMessage.textContent = errMessages[input.name];

      setTimeout(() => {
        input.style.border = "1px solid #b9b6d36b";
        errorIcon.style.display = "none";
        errorMessage.textContent = "";
      }, 2000);
    } else {
      input.style.border = "1px solid #38cc8c";
      errorIcon.style.display = "none";
      errorMessage.textContent = "";

      setTimeout(() => {
        input.style.border = "1px solid #b9b6d36b";
        errorIcon.style.display = "none";
        errorMessage.textContent = "";
      }, 2000);
    }
  }
});
