import { useEffect, useState } from "react";
import type { GameDetailProps } from "../components/props/GameDetailProps";
import type { FiltersState, FilterOptions } from "../components/props/FilterProps";

const BASE_URL =
  "https://cqft3ppix5lafhomkq83xeeb.204.168.159.152.sslip.io/api";

export function useFilterSearch() {
  const [results, setResults] = useState<GameDetailProps[]>([]);
  const [loading, setLoading] = useState(false);

	const [filters, setFilters] = useState<FiltersState>({
		genres: [],
		platforms: [],
		years: [],
	});

  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    genres: [],
    platforms: [],
    years: [],
  });

  // LOAD FILTER OPTIONS
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const res = await fetch(`${BASE_URL}/games/filters/`);
        const data = await res.json();

        setFilterOptions({
          genres: data.genres ?? [],
          platforms: data.platforms ?? [],
          years: data.years ?? [],
        });
      } catch (err) {
        console.error("Filter fetch error", err);
      }
    };

    fetchFilters();
  }, []);

  // TOGGLE FILTER
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

  // SEARCH
  const search = async () => {
    setLoading(true);

    try {
      const params = new URLSearchParams();

      if (filters.genres.length)
        params.append("genres", filters.genres.join(","));

      if (filters.platforms.length)
        params.append("platforms", filters.platforms.join(","));

      if (filters.years.length)
        params.append("years", filters.years.join(","));

      const res = await fetch(`${BASE_URL}/games/?${params.toString()}`);
      const data = await res.json();

      setResults(Array.isArray(data) ? data : data.results ?? []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    results,
    loading,
    filters,
    filterOptions,
    toggleFilter,
    search,
  };
}