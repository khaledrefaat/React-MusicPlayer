import React from 'react';
import ReactDom from 'react-dom';

import { ReactComponent as Svg } from '../../assets/spinner.svg';

const Modal = ({ spinner }) => {
  const ModalComponent = () => (
    <div className="modal">{spinner && <Svg />}</div>
  );

  return ReactDom.createPortal(
    <ModalComponent />,
    document.getElementById('modal')
  );
};

export default Modal;
