import { MoviesResponse } from "./types";

const urlPopular = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdlZTAyOWE3ODcwNzMxNmZhZjIzMWRhMDk1OTcyMyIsIm5iZiI6MTc3MDE3MTM0NC4wNDYwMDAyLCJzdWIiOiI2OTgyYWJkMDhiMGU3ZjlkZTFlNzQ3ZmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ObHeu5zpSLSNUoqt6oI185l3Kr94wRVt81bvGxbD3cY";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getPopularMovies = async (): Promise<MoviesResponse> => {
  const response = await fetch(urlPopular, options);
  const data = await response.json();
  return data;
};

const urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`;

export const getUpcomingMovies = async (): Promise<MoviesResponse> => {
  const response = await fetch(urlUpcoming, options);
  const data = await response.json();
  return data;
};

const urlToprated = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;

export const getTopratedMovies = async (): Promise<MoviesResponse> => {
  const response = await fetch(urlToprated, options);
  const data = await response.json();
  return data;
};

const urlNowplaying = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;

export const getNowPlayingMovies = async (): Promise<MoviesResponse> => {
  const response = await fetch(urlNowplaying, options);
  const data = await response.json();
  return data;
};

const urlDetails = (movieId: string) => {
  return `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
};
export const getMovieDetails = async (
  movieId: string,
): Promise<MovieDetails> => {
  const response = await fetch(urlDetails(movieId), options);
  const data = await response.json();
  return data;
};

// const urlCredit = (movie_id: string) => {
//   return `https://api.themoviedb.org/3/movie/${movie_id}/credits`;
// };

// export const getCredit = async () => {
//   const response = await fetch(urlCredit(movie_id), options);
//   const data = await response.json();
//   return data;
// };

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Credit {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  credit_id: string;
  department: string;
  job: string;
}
