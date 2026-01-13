const auth = JSON.parse(localStorage.getItem("auth"));

if (!auth || !auth.loggedIn) {
  window.location.href = "/pages/auth/login.html";
}

// ROLE-BASED ACCESS CONTROL
const page = window.location.pathname;

if (page.includes("admin") && auth.role !== "admin") {
  alert("Unauthorized access ❌");
  window.location.href = "/index.html";
}

if (page.includes("teacher") && auth.role !== "teacher") {
  alert("Unauthorized access ❌");
  window.location.href = "/index.html";
}

if (page.includes("student") && auth.role !== "student") {
  alert("Unauthorized access ❌");
  window.location.href = "/index.html";
}

function logout() {
  localStorage.removeItem("auth");
  window.location.href = "/index.html";
}
