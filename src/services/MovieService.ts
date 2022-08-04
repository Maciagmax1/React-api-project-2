import axios from "axios";
import MovieDetails from "../models/MovieDetails";
import MultipleMovieResponse from "../models/MultipleMovieResponse";

const key: string = process.env.REACT_APP_MOVIE_KEY || "";

export const getPopularMovies = (): Promise<MultipleMovieResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/movie/popular", {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};

export const getMovieById = (id: string): Promise<MovieDetails> => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}`, {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};
