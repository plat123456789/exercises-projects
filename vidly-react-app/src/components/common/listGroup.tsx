import * as React from "react";
import { IGenre } from "../../modules";

interface IListGroupProps {
  items: IGenre[];
  onItemSelect: (genre: IGenre) => void;
  textProperty?: string;
  valueProperty?: string;
  selectedItem: any;
}

class ListGroup extends React.Component<IListGroupProps> {
  public render() {
    const {
      items,
      onItemSelect,
      textProperty = "name",
      valueProperty = "_id",
      selectedItem = "aaa"
    } = this.props;

    return (
      <ul className="list-group" style={{ cursor: "pointer" }}>
        {items.map(item => (
          <li
            onClick={onItemSelect.bind(this, item)}
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
