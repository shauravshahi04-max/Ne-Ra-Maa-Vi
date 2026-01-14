// FAKE DATABASE (acts like backend)
const USERS_DB = [
  { id: 1, role: "student", username: "student1", password: "1234" },
  { id: 2, role: "teacher", username: "teacher1", password: "1234" },
  { id: 3, role: "admin",   username: "admin",    password: "admin123" }
];

// Read role from URL (?role=student)
const params = new URLSearchParams(window.location.search);
const roleFromURL = params.get("role");

if (roleFromURL) {
  document.getElementById("role").value = roleFromURL;
}

function login() {
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation
  if (!username || !password) {
    alert("All fields required");
    return;
  }

  // Backend-style user lookup
  const user = USERS_DB.find(
    u =>
      u.role === role &&
      u.username === username &&
      u.password === password
  );

  if (!user) {
    alert("Invalid credentials ❌");
    return;
  }

  // Create SESSION (like backend session/JWT)
  localStorage.setItem("auth", JSON.stringify({
    loggedIn: true,
    userId: user.id,
    role: user.role,
    username: user.username
  }));

  // Redirect by role
  window.location.href = `/pages/dashboard/${user.role}.html`;
}

