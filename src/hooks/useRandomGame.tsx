// import { useState, useEffect } from "react";

// const BASE_URL = "https://cqft3ppix5lafhomkq83xeeb.204.168.159.152.sslip.io/api";

// interface RandomGame {
//   game_id: number;
//   title: string;
//   year: string;
//   moby_score: number;
//   esrb_rating: string;
//   main_cover_url: string;
//   platforms: string;
//   genres: string;
// }

// export function useRandomGame() {
//   const [game, setGame] = useState<RandomGame | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${BASE_URL}/games/games/random/`)
//       .then((res) => res.json())
//       .then((data: RandomGame[]) => setGame(data[0] ?? null))
//       .catch(() => setGame(null))
//       .finally(() => setLoading(false));
//   }, []);

//   return { game, loading };
// }