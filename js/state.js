export const pageState = {
  player1: { personagem: "", natureza: "", grupo: "", ki: "", maxKi: "", exibir: false, image: "" },
  player2: { personagem: "", natureza: "", grupo: "", ki: "", maxKi: "", exibir: false, image: "" }
};

export const scores = { p1: 0, p2: 0, total: 0 };

export function resetScoresState() {
  scores.p1 = 0;
  scores.p2 = 0;
  scores.total = 0;
}

export function resetPlayerState(player) {
  pageState[`player${player}`] = {
    personagem: "", natureza: "", grupo: "", ki: "", maxKi: "", exibir: false, image: ""
  };
}
