import * as React from "react";

interface ICounterProps {
  counter: { id: number; value: number };
  onDelete: (counterId: number) => void;
  onIncrement: (counter: { id: number; value: number }) => void;
  onDecrement: (counter: { id: number; value: number }) => void;
}

class Counter extends React.Component<ICounterProps> {
  private style: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "bold"
  };

  public render() {
    const {
      children,
      onIncrement,
      counter,
      onDelete,
      onDecrement
    } = this.props;

    return (
      <React.Fragment>
        {children}
        <div className="row">
          <div className="col-1">
            <span style={this.style} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col">
            <button
              onClick={onIncrement.bind(this, counter)}
              className="btn btn-secondary btn-sm"
            >
              Increment
            </button>
            <button
              onClick={onDecrement.bind(this, counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={counter.value === 0 ? true : false}
            >
              Decrement
            </button>
            <button
              onClick={onDelete.bind(this, counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
            {/* <ul>{this.renderTags()}</ul> */}
          </div>
        </div>
      </React.Fragment>
    );
  }

  private getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  private formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  // private renderTags() {
  //   if (this.state.tag.length === 0) {
  //     return <p>"There are no tags!"</p>;
  //   } else {
  //     return this.state.tag.map(element => <li key={element}>{element}</li>);
  //   }
  // }

  // private handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };
}

export default Counter;
