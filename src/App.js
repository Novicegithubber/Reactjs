import React, { Component } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Enter your E-mail and Password</h1>
        <form>
          <fieldset>
            <label>
              <p>E-mail</p>
              <Form.Control type="email" placeholder="email@example.com" />
              <p>Password</p>
              <Form.Control type="password" placeholder="password" />
            </label>
          </fieldset>
          <div className="button">
            <Button variant="dark">Login</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
