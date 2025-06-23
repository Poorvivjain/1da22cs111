function login() {
  const USERNAME = "admin";
  const PASSWORD = "pass";
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === USERNAME && pass === PASSWORD) {
    window.location.href = "appointment.html";
  } else {
    document.getElementById("error").innerText = "Invalid username or password.";
  }
}
