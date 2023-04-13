import './SearchButton.css'
import React from 'react';
import Button from "react-bootstrap/Button";

const SearchButton = ({ buttonLabel, onClickProp }) => {
    return (
        <Button variant="primary" onClick={onClickProp}>
            {buttonLabel}
        </Button>

    );
}
export default SearchButton;