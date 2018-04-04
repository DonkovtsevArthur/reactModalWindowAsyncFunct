import React, { Component } from "react";
import ReactDOM from "react-dom";


class Modal extends Component {
  componentWillMount() {
    this.modal = document.createElement('div');
    document.body.appendChild(this.modal);
  }
  componentWillUnmount() {
    document.body.removeChild(this.modal);
  }
  render() {
    return ReactDOM.createPortal(<div className="modal">
        <div className="modal_window">
          <button className="bth" onClick={this.props.onClose}>Close</button>
          {this.props.children}
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            sit minima, vel quo dolore soluta perferendis doloremque
            deleniti mollitia voluptate incidunt, eaque, iure cupiditate
            iste distinctio magnam fugit quasi iusto.
          </div>
        </div>
      </div>, this.modal);
  }
}

export default Modal;
