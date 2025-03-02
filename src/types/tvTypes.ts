export interface IAiringTVShow {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface IGetAiringTVShowsResult {
  page?: number; // Defaults to 0
  results: IAiringTVShow[];
  total_pages?: number; // Defaults to 0
  total_results?: number; // Defaults to 0
}

interface IOnTheAirTVShow {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number; // Defaults to 0
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity?: number; // Defaults to 0
  poster_path: string;
  vote_average?: number; // Defaults to 0
  vote_count?: number; // Defaults to 0
}

export interface IGetOnTheAirTVShowsResult {
  page?: number; // Defaults to 0
  results: IOnTheAirTVShow[];
  total_pages?: number; // Defaults to 0
  total_results?: number; // Defaults to 0
}

export interface IPopularTVShow {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number; // Defaults to 0
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number; // Defaults to 0
  poster_path: string;
  vote_average: number; // Defaults to 0
  vote_count: number; // Defaults to 0
}

export interface IGetPopularTVShowsResult {
  page?: number; // Defaults to 0
  results: IPopularTVShow[];
  total_pages?: number; // Defaults to 0
  total_results?: number; // Defaults to 0
}

export interface ITopTVShow {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number; // Defaults to 0
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number; // Defaults to 0
  poster_path: string;
  vote_average: number; // Defaults to 0
  vote_count: number; // Defaults to 0
}

export interface IGetTopTVShowsResult {
  page?: number; // Defaults to 0
  results: ITopTVShow[];
  total_pages?: number; // Defaults to 0
  total_results?: number; // Defaults to 0
}