const TAMANHO_MINIMO = 14;
const TAMANHO_MAXIMO = 22;
let tamanhoAtual = 16;

const botaoAumentar = document.getElementById("aumentar-texto");
const botaoDiminuir = document.getElementById("diminuir-texto");
const botaoContraste = document.getElementById("alternar-contraste");

function mudarTamanho(passo) {
  tamanhoAtual = Math.min(TAMANHO_MAXIMO, Math.max(TAMANHO_MINIMO, tamanhoAtual + passo));
  document.documentElement.style.fontSize = tamanhoAtual + "px";
}

botaoAumentar.addEventListener("click", () => mudarTamanho(1));
botaoDiminuir.addEventListener("click", () => mudarTamanho(-1));

botaoContraste.addEventListener("click", () => {
  const ativado = document.body.classList.toggle("alto-contraste");
  botaoContraste.setAttribute("aria-pressed", ativado);
});