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

// const urlDetails = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1/movie/${movieId}?language=en-US`;
export const getMovieDetails = async (): Promise<MoviesResponse> => {
  const response = await fetch(urlNowplaying, options);
  const data = await response.json();
  return data;
};
