// generic archive props (platforms / genres / developers)

// --- risposta liste paginate (platforms, developers, publishers) ---
export interface PaginatedListResponse<T> {
  count: number;
  page: number;
  page_size: number;
  results: T[];
}

// --- parametri ricerca giochi filtrata ---
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

// --- risposta lista giochi (search, e in generale /games/) ---
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

// --- risposta GREZZA di /games/games/search/ (campi nested come stringhe JSON) ---
export interface GameSearchResult {
  game_id: number;
  title: string;
  year: string | null;
  moby_score: number | null;
  esrb_rating: string | null;
  developers: string; // JSON-encoded array, va parsato
  description: string | null;
  main_cover_url: string | null;
  platforms: string;  // JSON-encoded array, va parsato
  genres: string;      // JSON-encoded object, va parsato
}

export interface GameSearchResponse {
  count: number;
  results: GameSearchResult[];
}