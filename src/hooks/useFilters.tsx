// games/filter -> useFilters for es. { Genre: [...], Gameplay: [...], Interface: [...], Perspective: [...] }
import { useState, useEffect, useCallback } from "react";

const FILTERS_URL = "https://cqft3ppix5lafhomkq83xeeb.204.168.159.152.sslip.io/api/games/filters/";

export interface FiltersResponse {
  platforms: string[];
  years: string[];
  esrb_ratings: string[];
  genres: Record<string, string[]>;
}

export function useFilters() {
  const [filters, setFilters] = useState<FiltersResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFilters = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(FILTERS_URL);
      if (!response.ok) throw new Error(`Errore ${response.status}`);
      const json: FiltersResponse = await response.json();
      setFilters(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore sconosciuto");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFilters();
  }, [fetchFilters]);

  return { filters, loading, error };
}