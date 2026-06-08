import { useState, useEffect } from "react";
import type { GameDetailProps } from "../components/props/GameDetailProps.tsx";

const BASE_URL = "https://cqft3ppix5lafhomkq83xeeb.204.168.159.152.sslip.io/api";

export function useGameDetail(gameId: string | undefined) {
  const [game, setGame] = useState<GameDetailProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!gameId) return;

    const fetchGame = async () => {
      setLoading(true);
      setError(null);

      const doFetch = async () => {
        const res = await fetch(`${BASE_URL}/games/game/${gameId}/`);
        if (!res.ok) throw new Error(`Errore ${res.status}`);
        return res.json() as Promise<GameDetailProps>;
      };

      try {
        let data: GameDetailProps;
        try {
          data = await doFetch();
        } catch {
          await new Promise((r) => setTimeout(r, 300));
          data = await doFetch();
        }
        setGame(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [gameId]);

  return { game, loading, error };
}