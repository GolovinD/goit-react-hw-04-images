import React, { useState } from 'react';
// import { useState } from 'react';
import PropTypes from 'prop-types';

import css from './Searchbar.module.css'

const Searchbar = ({ onSubmit }) => {

   const [searchQuery, setSearchQuery]  = useState('')
      
    function handleChange (event) {
        // console.log(event.currentTarget.value);
        setSearchQuery(event.currentTarget.value);
    }
    
    function handleSubmit (event) {
        event.preventDefault();
        // console.log(this.state);
        const searchQueryNorm = searchQuery.toLowerCase();
        // console.log(searchQueryNorm);
        if (searchQueryNorm.trim() === '') {
            alert('Введіть запит');
            return;  
        }
        onSubmit(searchQueryNorm)
        setSearchQuery('');
    }
    
        return (
            <div>
               <header className={css.searchbar}>
                    <form
                    className={css.form}
                    onSubmit={handleSubmit}>
                        <input
                        className={css.input}
                        type="text"
                        value={searchQuery}  
                        onChange={handleChange}    
                        autocomplete="off"
                        placeholder="Search images and photos"
                        autofocus
                        />
                    </form>
                </header>
            </div>
        )  
}

export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}    
