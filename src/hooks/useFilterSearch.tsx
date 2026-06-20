// src/hooks/useFilterSearch.tsx
import { useState, useCallback } from "react";
import { useFilters } from "./useFilters.tsx";
import type { Game, GameSearchResponse } from "../components/props/ArchiveProps.tsx";
import type { FiltersState, FilterOptions } from "../components/props/FilterProps.tsx";
import { normalizeGameSearchResult } from "../components/utilis/normalizeGameSearchResult.tsx";

const SEARCH_URL = "https://cqft3ppix5lafhomkq83xeeb.204.168.159.152.sslip.io/api/games/games/search/";

export function useFilterSearch() {
  const { filters: rawFilters, loading: optionsLoading, error: optionsError } = useFilters();

  // FilterOptions per la UI (flat string[], come da FilterProps.tsx)
  const filterOptions: FilterOptions = {
    genres: rawFilters?.genres?.["Genre"] ?? [],
    platforms: rawFilters?.platforms ?? [],
    years: rawFilters?.years ?? [],
  };

  const [filters, setFilters] = useState<FiltersState>({
    genres: [],
    platforms: [],
    years: [],
  });

  const [results, setResults] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleFilter = (type: keyof FiltersState, value: string) => {
    setFilters((prev) => {
      const exists = prev[type].includes(value);
      return {
        ...prev,
        [type]: exists
          ? prev[type].filter((v) => v !== value)
          : [...prev[type], value],
      };
    });
  };

  const resetFilters = () => {
    setFilters({ genres: [], platforms: [], years: [] });
  };

  // AND tra categorie, OR dentro la stessa categoria, via combinazioni + merge/dedupe
  const search = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const genreList = filters.genres.length ? filters.genres : [undefined];
      const platformList = filters.platforms.length ? filters.platforms : [undefined];
      const yearList = filters.years.length ? filters.years : [undefined];

      const combinations: { genre_value?: string; platform?: string; year?: string }[] = [];
      for (const genre_value of genreList) {
        for (const platform of platformList) {
          for (const year of yearList) {
            combinations.push({ genre_value, platform, year });
          }
        }
      }

      const batches = await Promise.all(
        combinations.map(async ({ genre_value, platform, year }) => {
          const params = new URLSearchParams({ limit: "200" });
          if (genre_value) {
            params.set("genre_category", "Genre");
            params.set("genre_value", genre_value);
          }
          if (platform) params.set("platform", platform);
          if (year) params.set("year", year);

          const response = await fetch(`${SEARCH_URL}?${params.toString()}`);
          if (!response.ok) throw new Error(`Errore ${response.status}`);
          const json: GameSearchResponse = await response.json();
          return json.results;
        })
      );

      const merged = new Map<number, Game>();
      for (const batch of batches) {
        for (const raw of batch) {
          const game = normalizeGameSearchResult(raw);
          merged.set(game.game_id, game);
        }
      }

      setResults(Array.from(merged.values()));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore sconosciuto");
    } finally {
      setLoading(false);
    }
  }, [filters]);

  return {
    results,
    loading,
    error,
    filters,
    filterOptions,
    optionsLoading,
    optionsError,
    toggleFilter,
    resetFilters,
    search,
  };
}