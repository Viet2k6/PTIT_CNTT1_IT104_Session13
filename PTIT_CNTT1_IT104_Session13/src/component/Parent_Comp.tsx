import { Component } from "react";
import Children_Comp from "./Children_Comp";

interface State {
  name: string;
}

class Parent_Comp extends Component<Record<string, never>, State> {
  state: State = {
    name: "Nguyễn Văn Nam",
  };

  render() {
    return (
      <div>
        <h2>Họ và tên bên component cha: {this.state.name}</h2>
        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}

export default Parent_Comp;
