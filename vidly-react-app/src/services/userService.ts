import http from "./httpService";

const apiEndpoint = "http://localhost:3900/api/users";

export function register(user: any) {
  return http.post(apiEndpoint, {
    email: user.username,
    name: user.name,
    password: user.password
  });
}
