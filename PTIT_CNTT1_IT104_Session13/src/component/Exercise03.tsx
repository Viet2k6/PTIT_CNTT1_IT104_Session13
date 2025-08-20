import { Component } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}

interface State {
  users: User[];
}

class Exercise03 extends Component<Record<string, never>, State> {
  state: State = {
    users: [
      { id: 1, name: "John", age: 30 },
      { id: 2, name: "Mary", age: 25 },
      { id: 3, name: "Jane", age: 20 },
    ],
  };

  render() {
    return (
      <div>
        <table
          style={{
            borderCollapse: "collapse",
            width: "auto",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "4px 8px", textAlign: "center" }}>Id</th>
              <th style={{ border: "1px solid black", padding: "4px 8px", textAlign: "center" }}>Name</th>
              <th style={{ border: "1px solid black", padding: "4px 8px", textAlign: "center" }}>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: "1px solid black", padding: "4px 8px", textAlign: "center" }}>
                  {user.id}
                </td>
                <td style={{ border: "1px solid black", padding: "4px 8px", textAlign: "center" }}>
                  {user.name}
                </td>
                <td style={{ border: "1px solid black", padding: "4px 8px", textAlign: "center" }}>
                  {user.age}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Exercise03;
