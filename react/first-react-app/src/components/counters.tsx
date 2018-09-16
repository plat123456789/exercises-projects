import * as React from "react";
import Counter from "./counter";

interface ICountersProps {
  counters: ICounter[];
  onDelete: (counterId: number) => void;
  onIncrement: (counter: ICounter) => void;
  onDecrement: (counter: ICounter) => void;
  onReset: () => void;
}

interface ICounter {
  id: number;
  value: number;
}

interface ICountersStates {
  counters: ICounter[];
}

class Counters extends React.Component<ICountersProps, ICountersStates> {
  public render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter: ICounter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
