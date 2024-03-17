function updateClock() {
  const today = new Date();
  const hour = today.getHours().toString();
  const minutes = today.getMinutes().toString().padStart(2, "0");
  const seconds = today.getSeconds().toString().padStart(2, "0");
  const date = today.toDateString();

  if (document.getElementById("hour").innerText !== hour) {
    document.getElementById("hour").innerText = hour;
  }

  if (document.getElementById("minute").innerText !== minutes) {
    document.getElementById("minute").innerText = minutes;
  }

  if (document.getElementById("second").innerText !== seconds) {
    document.getElementById("second").innerText = seconds;
  }

  if (document.getElementById("date").innerText !== date) {
    document.getElementById("date").innerText = date;
  }
}

setInterval(updateClock, 1000);
