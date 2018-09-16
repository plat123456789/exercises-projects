import * as genresAPI from "./fakeGenreService";

const movies = [{
    _id: "5b21ca3eeb7f6fbccd471815",
    dailyRentalRate: 2.5,
    genre: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Action"
    },
    liked: true,
    title: "Terminator",

    numberInStock: 6,

    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    dailyRentalRate: 2.5,
    genre: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Action"
    },
    liked: true,
    title: "Die Hard",

    numberInStock: 5,

  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    dailyRentalRate: 3.5,
    genre: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Thriller"
    },
    liked: true,
    title: "Get Out",

    numberInStock: 8,

  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    dailyRentalRate: 3.5,
    genre: {
      _id: "5b21ca3eeb7f6fbccd471814",
      name: "Comedy"
    },
    liked: true,
    title: "Trip to Italy",

    numberInStock: 7,

  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    dailyRentalRate: 3.5,
    genre: {
      _id: "5b21ca3eeb7f6fbccd471814",
      name: "Comedy"
    },
    liked: false,
    title: "Airplane",

    numberInStock: 7,

  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    dailyRentalRate: 3.5,
    genre: {
      _id: "5b21ca3eeb7f6fbccd471814",
      name: "Comedy"
    },
    liked: false,
    numberInStock: 7,
    title: "Wedding Crashers",


  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    dailyRentalRate: 4.5,
    genre: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Thriller"
    },
    liked: false,
    title: "Gone Girl",

    numberInStock: 7,

  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    dailyRentalRate: 3.5,
    genre: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Thriller"
    },
    liked: true,
    title: "The Sixth Sense",

    numberInStock: 4,

  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    dailyRentalRate: 3.5,
    genre: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Action"
    },
    liked: false,
    title: "The Avengers",

    numberInStock: 7,

  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}