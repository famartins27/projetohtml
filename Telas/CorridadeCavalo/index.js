let track = document.querySelector(".kodfun");
let result = document.querySelector(".result");
const horses = [...document.querySelectorAll(".kodfun>img")];
let pos = horses.map(h => 0);
const btn = document.querySelector(".kodfun>button");
const rand = () => Math.random() * 10;
let timerId = null;
function start() {
  if (timerId < 0) {
    result.style.display = "none";
    pos.fill(0);
    for (const h of horses) 
      h.style.marginLeft = "0px";
    btn.textContent = "START";
    timerId = null;
  }
  else if (timerId) {
    clearInterval(timerId);
    timerId = null;
    btn.textContent = "CONTINUE";
  }
  else {
    timerId = setInterval(go, 100);
    btn.textContent = "PAUSE";
  }
}
function go() {
  let max = -1;
  let winner = null;
  for (const i in horses) {
    horses[i].style.marginLeft = (pos[i] += rand()) + "px";
    if (pos[i] > max) {
      max = pos[i];
      winner = horses[i];
    }
  }
  if (max > track.offsetWidth - (32 + horses[0].offsetWidth)) {
    start();
    result.style.display = "block";
    result.textContent = "The champion is " + winner.alt;
    btn.textContent = "RESTART";
    timerId = -1;
  }
}

btn.onclick = start;