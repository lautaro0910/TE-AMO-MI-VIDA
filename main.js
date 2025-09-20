onload = () =>{
    const titulo = document.querySelector(".titulo");

const frases = [
  "Estas flores amarillas son un reflejo de la alegría que traes a mi vida.",
  "Gracias por iluminar mis días con tu presencia.",
  "Tu sonrisa florece más que cualquier primavera.",
  "Este regalo es solo un reflejo de lo que siento por vos.",
  "TE AMO INFINITAMENTE MI VIDA ❤️",
];

let actual = 0;
let index = 0;

function escribirFrase() {
  if (index < frases[actual].length) {
    titulo.innerHTML += frases[actual].charAt(index);
    index++;
    setTimeout(escribirFrase, 60);
  } else {
    setTimeout(() => {
      actual++;
      if (actual < frases.length) {
        index = 0;
        titulo.innerHTML = "";
        escribirFrase();
      }
    }, 3000); // espera 3 segundos antes de la próxima frase
  }
}

escribirFrase();
    document.body.classList.remove("container");

};