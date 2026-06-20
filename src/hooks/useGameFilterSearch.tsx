// src/hooks/useGameFilterSearch.tsx
import { useState, useCallback } from "react";
import type { Game, GameSearchResponse, GameSearchParams } from "../components/props/ArchiveProps.tsx";
import { normalizeGameSearchResult } from "../components/utilis/normalizeGameSearchResult.tsx";

const SEARCH_URL = "https://cqft3ppix5lafhomkq83xeeb.204.168.159.152.sslip.io/api/games/games/search/";

export function useGameFilterSearch() {
  const [games, setGames] = useState<Game[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (params: GameSearchParams) => {
    setLoading(true);
    setError(null);

    try {
      const query = new URLSearchParams(
        Object.entries(params)
          .filter(([, value]) => value !== undefined && value !== "")
          .map(([key, value]) => [key, String(value)])
      );
      query.set("limit", "200");

      const response = await fetch(`${SEARCH_URL}?${query.toString()}`);
      if (!response.ok) throw new Error(`Errore ${response.status}`);

      const json: GameSearchResponse = await response.json();
      setGames(json.results.map(normalizeGameSearchResult));
      setCount(json.count);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore sconosciuto");
    } finally {
      setLoading(false);
    }
  }, []);

  return { games, count, loading, error, search };
}