import * as React from "react";
import { ISortColumn } from "../../modules";

interface ITableHeaderProps {
  columns: object[];
  sortColumn: ISortColumn;
  onSort: (sortColumn: ISortColumn) => void;
}

class TableHeader extends React.Component<ITableHeaderProps> {
  public render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column: any) => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={this.raiseSort.bind(this, column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
  private raiseSort = (path: string) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  private renderSortIcon(column: any) {
    if (column.path !== this.props.sortColumn.path) {
      return null;
    }
    if (this.props.sortColumn.order === "asc") {
      return <i className="fa fa-sort-asc" />;
    }
    return <i className="fa fa-sort-desc" />;
  }
}

export default TableHeader;
