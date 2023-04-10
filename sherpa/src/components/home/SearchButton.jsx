import './SearchButton.css'
import React from 'react';

const SearchButton = ({buttonLabel, onClickProp}) => {
    return (
        <button className="searchButton" onClick={onClickProp}>
            {buttonLabel}
        </button>
            
    );
}
export default SearchButton;