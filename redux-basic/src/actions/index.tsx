export function moviesList() {
  return {
    payload: [
      { id: 1, name: "Pulp Fiction" },
      { id: 2, name: "Pacific Rim" },
      { id: 3, name: "Rambo" }
    ],
    type: "MOVIES_LIST"
  };
}

export function directorsList() {
  return {
    payload: [{ id: 1, name: "Tarantino" }, { id: 2, name: "Scorsese" }],
    type: "DIR_LIST"
  };
}
