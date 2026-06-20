
import type { Game, GameSearchResult } from "../props/ArchiveProps.tsx";

function safeParseArray(value: string): string[] {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function safeParseGenres(value: string): Record<string, string[]> {
  try {
    const parsed = JSON.parse(value);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

export function normalizeGameSearchResult(raw: GameSearchResult): Game {
  return {
    game_id: raw.game_id,
    title: raw.title,
    year: raw.year,
    moby_score: raw.moby_score,
    description: raw.description,
    developers: safeParseArray(raw.developers),
    esrb_rating: raw.esrb_rating,
    main_cover_url: raw.main_cover_url,
    platforms: safeParseArray(raw.platforms),
    genres: safeParseGenres(raw.genres),
  };
}