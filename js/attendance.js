const canvas = document.getElementById("attendanceChart");
const ctx = canvas.getContext("2d");

const percentage = 82;
const radius = 100;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// background circle
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
ctx.strokeStyle = "#e5e7eb";
ctx.lineWidth = 14;
ctx.stroke();

// progress arc
ctx.beginPath();
ctx.arc(
  centerX,
  centerY,
  radius,
  -Math.PI / 2,
  (2 * Math.PI * percentage) / 100 - Math.PI / 2
);
ctx.strokeStyle = "#2563eb";
ctx.lineWidth = 14;
ctx.stroke();

// text
ctx.font = "24px Segoe UI";
ctx.fillStyle = "#111";
ctx.textAlign = "center";
ctx.fillText(`${percentage}%`, centerX, centerY + 8);
