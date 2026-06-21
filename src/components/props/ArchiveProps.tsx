// generic archive props (platforms / genres / developers)

// --- lists (platforms, developers, publishers) ---
export interface PaginatedListResponse<T> {
  count: number;
  page: number;
  page_size: number;
  results: T[];
}

// --- search params games filtered ---
export interface GameSearchParams {
  q?: string;
  platform?: string;
  year?: string;
  genre_category?: string;
  genre_value?: string;
  developer?: string;
  publisher?: string;
  esrb_rating?: string;
}

// --- game list (search and /games/) ---
export interface GameGenres {
  [category: string]: string[];
}

export interface Game {
  game_id: number;
  title: string;
  year: string | null;
  moby_score: number | null;
  description: string | null;
  developers: string[];
  esrb_rating: string | null;
  main_cover_url: string | null;
  platforms: string[];
  genres: GameGenres;
}

export interface GameListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

// --- raw /games/games/search/ ---
export interface GameSearchResult {
  game_id: number;
  title: string;
  year: string | null;
  moby_score: number | null;
  esrb_rating: string | null;
  developers: string; // JSON-encoded array
  description: string | null;
  main_cover_url: string | null;
  platforms: string;  // JSON-encoded array
  genres: string;     // JSON-encoded object
}

export interface GameSearchResponse {
  count: number;
  results: GameSearchResult[];
}