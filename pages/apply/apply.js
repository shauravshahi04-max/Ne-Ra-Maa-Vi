document.getElementById("applyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("✅ Application submitted successfully!\nOur team will contact you soon.");

  this.reset();
});
