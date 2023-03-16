import './SearchButton.css'
import React from 'react';

const SearchButton = ({buttonLabel}) => {
    return (
        <button className="searchButton">
            {buttonLabel}
        </button>
            
    );
}
export default SearchButton;