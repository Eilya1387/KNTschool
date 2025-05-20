function toggleForm(formType) {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (formType === "login") {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
  } else if (formType === "signup") {
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
  }
}
function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const strengthBar = document.getElementById("strength-bar");
  const conditions = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[\W_]/.test(password),
  };

  let strength = 0;
  Object.keys(conditions).forEach((key) => {
    const conditionElement = document.getElementById(key);
    if (conditions[key]) {
      strength++;
      conditionElement.classList.add("fulfilled");
    } else {
      conditionElement.classList.remove("fulfilled");
    }
  });

  strengthBar.style.width = `${strength * 25}%`;
  strengthBar.style.height = "10px";
  strengthBar.style.backgroundColor = strength === 4 ? "green" : "red";
}
