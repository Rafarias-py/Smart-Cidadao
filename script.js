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

// Deixando a barra de pesquisa funcional para rolar até a seção

document.querySelector('.caixa-busca').addEventListener('submit', function(e) {
  e.preventDefault();
  const termo = document.getElementById('input-busca').value.toLowerCase().trim();
  
  let secaoAlvo = null;

  if (termo.includes('problema') || termo.includes('inicio') || termo.includes('início')) {
    secaoAlvo = document.getElementById('problema');
  } else if (termo.includes('tecnologia')) {
    secaoAlvo = document.getElementById('tecnologia');
  } else if (termo.includes('objetivo')) {
    secaoAlvo = document.getElementById('objetivos');
  } else if (termo.includes('público') || termo.includes('publico')) {
    secaoAlvo = document.getElementById('publico');
  } else if (termo.includes('benefício') || termo.includes('beneficio')) {
    secaoAlvo = document.getElementById('beneficios');
  }

  if (secaoAlvo) {
    secaoAlvo.scrollIntoView({ behavior: 'smooth' });
  } else {
    alert('Seção não encontrada. Tente buscar por: Problema, Tecnologia, Objetivos, Público-alvo ou Benefícios.');
  }
});

