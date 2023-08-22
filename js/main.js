let btn, frm, txt;//Variables
let sound, btn_play, btn_stop;
window.onload = () => {
  sound = new Howl({
    src: ['https://res.cloudinary.com/jusanta/video/upload/v1692589288/audio/the-beat-of-nature-122841_g4nciq.mp3'],
    html5: true
  });

  btn_play = document.getElementById("btn_play");
  btn_stop = document.getElementById("btn_stop");
  btn = document.getElementById("btn_enviar");

  btn.addEventListener("click", enviar);
  btn_play.addEventListener("click", reproducir); btn_stop.addEventListener("click", detener);

  function reproducir(event) {
    btn_play.classList.add("ocultar");
    btn_stop.classList.remove("ocultar");
    sound.play();
  }

  function detener(event) {
    btn_play.classList.remove("ocultar");
    btn_stop.classList.add("ocultar");
    sound.pause();
  }

  function enviar(event) {
    frm = document.getElementById("formulario");
    if (frm.checkValidity()) {
      txt = document.getElementById("boletin");
      txt.value = "";
      alert("¡Gracias por registrarte!");
      event.preventDefault();
    }

  }
  animar();

}
function animar() {
  gsap.to("#btn_play", { rotation: 360, x: 100, duration: 1 });
}