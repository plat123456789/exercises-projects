import http from "./httpService";

const apiEndpoint = "http://localhost:3900/api/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

export function deleteMovie(movieId: string) {
  return http.delete(`${apiEndpoint}/${movieId}`);
}

export function saveMovie(movie: any) {
  if (movie._id) {
    const body = { ...movie };
    return http.put(`${apiEndpoint}/${movie._id}`, body);
  }

  return http.post(apiEndpoint, movie);
}
