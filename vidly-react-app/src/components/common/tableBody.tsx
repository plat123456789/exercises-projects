import * as _ from "lodash";
import * as React from "react";

interface ITableBodyProps {
  data: any;
  columns: any;
}

class TableBody extends React.Component<ITableBodyProps> {
  public render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item: any) => (
          <tr key={item._id}>
            {columns.map((column: any) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
  private renderCell = (item: any, column: any) => {
    if (column.content) {
      return column.content(item);
    }

    return _.get(item, column.path);
  };

  private createKey(item: any, column: any) {
    return item.id + (column.path || column.key);
  }
}

export default TableBody;
