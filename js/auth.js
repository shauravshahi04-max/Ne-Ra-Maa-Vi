/* =========================
   SIGNUP FUNCTION
========================= */
function signup(event, role) {
  event.preventDefault();

  const id = document.getElementById(`${role}Id`).value;
  const password = document.getElementById(`${role}Password`).value;

  const storageKey = role + "s";
  const users = JSON.parse(localStorage.getItem(storageKey)) || [];

  if (users.some(u => u.id === id)) {
    alert("Account already exists. Please login.");
    return;
  }

  users.push({ id, password });
  localStorage.setItem(storageKey, JSON.stringify(users));

  /* ===============================
     CREATE STUDENT RECORD (ONCE)
  =============================== */
  if (role === "student") {
    const studentRecords =
      JSON.parse(localStorage.getItem("studentRecords")) || {};

    studentRecords[id] = {
      id,
      name: "",
      class: "",
      section: "",
      attendance: 0,
      results: {},
      feesStatus: "Unpaid"
    };

    localStorage.setItem(
      "studentRecords",
      JSON.stringify(studentRecords)
    );
  }

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("role", role);
  localStorage.setItem("userId", id);

  window.location.href = `/pages/dashboard/student/student.html`;
}



/* =========================
   LOGIN FUNCTION
========================= */
function login(event, role) {
  event.preventDefault();

  const id = document.getElementById(`${role}Id`).value;
  const password = document.getElementById(`${role}Password`).value;

  const storageKey = role + "s";
  const users = JSON.parse(localStorage.getItem(storageKey)) || [];

  const validUser = users.find(
    u => u.id === id && u.password === password
  );

  // ✅ FIRST validate
  if (!validUser) {
    alert("Invalid ID or Password");
    return;
  }

  // ✅ THEN login + redirect
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("role", role);
  localStorage.setItem("userId", id);

  window.location.href = `/pages/dashboard/student/student.html`;
}


/* =========================
   LOGOUT
========================= */
function logout() {
  localStorage.clear();
  window.location.href = "/index.html";
}

