export const API_BASE = "https://dragonball-api.com/api/characters/";
export const MAX_CHARACTERS = 78;

export async function fetchCharacter(number) {
  const response = await fetch(API_BASE + number);
  if (!response.ok) throw new Error("API Error: " + response.status);
  return await response.json();
}
