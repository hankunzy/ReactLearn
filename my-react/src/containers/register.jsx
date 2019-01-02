import React, { Component } from "react";
import "../css/App.css";
import "../css/buttons.css";

export default class register extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <table>
            <tr>
              <td>User</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>PassWord</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>PassWord</td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </table>
        </header>
      </div>
    );
  }
}
