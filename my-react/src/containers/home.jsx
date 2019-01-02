import React, { Component } from "react";
import "../css/App.css";
import "../css/buttons.css";
import logo from "../logo.svg";

class home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> 欢迎来到鹏飞梦科技有限公司 </h2>
          <div className = "Div-inline">
            <a id = "login" href="/login" class="button button-glow button-rounded button-raised button-primary">
              登录
            </a>
            <a
              href="/register" class="button button-glow button-border button-rounded button-primary">
              注册
            </a>
          </div>
        </header>
      </div>
    );
  }
}
export default home;
