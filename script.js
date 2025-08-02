const botao = document.getElementById("botaoGalactico");
const titulo = document.getElementById("titulo");
const frases = [
  "🌌 Evento ativado nas estrelas!",
  "🛸 Conexão interestelar detectada.",
  "💫 Você clicou e algo brilhou!",
  "🚀 addEventListener em velocidade da luz!"
];

let contador = 0;
let animando = false;

botao.addEventListener("click", () => {
  contador++;

  // 1. Altera o título com uma frase aleatória
  const frase = frases[Math.floor(Math.random() * frases.length)];
  titulo.textContent = frase;

  // 2. Gira o botão
  botao.classList.add("girar");
  setTimeout(() => botao.classList.remove("girar"), 400);

  // 3. Alterna o fundo entre dois gradientes animados
  document.body.style.background = contador % 2 === 0
    ? "linear-gradient(135deg, #0f0c29, #302b63, #24243e)"
    : "linear-gradient(135deg, #1b003a, #240058)";

  // 4. Ativa/desativa partículas de estrelas
  animando = !animando;
});

// Estrelas animadas
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let stars = Array.from({ length: 100 }, () => ({
  x: Math.random() * width,
  y: Math.random() * height,
  radius: Math.random() * 1.5 + 0.5,
  speed: Math.random() * 0.5 + 0.2,
}));

function drawStars() {
  if (!animando) return;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "white";

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();

    star.y += star.speed;
    if (star.y > height) star.y = 0;
  });

  requestAnimationFrame(drawStars);
}

drawStars();
window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
