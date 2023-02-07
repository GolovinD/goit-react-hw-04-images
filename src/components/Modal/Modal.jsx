import { useEffect } from "react";
import { createPortal } from "react-dom"
import PropTypes from 'prop-types';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ largeImageURL, tags, onClose }) {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
           window.removeEventListener("keydown", handleKeyDown);
        };
    });

    function handleKeyDown (event) {
        if (event.code === 'Escape') {
            onClose();
        }
    }
    
    function handleBackdropClick (event) {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

    return createPortal (
        <div
        className={css.Overlay}
        onClick={handleBackdropClick}
        >
            <div className={css.Modal}>
                <img
                    src={largeImageURL}
                    alt={tags}
                />
            </div>
        </div>,
        modalRoot,
    )
}

export default Modal;

Modal.propTypes = {
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
}