// Controle do carrossel
const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");
const dots = document.querySelectorAll(".dot");

let contador = 0;
let larguraImagem = box.clientWidth; // Largura dinâmica da imagem

// Ajusta a largura ao redimensionar a janela
window.addEventListener("resize", () => {
  larguraImagem = box.clientWidth;
  updateSliderPosition();
});

// Função para atualizar a posição do slider
function updateSliderPosition() {
  box.style.transform = `translateX(${-contador * larguraImagem}px)`;
  updateActiveDot();
}

// Atualiza o ponto ativo
function updateActiveDot() {
  dots.forEach((dot, index) => {
    if (index === contador) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Função para mover o carrossel para o próximo slide
function slider() {
  contador++;

  if (contador > imagens.length - 1) {
    contador = 0;
  }

  updateSliderPosition();
}

// Intervalo para a transição automática
let intervalo = setInterval(slider, 2000);

// Pausar o carrossel ao passar o mouse
box.addEventListener("mouseenter", () => clearInterval(intervalo));
box.addEventListener("mouseleave", () => {
  intervalo = setInterval(slider, 2000);
});

// Função para navegação manual ao clicar nos pontos
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    contador = index;
    updateSliderPosition();
  });
});

// Navegação pelos botões
document.getElementById("prev").addEventListener("click", () => {
  contador--;
  if (contador < 0) {
    contador = imagens.length - 1;
  }
  updateSliderPosition();
});

document.getElementById("next").addEventListener("click", () => {
  contador++;
  if (contador > imagens.length - 1) {
    contador = 0;
  }
  updateSliderPosition();
});

// Inicializa a posição do carrossel e os pontos
updateSliderPosition();



// Funções para botões interativos
const toggleButtons = document.querySelectorAll(".toggle-button");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const hiddenText = button.nextElementSibling;
    if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
      hiddenText.style.display = "block";
    } else {
      hiddenText.style.display = "none";
    }
  });
});
