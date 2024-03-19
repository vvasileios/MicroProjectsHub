setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let meridiem = document.getElementById("meridiem");

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  let dotHours = document.querySelector(".h_dot");
  let dotMinutes = document.querySelector(".m_dot");
  let dotSeconds = document.querySelector(".s_dot");

  let newHours = new Date().getHours();
  let newMinutes = new Date().getMinutes();
  let newSeconds = new Date().getSeconds();
  let system = newHours >= 12 ? "PM" : "AM";

  if (newHours > 12) {
    newHours = newHours - 12;
  }

  newHours = newHours < 10 ? "0" + newHours : newHours;
  newMinutes = newMinutes < 10 ? "0" + newMinutes : newMinutes;
  newSeconds = newSeconds < 10 ? "0" + newSeconds : newSeconds;

  hours.innerHTML = newHours;
  minutes.innerHTML = newMinutes;
  seconds.innerHTML = newSeconds;
  meridiem.innerHTML = system;

  hh.style.strokeDashoffset = 440 - (440 * newHours) / 12;
  mm.style.strokeDashoffset = 440 - (440 * newMinutes) / 60;
  ss.style.strokeDashoffset = 440 - (440 * newSeconds) / 60;

  dotHours.style.transform = `rotate(${newHours * 30}deg)`;
  dotMinutes.style.transform = `rotate(${newMinutes * 6}deg)`;
  dotSeconds.style.transform = `rotate(${newSeconds * 6}deg)`;
}, 1000);
