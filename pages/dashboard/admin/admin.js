/* ===============================
   FIXED ADMIN ACCOUNTS
   (NO SIGNUP)
=============================== */

const ADMINS = [
  { id: "ram shahi", password: "2071" },
  { id: "ADM002", password: "Admin@456" }
];

/* ===============================
   ADMIN LOGIN ONLY
=============================== */
function adminLogin(event) {
  event.preventDefault();

  const adminId = document.getElementById("adminId").value;
  const password = document.getElementById("adminPassword").value;

  const validAdmin = ADMINS.find(
    a => a.id === adminId && a.password === password
  );

  if (!validAdmin) {
    alert("Invalid Admin ID or Password");
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("role", "admin");
  localStorage.setItem("userId", adminId);

  window.location.href = "/pages/dashboard/admin/admin.html";
}

/* ===============================
   ADMIN LOGOUT
=============================== */
function adminLogout() {
  localStorage.clear();
  window.location.href = "/index.html";
}
