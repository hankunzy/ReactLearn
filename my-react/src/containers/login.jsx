import React, { Component } from "react";
import "../css/App.css";
import "../css/buttons.css";

export default class login extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>登录页面</h1>
        <a href="/content" className="button button-3d button-action button-pill">Visit Us!</a>
        </header>
      </div >
    );
  }
};
