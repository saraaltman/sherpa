import './SearchButton.css'
import React, {useState} from 'react';

const SearchButton = ({buttonLabel}) => {

    const [label, setLabel] = useState("button");



    return (
        <button className="searchButton">
            {buttonLabel}
        </button>
            
    );
}
export default SearchButton;