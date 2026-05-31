import { useState } from "react";

export function useGameSearch() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://cqft3ppix5lafhomkq83xeeb.204.168.159.152.sslip.io/api/games/games/search/?q=${encodeURIComponent(query)}`
      );

      const json = await response.json();
      setResults(json.results);
    } finally {
      setLoading(false);
    }
  };

  return {
    results,
    loading,
    search,
  };
}