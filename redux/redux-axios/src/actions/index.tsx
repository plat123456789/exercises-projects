import axios from "axios";

const URL = "http://localhost:3004";

export function artistList(keywords: any) {
  return (dispatch: any) => {
    axios.get(`${URL}/artists?q=${keywords}`).then(response =>
      dispatch({
        payload: response.data,
        type: "SEARCH-ARTISTS"
      })
    );
  };
}

export function artistListAll() {
  return (dispatch: any) => {
    axios.get(`${URL}/artists?_limit=6`).then(response =>
      dispatch({
        payload: response.data,
        type: "GET-ARTISTS_ALL"
      })
    );
  };
}

export function artistDetail(id: any) {
  return (dispatch: any) => {
    axios.get(`${URL}/artists?id=${id}`).then(response =>
      dispatch({
        payload: response.data,
        type: "GET_DETAIL"
      })
    );
  };
}
