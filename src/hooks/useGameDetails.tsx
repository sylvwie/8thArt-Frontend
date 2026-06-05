// import { useEffect, useState } from "react";

// const BASE_URL = "https://cqft3ppix5lafhomkq83xeeb.204.168.159.152.sslip.io/api/games/game";

// export interface Game {
//   game_id: number;
//   title: string;
//   url?: string;
//   description?: string;
//   moby_score?: number;
//   year?: string;
//   esrb_rating?: string;
//   main_cover_url?: string;
//   // json
//   alternate_titles?: string;
//   platforms?: string;
//   genres?: string;
//   publishers?: string;
//   developers?: string;
//   covers?: string;
//   screenshots?: string;
// }

// interface UseGameDetailsResult {
//   game: Game | null;
//   loading: boolean;
//   error: string | null;
// }

// export function useGameDetails(id: number | string): UseGameDetailsResult {
//   const [game, setGame] = useState<Game | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!id) return;

//     setLoading(true);
//     setError(null);

//     fetch(`${BASE_URL}/games/${id}/`)
//       .then((res) => {
//         if (!res.ok) throw new Error(`Errore ${res.status}`);
//         return res.json();
//       })
//       .then((data: Game) => {
//         setGame(data);
//       })
//       .catch((err: Error) => {
//         setError(err.message);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [id]);

//   return { game, loading, error };
// }