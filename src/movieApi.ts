const API_KEY = "e3ffb6091393154ff4a81caaf0b29666";
const BASE_PATH = `https://api.themoviedb.org/3/`;
const language = "language=ko&region=kr";

// `https://api.themoviedb.org/3/movie/popular?api_key=e3ffb6091393154ff4a81caaf0b29666&language=en-US&page=1&region=kr`

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMoviesNowPlaying() {
  return fetch(
    `${BASE_PATH}movie/now_playing?api_key=${API_KEY}&${language}`
  ).then((res) => res.json());
}

export function makeImagePath(id: string, format?: string) {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
}
