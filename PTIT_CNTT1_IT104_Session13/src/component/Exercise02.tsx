import { Component } from "react";

interface State {
  id: number;
  name: string;
  birthday: string;
  address: string;
}

class Exercise02 extends Component<Record<string, never>, State> {
  state: State = {
    id: 1,
    name: "Trần Đăng Việt",
    birthday: "01/10/2006",
    address: "Hà Nội",
  };

  render() {
    return (
      <div style={{ fontFamily: "sans-serif" }}>
        <h2>Thông tin cá nhân</h2>
        <p>id: {this.state.id}</p>
        <p>Tên: {this.state.name}</p>
        <p>Ngày sinh: {this.state.birthday}</p>
        <p>Địa chỉ: {this.state.address}</p>
      </div>
    );
  }
}

export default Exercise02;
