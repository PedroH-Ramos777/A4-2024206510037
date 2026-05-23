import { createParticles, toggleMenu, goToStep } from './ui.js';
import { generateCharacter, startBattle, handleCloseModal, handleResetScores } from './battle.js';

document.addEventListener("DOMContentLoaded", () => {
  // Inicialização
  createParticles();
  goToStep(1);

  // Event Listeners - Menu
  document.getElementById("btnMenu").addEventListener("click", toggleMenu);
  document.getElementById("btnCloseMenu").addEventListener("click", toggleMenu);
  document.getElementById("menuOverlay").addEventListener("click", toggleMenu);
  document.getElementById("btnResetScores").addEventListener("click", handleResetScores);

  // Event Listeners - Jogo
  document.getElementById("btn1Play").addEventListener("click", () => generateCharacter(1));
  document.getElementById("btn2Play").addEventListener("click", () => generateCharacter(2));
  document.getElementById("btnBattle").addEventListener("click", startBattle);
  
  // Event Listeners - Modal
  document.getElementById("btnRematch").addEventListener("click", handleCloseModal);
});
