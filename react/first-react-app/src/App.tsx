import * as React from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

interface ICountersProps {
  counters: ICounter[];
  onDelete: (counterId: number) => void;
  onIncrement: (counter: ICounter) => void;
  onDecrement: (counter: ICounter) => void;
  onReset: () => void;
  totalCounters: number;
}

interface ICounter {
  id: number;
  value: number;
}

interface ICountersStates {
  counters: ICounter[];
}

class App extends React.Component<ICountersProps, ICountersStates> {
  constructor(props: ICountersProps) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ]
    };
  }
  public render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter(element => element.value > 0).length
          }
          counters={[]}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
  private handleDelete = (counterId: number) => {
    const counters = this.state.counters.filter(
      element => element.id !== counterId
    );
    this.setState({ counters });
  };

  private handleReset = () => {
    const counters = this.state.counters.map(element => {
      element.value = 0;
      return element;
    });
    this.setState({ counters });
  };

  private handleIncrement = (counter: ICounter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  private handleDecrement = (counter: ICounter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
}

export default App;
