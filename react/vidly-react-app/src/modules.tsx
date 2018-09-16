export interface IMovie {
  _id: string;
  dailyRentalRate: number;
  genre: { _id: string; name: string };
  liked: boolean;
  title: string;
  numberInStock: number;
  publishDate?: string;
}

export interface IGenre {
  _id: string;
  name: string;
}

export interface ISortColumn {
  path: string;
  order: string;
}

export interface IErrors {
  [key: string]: any;
}
