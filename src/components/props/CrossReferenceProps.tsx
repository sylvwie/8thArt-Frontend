export interface CrossReferenceProps {
  game_id: number;
  title: string;
  year: string;
  moby_score: number;
  esrb_rating: string | null;
  main_cover_url: string;
  platforms: string[];
  genres: Record<string, string[]>; 
  tags: string[];
  explanation: string;
}