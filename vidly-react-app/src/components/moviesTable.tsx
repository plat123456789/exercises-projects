import * as React from "react";
import { Link } from "react-router-dom";
import { IMovie, ISortColumn } from "../modules";
import Like from "./common/like";
import Table from "./common/table";

interface IMoviesTableProps {
  movies: IMovie[];
  onLike: (movie: IMovie) => void;
  onDelete: (movie: IMovie) => void;
  onSort: (sortColumn: ISortColumn) => void;
  sortColumn: ISortColumn;
}

class MoviesTable extends React.Component<IMoviesTableProps> {
  public columns = [
    {
      content: (movie: IMovie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
      label: "Title",
      path: "title"
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      content: (movie: any) => (
        <Like
          liked={movie.liked}
          onClick={this.props.onLike.bind(this, movie)}
        />
      ),
      key: "like"
    },
    {
      content: (movie: any) => (
        <button
          onClick={this.props.onDelete.bind(this, movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
      key: "delete"
    }
  ];

  public render() {
    const { movies, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
