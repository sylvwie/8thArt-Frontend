import { useState, useCallback } from "react";
import type { CrossReferenceProps } from "../components/props/CrossReferenceProps";

const BASE_URL = "https://cqft3ppix5lafhomkq83xeeb.204.168.159.152.sslip.io/api";

export function useCrossReferenceSearch() {
  const [results, setResults] = useState<CrossReferenceProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async ({
    q,
    image,
    count = 5,
  }: {
    q?: string;
    image?: File;
    count?: number;
  }) => {
    if (!q?.trim() && !image) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    const doFetch = async () => {
      const csrfToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("csrftoken="))
        ?.split("=")[1] ?? "";

      const formData = new FormData();
      if (q)     formData.append("q", q);
      if (image) formData.append("image", image);
      formData.append("count", String(count));

      return fetch(`${BASE_URL}/games/crosssearch/`, {
        method: "POST",
        headers: { "X-CSRFToken": csrfToken },
        body: formData,
      });
    };

    try {
      let response = await doFetch();

      // se 500, ritenta una volta sola dopo 300ms
      if (response.status === 500) {
        await new Promise((r) => setTimeout(r, 300));
        response = await doFetch();
      }

      if (!response.ok) throw new Error(`Errore ${response.status}`);

      const json: CrossReferenceProps[] = await response.json();
      setResults(json);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, loading, error, search };
}