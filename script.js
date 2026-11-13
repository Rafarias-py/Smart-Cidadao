    const slides = [
      {
        src: "imagens/buraco.jpg",
        alt: "Buraco na via urbana"
      },
      {
        src: "imagens/buraco2.jpg",
        alt: "Outro buraco em via urbana"
      },
      {
        src: "imagens/arvore-caida.jpeg",
        alt: "Árvore caída em área urbana"
      },
      {
        src: "imagens/enchentes2.jpg",
        alt: "Alagamento em área urbana"
      },
      {
        src: "imagens/fiossoltos.jpg",
        alt: "Fios soltos em área urbana"
      },
      {
        src: "imagens/Lixo, no centro.jpg",
        alt: "Lixo acumulado no centro da cidade"
      },
      {
        src: "imagens/moradores-de-rua.jpg",
        alt: "Moradores em situação de rua"
      },
      {
        src: "imagens/poda de arvore.jpg",
        alt: "Poda de árvore em área urbana"
      }
    ];

    const carousel = document.querySelector("#carousel-track");

    slides.forEach((slide, index) => {
      const image = document.createElement("img");
      image.className = "carousel-image";
      image.src = slide.src;
      image.alt = slide.alt;
      image.title = "SmartCidadão";
      image.draggable = false;
      image.style.setProperty("--angle", `${index * (360 / slides.length)}deg`);
      carousel.append(image);
    });

const requestDialog = document.querySelector("#request-dialog");
const requestForm = document.querySelector("#request-form");
const requestFeedback = document.querySelector("#request-feedback");
const photosInput = document.querySelector("#request-photos");

document.querySelector("#open-request")?.addEventListener("click", () => requestDialog.showModal());

document.querySelectorAll("[data-close-request]").forEach((button) => {
  button.addEventListener("click", () => requestDialog.close());
});

photosInput?.addEventListener("change", () => {
  photosInput.setCustomValidity(
    photosInput.files.length > 4 ? "Selecione no máximo 4 fotos." : ""
  );
});

requestForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  requestFeedback.textContent = "Informações preenchidas e validadas. O envio ainda não está conectado a um serviço.";
  requestFeedback.dataset.state = "success";
});

// Deixando a barra de pesquisa funcional para rolar até a seção, quando presente.
const searchForm = document.querySelector(".caixa-busca");

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const termo = document.getElementById("input-busca").value.toLowerCase().trim();
  let secaoAlvo = null;

  if (termo.includes("problema") || termo.includes("inicio") || termo.includes("início")) {
    secaoAlvo = document.getElementById("problema");
  } else if (termo.includes("tecnologia")) {
    secaoAlvo = document.getElementById("tecnologia");
  } else if (termo.includes("objetivo")) {
    secaoAlvo = document.getElementById("objetivos");
  } else if (termo.includes("público") || termo.includes("publico")) {
    secaoAlvo = document.getElementById("publico");
  } else if (termo.includes("benefício") || termo.includes("beneficio")) {
    secaoAlvo = document.getElementById("beneficios");
  }

  if (secaoAlvo) {
    secaoAlvo.scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Seção não encontrada. Tente buscar por: Problema, Tecnologia, Objetivos, Público-alvo ou Benefícios.");
  }
});
