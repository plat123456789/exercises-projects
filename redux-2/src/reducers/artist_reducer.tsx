export default function(state = {}, action: any) {
  switch (action.type) {
    case "GET-ARTISTS_ALL":
      return { ...state, artistList: action.payload };

    case "SEARCH-ARTISTS":
      return { ...state, artistList: action.payload };
    case "GET_DETAIL":
      return { ...state, artistData: action.payload };
    default:
      return state;
  }
}
