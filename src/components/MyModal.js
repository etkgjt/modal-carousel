import Modal from "antd/lib/modal/Modal";
import React, { Component } from "react";
import styled from "styled-components";

class MyModal extends Component {
  static instance = null;
  static show = (cb = () => {}, children = {}) => {
    cb();
    if (MyModal.instance) {
      console.log("Modal show ne");
      MyModal.instance.setState({ visible: false }, () => {
        MyModal.instance.setState({ visible: true, children });
      });
    }
  };
  static hide = (onHideCb = () => {}) => {
    if (MyModal.instance) {
      MyModal.instance.setState({ visible: false });
      console.log("modal hide ne");
      onHideCb();
    }
  };

  constructor(props) {
    super(props);
    MyModal.instance = this;
    this.state = {
      visible: false,
      children: {},
    };
  }
  render() {
    const CustomModal = styled.div`
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;
    `;
    return (
      <Modal
        width={window.innerWidth}
        visible={MyModal?.instance?.state?.visible || false}
        onCancel={() => MyModal.hide()}
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 999,
        }}
        modalRender={() =>
          this.state.children ? this.state.children : <div />
        }
      ></Modal>
    );
  }
}
export default MyModal;
