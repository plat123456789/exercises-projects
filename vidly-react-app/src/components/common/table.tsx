import * as React from "react";
import { ISortColumn } from "../../modules";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

export interface ITableProps {
  columns: object[];
  sortColumn: ISortColumn;
  onSort: (sortColumn: ISortColumn) => void;
  data: object[];
}

class Table extends React.Component<ITableProps> {
  public render() {
    const { columns, sortColumn, onSort, data } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={data} columns={columns} />
      </table>
    );
  }
}

export default Table;
