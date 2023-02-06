import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({id, webformatURL, largeImageURL, tags, onImgClick}) => {
    return (
        <li
            className={css.galleryItem}>
            <img
                className={css.galleryImg}
                src={webformatURL}
                alt={tags}
                onClick={() => { onImgClick(largeImageURL, tags) }}
            />
       </li>
    )
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;