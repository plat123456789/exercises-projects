import * as _ from "lodash";
import * as React from "react";

export interface IPaginationProps {
  itemCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

// export interface PaginationState {}

class Pagination extends React.Component<IPaginationProps> {
  public render() {
    const { itemCount, pageSize, currentPage, onPageChange } = this.props;

    const pagesCount = Math.ceil(itemCount / pageSize);

    if (pagesCount === 1) {
      return null;
    }

    const pages = _.range(1, pagesCount + 1);

    return (
      <nav>
        <ul className="pagination">
          {pages.map(page => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={onPageChange.bind(this, page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
