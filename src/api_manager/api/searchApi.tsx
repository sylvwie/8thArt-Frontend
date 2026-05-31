// import type { SearchResult } from "../types/Search";

// const BASE_URL =
//   "https://cqft3ppix5lafhomkq83xeeb.dverso.io/api/games/games/search/";

// export async function fetchSearchResults(
//   query: string,
//   signal?: AbortSignal
// ): Promise<SearchResult[]> {
//   const response = await fetch(
//     `${BASE_URL}?q=${encodeURIComponent(query)}`,
//     {
//       signal,
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Search request failed");
//   }

//   const data = await response.json();

//   return data.results ?? [];
// }