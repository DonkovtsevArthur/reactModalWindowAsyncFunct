import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Modal from "./components/Modal";
import Json from './components/Json'

class App extends Component {
  state = {
    isOpenModal: false
  };
  handleOpen = () => {
    this.setState( state => ({
      isOpenModal: !state.isOpenModal
    }));
  };
  render() {
    const { isOpenModal } = this.state;
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React 16</h1>
        </header>
        <main>
          <button className="bth" onClick={this.handleOpen}>Open</button>
          {isOpenModal && <Modal onClose={this.handleOpen}>
              <h1>Modal</h1>
            </Modal>}
        </main>
        <div className="json">
          <Json />
        </div>
      </div>;
  }
}

export default App;
