// src/utils/normalizeToGameInfo.ts
import type { GameInfo } from "../games/GameCard.tsx";
import type { Game } from "../props/ArchiveProps.tsx";
import gameCoverTemplate from "/src/assets/template/game-cover-template.png";

export function normalizeToGameInfo(game: Game): GameInfo {
  return {
    game_id: game.game_id,
    rating: game.esrb_rating ?? "Unrated",
    coverImage: game.main_cover_url ?? gameCoverTemplate,
    title: game.title,
    description: game.description ?? "",
    genres: game.genres["Genre"] ?? [],
    developer: game.developers.length ? game.developers.join(", ") : "Unknown",
    release: game.year ?? "TBA",
  };
}