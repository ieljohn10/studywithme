import React, { Component } from "react";
import './ClassBase.scss';
import Modal from './Modal';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1>Marquee Container</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Marquee Here</p>
        </Modal>
        <p className='text-link' type="button" onClick={this.showModal}>
          Text Link here >>
        </p>
      </main>
    );
  }
}
export default Dashboard