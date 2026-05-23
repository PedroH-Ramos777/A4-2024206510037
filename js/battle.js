import { fetchCharacter, MAX_CHARACTERS } from './api.js';
import { pageState, scores, resetScoresState, resetPlayerState } from './state.js';
import { parseKiValue } from './utils.js';
import {
  goToStep,
  showLoading,
  hideLoading,
  updateCardUI,
  showBattleButton,
  highlightCards,
  updateScoreUI,
  showModal,
  closeModalUI,
  resetCardsUI,
  toggleMenu
} from './ui.js';

export async function generateCharacter(player) {
  const number = String(Math.floor(Math.random() * MAX_CHARACTERS) + 1);

  showLoading(player);

  try {
    const data = await fetchCharacter(number);

    const state = pageState[`player${player}`];
    state.personagem = data.name || "Desconhecido";
    state.ki = data.ki || "N/A";
    state.maxKi = data.maxKi || "N/A";
    state.image = data.image || "";
    state.grupo = data.affiliation || "N/A";
    state.natureza = data.race || "N/A";
    state.exibir = true;

    updateCardUI(player, state);
  } catch (err) {
    console.warn(`Personagem ${number} não encontrado (buraco na API). Buscando outro...`);
    return generateCharacter(player);
  }

  hideLoading(player);

  if (player === 1 && !pageState.player2.exibir) {
    setTimeout(() => {
      goToStep(2);
      generateCharacter(2);
    }, 1200);
  } else if (player === 2) {
    setTimeout(() => {
      checkBattleReady();
    }, 1200);
  }
}

export function checkBattleReady() {
  if (pageState.player1.exibir && pageState.player2.exibir) {
    goToStep(3);
    showBattleButton();
  }
}

export function startBattle() {
  const p1 = pageState.player1;
  const p2 = pageState.player2;

  const ki1 = parseKiValue(p1.maxKi);
  const ki2 = parseKiValue(p2.maxKi);

  let winner, loser, winnerPlayer;
  if (ki1 >= ki2) {
    winner = p1; loser = p2; winnerPlayer = 1;
  } else {
    winner = p2; loser = p1; winnerPlayer = 2;
  }

  highlightCards(winnerPlayer);

  if (winnerPlayer === 1) scores.p1++; else scores.p2++;
  scores.total++;
  
  updateScoreUI(scores);
  showModal(winner);
}

export function resetCards() {
  resetCardsUI();
  resetPlayerState(1);
  resetPlayerState(2);
  goToStep(1);
}

export function handleCloseModal() {
  closeModalUI();
  resetCards();
}

export function handleResetScores() {
  resetScoresState();
  updateScoreUI(scores);
  toggleMenu();
}
