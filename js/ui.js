// ===== PARTICLE BACKGROUND =====
export function createParticles() {
  const container = document.getElementById("bgParticles");
  const colors = ["#ff6a00", "#ffd700", "#00b4ff", "#ff2d55", "#a855f7"];
  for (let i = 0; i < 35; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration:${Math.random() * 8 + 6}s;
      animation-delay:${Math.random() * 10}s;
    `;
    container.appendChild(p);
  }
}

// ===== WIZARD STEPS =====
export function goToStep(step) {
  const arena = document.getElementById("battleArena");
  arena.className = `battle-arena step-${step}`;
}

export function showLoading(player) {
  const btn = document.getElementById(`btn${player}Play`);
  const loader = document.getElementById(`loader${player}`);
  const charImg = document.getElementById(`char${player}Image`);

  btn.classList.add("hidden");
  loader.classList.add("active");
  charImg.classList.remove("visible");
}

export function hideLoading(player) {
  const loader = document.getElementById(`loader${player}`);
  loader.classList.remove("active");
}

// ===== UPDATE CARD UI =====
export function updateCardUI(player, state) {
  const charImg = document.getElementById(`char${player}Image`);
  const stack = document.getElementById(`card${player}Stack`);

  // Set character image
  charImg.src = state.image;
  charImg.onload = () => {
    charImg.classList.add("visible");
    stack.classList.add("revealed");
  };
  charImg.onerror = () => {
    charImg.src = "https://dragonball-api.com/characters/goku_normal.webp";
    charImg.classList.add("visible");
  };

  // Set text fields
  document.getElementById(`char${player}Name`).textContent = state.personagem;
  document.getElementById(`char${player}Ki`).textContent = state.ki;
  document.getElementById(`char${player}MaxKi`).textContent = state.maxKi;
  document.getElementById(`char${player}Race`).textContent = state.natureza;
  document.getElementById(`char${player}Affiliation`).textContent = state.grupo;
}

export function showBattleButton() {
  const btnBattle = document.getElementById("btnBattle");
  btnBattle.classList.add("visible");
}

export function highlightCards(winnerPlayer) {
  const stack1 = document.getElementById("card1Stack");
  const stack2 = document.getElementById("card2Stack");
  stack1.classList.remove("winner-card", "loser-card");
  stack2.classList.remove("winner-card", "loser-card");

  if (winnerPlayer === 1) {
    stack1.classList.add("winner-card");
    stack2.classList.add("loser-card");
  } else {
    stack2.classList.add("winner-card");
    stack1.classList.add("loser-card");
  }
}

export function updateScoreUI(scores) {
  document.getElementById("score1").textContent = scores.p1;
  document.getElementById("score2").textContent = scores.p2;
  document.getElementById("totalBattles").textContent = scores.total;
}

export function showModal(winner) {
  const modal = document.getElementById("battleModal");
  document.getElementById("winnerImage").src = winner.image;
  document.getElementById("winnerName").textContent = winner.personagem;
  document.getElementById("winnerStats").innerHTML = `
    Ki: ${winner.ki}<br>
    Max Ki: ${winner.maxKi}<br>
    Raça: ${winner.natureza}<br>
    Grupo: ${winner.grupo}
  `;
  modal.classList.add("active");
}

export function closeModalUI() {
  const modal = document.getElementById("battleModal");
  modal.classList.remove("active");
}

export function resetCardsUI() {
  for (const player of [1, 2]) {
    const btn = document.getElementById(`btn${player}Play`);
    const charImg = document.getElementById(`char${player}Image`);
    const stack = document.getElementById(`card${player}Stack`);

    btn.classList.remove("hidden");
    charImg.classList.remove("visible");
    charImg.src = "";
    stack.classList.remove("revealed", "winner-card", "loser-card");
    stack.style.filter = "";

    document.getElementById(`char${player}Name`).textContent = "???";
    document.getElementById(`char${player}Ki`).textContent = "---";
    document.getElementById(`char${player}MaxKi`).textContent = "---";
    document.getElementById(`char${player}Race`).textContent = "---";
    document.getElementById(`char${player}Affiliation`).textContent = "---";
  }

  document.getElementById("btnBattle").classList.remove("visible");
}

// ===== MENU =====
export function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("menuOverlay");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}
