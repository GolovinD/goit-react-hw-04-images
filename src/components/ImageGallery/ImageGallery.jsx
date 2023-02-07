import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

import css from './ImageGallery.module.css'

const ImageGallery = ({ searchData, onImgClick }) => {
  
  

    return (
        <div>
            <ul className={css.gallery}>
                {searchData.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags={tags}    
                    onImgClick={onImgClick}
                />))}
            </ul>
        </div>
    )
}

export default ImageGallery;

ImageGallery.propTypes = {
  searchData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};