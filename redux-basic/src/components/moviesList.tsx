import * as React from "react";

export interface IMovieListProps {
  [key: string]: any;
}

const MovieList: React.SFC<IMovieListProps> = (props: any) => {
  const renderMovies = (movies: any) =>
    movies
      ? movies.map((item: any) => <div key={item.name}>{item.name}</div>)
      : null;
  console.log(props);
  return <div>{renderMovies(props.data.directors)}</div>;
};

export default MovieList;
