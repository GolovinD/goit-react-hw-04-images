import { Component } from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom"
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {

    static propTypes = {
        tags: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

   handleKeyDown = event => {
            if (event.code === 'Escape') {
                this.props.onClose();
            }
    }
    
    handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    }

    render() {
        const { largeImageURL, tags } = this.props;
        console.log(largeImageURL);

        return createPortal (
            <div
            className={css.Overlay}
            onClick={this.handleBackdropClick}
            >
                <div className={css.Modal}>
                    <img src={largeImageURL} alt={tags} />
                </div>
            </div>,
            modalRoot,
        )
    }
}

export default Modal;