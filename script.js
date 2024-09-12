const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hour = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  horas.textContent = hour;
  minutos.textContent = min;
  segundos.textContent = sec;
});

function displayPhraseAppreciation() {
  const phrases = [
    "Bom dia! Que seu café seja forte e sua segunda-feira curta... se possível.",
    "Levante e brilhe... ou pelo menos tente não tropeçar na própria sombra hoje.",
    "Bom dia! Que hoje você conquiste o mundo... ou pelo menos termine essa lista de tarefas.",
    "Se o dia começar difícil, lembre-se: você já sobreviveu a dias piores.",
    "Bom dia! E lembre-se: procrastinar é arte, mas o prazo não perdoa.",
    "Acorda, guerreiro! O boleto não paga sozinho.",
    "Bom dia! A única coisa entre você e o sucesso é... a vontade de sair da cama.",
    "Levante e lute, porque a cama pode ser confortável, mas não paga as contas.",
    "Bom dia! Mais um dia para fazer o seu melhor... ou pelo menos tentar parecer ocupado.",
    "Acorde! O sucesso não vem para quem dorme. Nem para quem reclama. Só para quem finge que gosta.",
    "Bom dia! Lembre-se: o otimismo é a chave... e o sarcasmo, a senha.",
    "Se a vida te dá limões, faça uma limonada... ou só devolva e peça café. Bom dia!",
    "Levante e encare o dia como um desafio do qual não podemos fugir... literalmente.",
    "Bom dia! E lembre-se: a diferença entre um sonho e um objetivo é o número de alarmes que você ignora.",
    "Acorde, porque dormir é bom, mas rir das ironias da vida é melhor.",
  ];

  const randomIndex = Math.floor(Math.random() * phrases.length);
  const selectedPhrases = phrases[randomIndex];

  document.getElementById("frases").textContent = selectedPhrases;
}

window.onload = displayPhraseAppreciation;
