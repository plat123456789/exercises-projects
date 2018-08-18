// json-server --watch db.json --port 3004
import axios from "axios";
const URL = `http://localhost:3004`;

export function getMessages() {
  const request = axios.get(`${URL}/messages`).then(response => response.data);
  return {
    payload: request,
    type: "GET_MESSAGES"
  };
}

export function addMessage(values: any, cb: any) {
  // const request = axios.post(`${URL}/messages`, values).then(() => cb());

  return {
    payload: "ok",
    type: "ADD_MESSAGE"
  };
}
