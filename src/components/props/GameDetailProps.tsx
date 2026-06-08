export interface Cover {
  id: number;
  url: string;
  group_id: number;
  platform: string;
  description: string;
}

export interface Screenshot {
  id: number;
  url: string;
  platform: string;
  description: string;
}

export interface SimilarGame {
  game_id: number;
  title: string;
  moby_score: number;
  year: string;
  description_short: string | null;
  main_cover_url: string;
  genres: Record<string, string[]>;
  developers: string[];
}

export interface GameDetailProps {
  game_id: number;
  title: string;
  url: string;
  moby_score: number;
  year: string;
  description: string;
  description_short: string | null;
  esrb_rating: string | null;
  main_cover_url: string;
  alternate_titles: string[];
  platforms: string[];
  genres: Record<string, string[]>;
  publishers: string[];
  developers: string[];
  covers: Cover[];
  screenshots: Screenshot[];

  similar_games?: SimilarGame[];
}