const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const digital = document.querySelector(".digital");
const f = x => x.toString().length == 1 ? "0" + x : x;


function showTime() {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let ao = 180; // angle offset
  let secondAngle = (s / 60) * 360;
  let minuteAngle = (m / 60) * 360 + secondAngle / 60;
  let hourAngle = (h % 12 / 12) * 360 + minuteAngle / 12;
  hour.style.transform = `rotate(${hourAngle + ao}deg)`;
  minute.style.transform = `rotate(${minuteAngle + ao}deg)`;
  second.style.transform = `rotate(${secondAngle + ao}deg)`;
  digital.textContent = `${f(h)}:${f(m)}:${f(s)}`;
}

setInterval(showTime, 1000);