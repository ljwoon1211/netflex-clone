interface ITVShow {
  adult?: boolean; // Defaults to true
  backdrop_path: string;
  id: number; // Defaults to 0
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
}

export interface IGetTVShowsResult {
  page?: number; // Defaults to 0
  results: ITVShow[];
  total_pages?: number; // Defaults to 0
  total_results?: number; // Defaults to 0
}
