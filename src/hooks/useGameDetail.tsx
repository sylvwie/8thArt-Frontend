// import { useState } from "react";

// export function useGameDetail() {
//   const [results, setResults] = useState([]);

//   const gamedetail = async (query: string) => {
// 	if (!query.trim()) {
// 	  setResults([]);
// 	  return;
// 	}

// 	try {
// 	  const response = await fetch(
// 		`https://cqft3ppix5lafhomkq83xeeb.204.168.159.152.sslip.io/api/games/game/` // endpoint ???
// 	  );
// 	  const json = await response.json();
//       setResults(json.results);

// 	} catch (error) {
// 	  console.error("Error fetching game details:", error);
// 	}
//   };

// 	return {
// 		results,
// 		gamedetail,
// 	}
// }