// src/hooks/useLookupList.tsx
import { useState, useCallback } from "react";
import type { PaginatedListResponse } from "../components/props/ArchiveProps.tsx";

const BASE_URL = "https://cqft3ppix5lafhomkq83xeeb.204.168.159.152.sslip.io/api/games";

type LookupEndpoint = "platforms" | "developers";

export function useLookupList(endpoint: LookupEndpoint) {
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchList = useCallback(async (search: string = "") => {
    setLoading(true);
    setError(null);

    try {
      const firstUrl = `${BASE_URL}/${endpoint}/?search=${encodeURIComponent(search)}&page=1&page_size=200`;
      const firstResponse = await fetch(firstUrl);
      if (!firstResponse.ok) throw new Error(`Errore ${firstResponse.status} su ${endpoint}`);

      const firstJson: PaginatedListResponse<string> = await firstResponse.json();
      let allResults = [...firstJson.results];
	  
      const totalPages = Math.ceil(firstJson.count / firstJson.page_size);

      if (totalPages > 1) {
        const remainingPages = Array.from({ length: totalPages - 1 }, (_, i) => i + 2);
        const responses = await Promise.all(
          remainingPages.map((page) =>
            fetch(`${BASE_URL}/${endpoint}/?search=${encodeURIComponent(search)}&page=${page}&page_size=${firstJson.page_size}`)
              .then((r) => r.json() as Promise<PaginatedListResponse<string>>)
          )
        );
        for (const r of responses) {
          allResults = allResults.concat(r.results);
        }
      }

      setItems(allResults);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore sconosciuto");
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  return { items, loading, error, fetchList };
}