//variable dont on a besoin
let sp, btn_start, btn_stop, t, s, ms, mn, h;
//initialisation des valeurs quand charge la page
window.onload = function () {
  sp = document.getElementsByTagName("span");
  btn_start = document.getElementById("btn_start");
  btn_stop = document.getElementById("btn_stop");
  t;
  ms = 0;
  mn = 0;
  s = 0;
  h = 0;
};
//les fonctions utiles pour actionner les boutons

function updateChrono() {
  ms += 1;
  if (ms == 10) {
    s += 1;
    ms = 0;
  }
  if (s == 60) {
    mn += 1;
    s = 0;
  }
  if (mn == 60) {
    h += 1;
    mn = 0;
  }

  sp[0].innerHTML = h + " h ";
  sp[1].innerHTML = mn + " min ";
  sp[2].innerHTML = s + " s ";
  sp[3].innerHTML = ms + " ms";
}

function start() {
  t = setInterval(updateChrono, 100);
  btn_start.disabled = true;
}

function stop() {
  clearInterval(t);
  btn_start.disabled = false;
}

function reset() {
  clearInterval(t);

  h = 0;
  mn = 0;
  s = 0;
  ms = 0;
  sp[0].innerHTML = h + " h ";
  sp[1].innerHTML = mn + " min ";
  sp[2].innerHTML = s + " s ";
  sp[3].innerHTML = ms + " ms";

  btn_start.disabled = false;
}
