import { Component } from "react";
interface State {
  name: string;
}

class Exercises01 extends Component<Record<string, never>, State> {
  state: State = {
    name: "Trần Đăng Việt",
  };

  render() {
    return (
      <div>
        <h1>Họ và tên: {this.state.name}</h1>
      </div>
    );
  }
}

export default Exercises01;
