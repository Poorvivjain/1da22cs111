function adminLogin() {
  const username = document.getElementById("adminUsername").value.trim();
  const password = document.getElementById("adminPassword").value.trim();
  const error = document.getElementById("adminError");

  if (username === "admin" && password === "1234") {
    window.location.href = "doctor.html"; // Redirect to doctor management
  } else {
    error.textContent = "Invalid admin credentials!";
  }
}
