function logout() {
  localStorage.clear();
  window.location.href = "/index.html";
}

// active menu click effect
const menuItems = document.querySelectorAll(".sidebar li");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// AUTH CHECK
const isLoggedIn = localStorage.getItem("isLoggedIn");
const role = localStorage.getItem("role");
const userId = localStorage.getItem("userId");

if (!isLoggedIn || role !== "student") {
  window.location.href = "pages/auth/student-login.html";
}

// SHOW LOGGED USER ID
if (userId) {
  document.getElementById("loggedUser").innerText = userId;
}
document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");
  const userId = localStorage.getItem("userId");

  if (!isLoggedIn || role !== "student") {
    window.location.href = "pages/auth/student-login.html";
    return;
  }

  const userSpan = document.getElementById("loggedUser");
  if (userSpan && userId) {
    userSpan.textContent = userId;
  }
});

