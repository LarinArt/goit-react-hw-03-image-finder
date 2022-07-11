import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { BsXLg } from 'react-icons/bs';
import {
  Backdrop,
  ModalField,
  ModalWrapper,
  ModalTitle,
  ModalButton,
  ModalImg,
} from './Modal.style';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    currentImageUrl: PropTypes.string,
    currentImageDescription: PropTypes.string,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { title, onClose, currentImageUrl, currentImageDescription } =
      this.props;

    return createPortal(
      <Backdrop onClick={this.handleClickBackdrop}>
        <ModalField>
          <ModalWrapper>
            {title && <ModalTitle>{title}</ModalTitle>}
            <ModalButton type="button" onClick={onClose}>
              <BsXLg width={'12px'} height={'12px'} />
            </ModalButton>
          </ModalWrapper>
          <ModalImg
            src={currentImageUrl}
            alt={currentImageDescription}
            loading="lazy"
          />
        </ModalField>
      </Backdrop>,
      modalRoot
    );
  }
}

export default Modal;
