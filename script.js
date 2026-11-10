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
