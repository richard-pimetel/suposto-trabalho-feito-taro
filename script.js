'use strict';

const API_ALL_CARDS = "https://tarotapi.dev/api/v1/cards";
const API_RANDOM_CARD = "https://tarotapi.dev/api/v1/cards/random";



// Listas de cartas dos Arcanos Maiores e Menores
const arcanosMaiores = [
  "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
  "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
  "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
  "The Devil", "The Tower", "The Star", "The Moon", "The Sun",
  "Judgement", "The World"
];

const arcanosMenores = [
  "Ace of Wands", "Two of Cups", "Three of Swords", "Four of Pentacles",
  "Five of Wands", "Six of Cups", "Seven of Swords", "Eight of Pentacles",
  "Nine of Wands", "Ten of Cups", "Page of Swords", "Knight of Pentacles",
  "Queen of Wands", "King of Cups"
];

async function fetchRandomCard() {
  try {
    const response = await fetch(API_RANDOM_CARD);

    // Verifica se a resposta da API é válida
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Dados da API:", data); // Log para depuração

    // Verifica se a carta foi retornada corretamente
    if (data.cards && data.cards.length > 0) {
      const cartaSorteada = data.cards[0]; // Pega a primeira carta do array

      // Atualiza o card com os dados da carta
      const randomCard = document.getElementById('random-card');
      randomCard.innerHTML = `
        <h3>${cartaSorteada.name}</h3>
      `;

      // Adiciona evento de clique para abrir a modal
      randomCard.addEventListener('click', () => {
        openModal(cartaSorteada); // Abre a modal com os dados da carta
      });
    } else {
      console.error("Erro: Nenhuma carta recebida da API.");
      const randomCard = document.getElementById('random-card');
      randomCard.innerHTML = `
        <h3>Erro ao buscar carta.</h3>
      `;
    }
  } catch (error) {
    console.error("Erro ao buscar carta aleatória:", error);
    const randomCard = document.getElementById('random-card');
    randomCard.innerHTML = `
      <h3>Erro ao buscar carta.</h3>
    `;
  }
}

// Adiciona o evento ao botão de sortear carta
document.getElementById('draw-card-button').addEventListener('click', fetchRandomCard);

const cartasLocais = [
  // Arcanos Maiores (22 cartas)
  {
    name: "O Louco",
    meaning_up: "Novos começos, espontaneidade, aventura.",
    image_url: "./img/card branco.png"
  },
  {
    name: "O Mago",
    meaning_up: "Vontade, habilidade, criatividade."
  },
  {
    name: "A Sacerdotisa",
    meaning_up: "Intuição, mistério, sabedoria interior."
  },
  {
    name: "A Imperatriz",
    meaning_up: "Fertilidade, abundância, maternidade."
  },
  {
    name: "O Imperador",
    meaning_up: "Autoridade, estrutura, controle."
  },
  {
    name: "O Hierofante",
    meaning_up: "Tradição, espiritualidade, orientação."
  },
  {
    name: "Os Enamorados",
    meaning_up: "Amor, relacionamentos, escolhas."
  },
  {
    name: "O Carro",
    meaning_up: "Determinação, vitória, progresso."
  },
  {
    name: "A Força",
    meaning_up: "Coragem, paciência, controle emocional."
  },
  {
    name: "O Eremita",
    meaning_up: "Reflexão, introspecção, sabedoria."
  },
  {
    name: "A Roda da Fortuna",
    meaning_up: "Mudança, sorte, ciclos da vida."
  },
  {
    name: "A Justiça",
    meaning_up: "Equilíbrio, justiça, responsabilidade."
  },
  {
    name: "O Enforcado",
    meaning_up: "Sacrifício, pausa, nova perspectiva."
  },
  {
    name: "A Morte",
    meaning_up: "Transformação, fim de um ciclo, renovação."
  },
  {
    name: "A Temperança",
    meaning_up: "Equilíbrio, moderação, harmonia."
  },
  {
    name: "O Diabo",
    meaning_up: "Tentação, materialismo, vícios."
  },
  {
    name: "A Torre",
    meaning_up: "Mudança brusca, caos, revelação."
  },
  {
    name: "A Estrela",
    meaning_up: "Esperança, inspiração, fé."
  },
  {
    name: "A Lua",
    meaning_up: "Intuição, ilusão, subconsciente."
  },
  {
    name: "O Sol",
    meaning_up: "Alegria, sucesso, vitalidade."
  },
  {
    name: "O Julgamento",
    meaning_up: "Renascimento, avaliação, despertar."
  },
  {
    name: "O Mundo",
    meaning_up: "Conclusão, realização, plenitude."
  },

  // Arcanos Menores - Naipe de Copas (14 cartas)
  {
    name: "Ás de Copas",
    meaning_up: "Amor, felicidade, novas emoções."
  },
  {
    name: "Dois de Copas",
    meaning_up: "União, parceria, conexão emocional."
  },
  {
    name: "Três de Copas",
    meaning_up: "Celebração, amizade, alegria compartilhada."
  },
  {
    name: "Quatro de Copas",
    meaning_up: "Apatia, reflexão, necessidade de mudança."
  },
  {
    name: "Cinco de Copas",
    meaning_up: "Perda, arrependimento, superação."
  },
  {
    name: "Seis de Copas",
    meaning_up: "Nostalgia, lembranças, bondade."
  },
  {
    name: "Sete de Copas",
    meaning_up: "Escolhas, ilusões, sonhos."
  },
  {
    name: "Oito de Copas",
    meaning_up: "Abandono, busca por significado."
  },
  {
    name: "Nove de Copas",
    meaning_up: "Satisfação, realização, contentamento."
  },
  {
    name: "Dez de Copas",
    meaning_up: "Felicidade completa, harmonia familiar."
  },
  {
    name: "Valete de Copas",
    meaning_up: "Sensibilidade, notícias emocionais."
  },
  {
    name: "Cavaleiro de Copas",
    meaning_up: "Romance, charme, idealismo."
  },
  {
    name: "Rainha de Copas",
    meaning_up: "Compaixão, amor incondicional."
  },
  {
    name: "Rei de Copas",
    meaning_up: "Emoções equilibradas, sabedoria emocional."
  },

  // Arcanos Menores - Naipe de Espadas (14 cartas)
  {
    name: "Ás de Espadas",
    meaning_up: "Clareza mental, novas ideias, verdade."
  },
  {
    name: "Dois de Espadas",
    meaning_up: "Decisão difícil, equilíbrio, escolha."
  },
  {
    name: "Três de Espadas",
    meaning_up: "Dor emocional, traição, coração partido."
  },
  {
    name: "Quatro de Espadas",
    meaning_up: "Descanso, recuperação, introspecção."
  },
  {
    name: "Cinco de Espadas",
    meaning_up: "Conflito, derrota, egoísmo."
  },
  {
    name: "Seis de Espadas",
    meaning_up: "Transição, mudança, superação."
  },
  {
    name: "Sete de Espadas",
    meaning_up: "Engano, estratégia, furtividade."
  },
  {
    name: "Oito de Espadas",
    meaning_up: "Restrição, limitação, autolibertação."
  },
  {
    name: "Nove de Espadas",
    meaning_up: "Ansiedade, medo, pesadelos."
  },
  {
    name: "Dez de Espadas",
    meaning_up: "Fim doloroso, traição, renovação."
  },
  {
    name: "Valete de Espadas",
    meaning_up: "Curiosidade, mente afiada, observação."
  },
  {
    name: "Cavaleiro de Espadas",
    meaning_up: "Ação rápida, ambição, determinação."
  },
  {
    name: "Rainha de Espadas",
    meaning_up: "Clareza, independência, justiça."
  },
  {
    name: "Rei de Espadas",
    meaning_up: "Autoridade, intelecto, julgamento."
  },

  // Arcanos Menores - Naipe de Paus (14 cartas)
  {
    name: "Ás de Paus",
    meaning_up: "Inspiração, novas oportunidades, energia."
  },
  {
    name: "Dois de Paus",
    meaning_up: "Planejamento, progresso, decisão."
  },
  {
    name: "Três de Paus",
    meaning_up: "Expansão, crescimento, colaboração."
  },
  {
    name: "Quatro de Paus",
    meaning_up: "Celebração, harmonia, realização."
  },
  {
    name: "Cinco de Paus",
    meaning_up: "Conflito, competição, desafio."
  },
  {
    name: "Seis de Paus",
    meaning_up: "Vitória, reconhecimento, sucesso."
  },
  {
    name: "Sete de Paus",
    meaning_up: "Determinação, perseverança, desafio."
  },
  {
    name: "Oito de Paus",
    meaning_up: "Movimento rápido, progresso, notícias."
  },
  {
    name: "Nove de Paus",
    meaning_up: "Resiliência, força, persistência."
  },
  {
    name: "Dez de Paus",
    meaning_up: "Carga pesada, responsabilidade, esforço."
  },
  {
    name: "Valete de Paus",
    meaning_up: "Entusiasmo, energia, aventura."
  },
  {
    name: "Cavaleiro de Paus",
    meaning_up: "Ação, paixão, impulso."
  },
  {
    name: "Rainha de Paus",
    meaning_up: "Confiança, independência, vitalidade."
  },
  {
    name: "Rei de Paus",
    meaning_up: "Liderança, visão, inspiração."
  },

  // Arcanos Menores - Naipe de Ouros (14 cartas)
  {
    name: "Ás de Ouros",
    meaning_up: "Prosperidade, novos começos, abundância."
  },
  {
    name: "Dois de Ouros",
    meaning_up: "Equilíbrio, adaptação, multitarefa."
  },
  {
    name: "Três de Ouros",
    meaning_up: "Colaboração, trabalho em equipe, progresso."
  },
  {
    name: "Quatro de Ouros",
    meaning_up: "Estabilidade, conservação, controle."
  },
  {
    name: "Cinco de Ouros",
    meaning_up: "Dificuldade financeira, isolamento, perda."
  },
  {
    name: "Seis de Ouros",
    meaning_up: "Generosidade, compartilhamento, ajuda."
  },
  {
    name: "Sete de Ouros",
    meaning_up: "Paciência, investimento, planejamento."
  },
  {
    name: "Oito de Ouros",
    meaning_up: "Dedicação, artesanato, aprendizado."
  },
  {
    name: "Nove de Ouros",
    meaning_up: "Abundância, luxo, autossuficiência."
  },
  {
    name: "Dez de Ouros",
    meaning_up: "Riqueza, herança, estabilidade familiar."
  },
  {
    name: "Valete de Ouros",
    meaning_up: "Aprendizado, novas habilidades, curiosidade."
  },
  {
    name: "Cavaleiro de Ouros",
    meaning_up: "Trabalho duro, responsabilidade, paciência."
  },
  {
    name: "Rainha de Ouros",
    meaning_up: "Praticidade, segurança, generosidade."
  },
  {
    name: "Rei de Ouros",
    meaning_up: "Sucesso financeiro, liderança, estabilidade."
  }
];
function sortearCartaLocal() {
  const cartaSorteada = cartasLocais[Math.floor(Math.random() * cartasLocais.length)];
  document.getElementById('random-card-name').textContent = cartaSorteada.name;
  document.getElementById('random-card-description').textContent = cartaSorteada.meaning_up;
}

// Adicione o evento ao botão
document.getElementById('draw-card-button').addEventListener('click', fetchRandomCard);


// Função para abrir a modal
function openModal(card) {
  const modal = document.getElementById('modal');
  const modalCardName = document.getElementById('modal-card-name');
  const modalCardDescription = document.getElementById('modal-card-description');

  // Preenche a modal com os dados da carta
  modalCardName.textContent = card.name;
  modalCardDescription.textContent = card.meaning_up;

  // Exibe a modal
  modal.style.display = 'flex';
}

// Função para fechar a modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Adiciona evento de clique ao botão de fechar a modal
document.querySelector('.close-modal').addEventListener('click', closeModal);

// Fecha a modal ao clicar fora dela
window.addEventListener('click', (event) => {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
});

async function searchCards(query) {
  try {
    // Verifica se a pesquisa está vazia
    if (!query.trim()) {
      const searchResults = document.getElementById('search-results');
      searchResults.innerHTML = '<p>Por favor, digite algo para pesquisar.</p>';
      return; // Sai da função se a pesquisa estiver vazia
    }

    const response = await fetch(API_ALL_CARDS);
    const data = await response.json();
    const cards = data.cards || [];

    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';

    let filteredCards = [];

    // Verifica se a pesquisa é por "Arcanos Maiores" ou "Arcanos Menores"
    if (query.toLowerCase() === "arcanos maiores") {
      filteredCards = cards.filter(card => arcanosMaiores.includes(card.name));
    } else if (query.toLowerCase() === "arcanos menores") {
      filteredCards = cards.filter(card => arcanosMenores.includes(card.name));
    } else {
      // Pesquisa por nome específico da carta
      filteredCards = cards.filter(card => card.name.toLowerCase().includes(query.toLowerCase()));
    }

    if (filteredCards.length > 0) {
      filteredCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card-item';
        cardElement.innerHTML = `
          <h3>${card.name}</h3>
        `;

        // Adiciona evento de clique para abrir a modal
        cardElement.addEventListener('click', () => {
          openModal(card); // Abre a modal com os dados da carta
        });

        searchResults.appendChild(cardElement);
      });
    } else {
      searchResults.innerHTML = '<p>Nenhuma carta encontrada.</p>';
    }
  } catch (error) {
    console.error("Erro ao pesquisar cartas:", error);
  }
}

// Eventos dos botões
document.getElementById('draw-card-button').addEventListener('click', fetchRandomCard);
document.getElementById('search-button').addEventListener('click', () => {
  const query = document.getElementById('search-input').value;
  searchCards(query);
});
