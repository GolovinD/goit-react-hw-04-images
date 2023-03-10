import React, { useState, useEffect }from 'react'

import Searchbar from './Searchbar/Searchbar'
import Loader from './Loader/Loader'
import Modal from './Modal/Modal'
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './Button/Button'
import pixabayApi from '../services/PixabayAPI'

import css from './App.module.css'

function App() {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1);
  const [largeImageURL, setLargeImageURL] = useState('');
  // const [id, setId] = useState('');
  const [tags, setTags] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  function toggleModal() {
    setShowModal(!showModal);
    }
  
  function handleFormSubmit (searchQuery) {
    // console.log(searchQuery);

    setSearchQuery(searchQuery);
    setSearchData([]);
    setPage(1);
    };
    // console.log(this.state);

  function loadMore() {
    setPage(prevPage => prevPage + 1)
    // console.log(page)
  };

  function onImgClick(largeImageURL, tags) {
    setLargeImageURL(largeImageURL);
    setTags(tags);
    toggleModal();
     // console.log(largeImageURL);
  };
  
  useEffect(() => {

    if (!searchQuery) {
      return;
    };

      setStatus('pending');
    
      pixabayApi(searchQuery, page)
        .then(data => {
          const { hits } = data
          // console.log(data);
          setSearchData(prevState => [...prevState, ...hits]);
          setStatus('resolved');
        })
        .catch((error) => {
          setError(error);
          setStatus('rejected');
        })
    
  }, [searchQuery, page])

    return (
      <div className={css.app}>

        <Searchbar
          onSubmit={handleFormSubmit}
        />
        
        {status === 'rejected' &&
          <h1>{error.message}</h1>}
        
          <ImageGallery
          searchData={searchData}
          onImgClick={onImgClick}
        />
        
        {status === 'pending' &&
          <Loader />}
        
        {searchData.length > 0 &&
          <Button
            onClick={loadMore}
          />}

        {showModal &&
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={toggleModal}
          />}        
            
      </div>
    );
}

export default App;