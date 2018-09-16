import * as jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndpoint = "http://localhost:3900/api/auth";
const tokenKey = "token";

export async function login(email: string, password: string) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt: any = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function loginWithJwt(jwt: string) {
  localStorage.setItem(tokenKey, jwt);
}

export default {
  getCurrentUser,
  login,
  loginWithJwt,
  logout
};
